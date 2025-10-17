import { prisma } from "../lib/prisma";
import { NotFoundError } from "../utils/customeErrors";
import chromium from "@sparticuz/chromium";
import * as XLSX from "xlsx";
import * as Handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";
import { Buffer } from "buffer";
import puppeteer from "puppeteer-core";
import * as puppeteerDev from "puppeteer";
import { generateExcelFile } from "../utils/generateExcelFile";
import JSZip from "jszip";
// Handlebars.registerHelper("addOne", function (index: number) {
//   return index + 1;
// });
// Handlebars.registerHelper("eq", function (v1: any, v2: any) {
//   return v1 === v2;
// });
import { registerHandlebarsHelpers } from "../utils/registerHandleBarsHelper";

// --- TYPES & HELPERS ---
interface ExportPayload {
  inspectionIds: string[];
  format: "pdf" | "excel" | "csv";
}

interface ExcelExportColumn {
  header: string;
  key: string;
  width?: number;
}

class ReportService {
  async getInspectionDataForExport(inspectionIds: string[]) {
    const inspections = await prisma.inspection.findMany({
      where: { id: { in: inspectionIds } },
      include: {
        trackDetails: true,
        wheelDetails: true,
        supportDetails: true,
        tyreDetails: true,
        approver: { select: { username: true, email: true, role: true } },
      },
    });

    if (inspections.length === 0) {
      throw new NotFoundError("No inspections found for the provided IDs.");
    }
    return inspections;
  }

  // --------------------------------------------------------

  async generateFile(
    mappedData: any[],
    excelColumns: ExcelExportColumn[],
    rawInspectionData: any[],
    format: "pdf" | "excel" | "csv"
  ): Promise<Buffer> {
    console.log({ rawInspectionData });
    if (format === "excel" || format === "csv") {
      if (rawInspectionData.length !== 1) {
        throw new Error(
          "Structured Excel export only supports one inspection at a time."
        );
      }

      if (format === "excel") {
        return generateExcelFile(rawInspectionData[0]);
      } else {
        // CSV Logic (menggunakan struktur data datar untuk CSV standar)
        const ws = XLSX.utils.json_to_sheet(mappedData);
        const csvContent = XLSX.utils.sheet_to_csv(ws);
        return Buffer.from(csvContent, "utf8") as unknown as Buffer;
      }
    } else if (format === "pdf") {
      // PDF Logic (Puppeteer)
      if (rawInspectionData.length !== 1) {
        throw new Error(
          "PDF form export only supports one inspection at a time."
        );
      }
      const rawInspection = rawInspectionData[0];
      // 1. Tentukan Nama General Type yang Benar secara Kondisional
      const equipmentType = rawInspection.equipmentType.toLowerCase();
      let generalTypeSource: string | undefined;

      if (equipmentType === "track") {
        generalTypeSource = rawInspection.equipmentGeneralType;
      } else if (equipmentType === "wheel") {
        // Asumsi field ini sudah ada di rawInspection jika equipmentType adalah 'wheel'
        generalTypeSource = rawInspection.wheelGeneralType;
      } else if (equipmentType === "tyre") {
        // Asumsi field ini sudah ada di rawInspection jika equipmentType adalah 'wheel'
        generalTypeSource = "tyre";
      } else {
        generalTypeSource = rawInspection.supportGeneralType;
      }

      if (!generalTypeSource) {
        throw new Error(
          `General equipment type source not found for type: ${equipmentType}`
        );
      }

      // 2. Buat Template Name (menghapus spasi)
      const templateName = generalTypeSource.replace(/\s/g, "");

      const templatePath = path.join(
        process.cwd(),
        "src",
        "templates",
        equipmentType,
        `${templateName}.hbs`
      );

      if (!fs.existsSync(templatePath)) {
        console.error(
          `ERROR: Template not found at attempted path: ${templatePath}`
        );
        throw new Error(`PDF Template not found for type: ${templateName}.`);
      }

      const templateHtml = fs.readFileSync(templatePath, "utf8");

      registerHandlebarsHelpers(Handlebars);

      const template = Handlebars.compile(templateHtml);
      // Tentukan object detail yang benar (trackDetails atau wheelDetails)
      const detailObject =
        equipmentType === "track"
          ? rawInspection.trackDetails
          : equipmentType === "wheel"
          ? rawInspection.wheelDetails
          : equipmentType === "support"
          ? rawInspection.supportDetails
          : equipmentType === "tyre" // <-- Tambahkan kondisi untuk Tipe Ban
          ? rawInspection.tyreDetails
          : null;
      // Baca file logo pertama
      const logo1Path = path.join(process.cwd(), "public", "logo.png");
      const logo1Buffer = fs.readFileSync(logo1Path);
      const logo1Base64 = `data:image/jpeg;base64,${logo1Buffer.toString(
        "base64"
      )}`;

      // Baca file logo kedua
      const logo2Path = path.join(process.cwd(), "public", "sbs.png");
      const logo2Buffer = fs.readFileSync(logo2Path);
      const logo2Base64 = `data:image/png;base64,${logo2Buffer.toString(
        "base64"
      )}`;
      // Dapatkan findings dari object detail yang sesuai
      const findingsArray = detailObject?.findings || [];

      if (rawInspection.status === "REJECTED") {
        rawInspection.approver = null;
      }
      const htmlContent = template({
        inspection: rawInspection,
        detailObject: detailObject,
        findings: findingsArray,
        logo1Base64: logo1Base64, // <-- Kirim data logo 1
        logo2Base64: logo2Base64, // <-- Kirim data logo 2
      });

      let browser;
      try {
        if (process.env.NODE_ENV === "development") {
          browser = await puppeteerDev.launch({
            args: [
              "--no-sandbox",
              "--disable-setuid-sandbox",
              "--disable-gpu",
              "--disable-dev-shm-usage",
              "--single-process",
            ],
            headless: true,
          });
          const page = await browser.newPage();
          await page.setContent(htmlContent, {
            waitUntil: "networkidle0",
            timeout: 30000,
          });

          const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: { top: "10mm", right: "0mm", bottom: "10mm", left: "0mm" },
          });
          return pdfBuffer as unknown as Buffer;
        } else {
          const viewport = {
            deviceScaleFactor: 1,
            hasTouch: false,
            height: 1080,
            isLandscape: true,
            isMobile: false,
            width: 1920,
          };
          browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: viewport,
            executablePath: await chromium.executablePath(),
            headless: true,
            ignoreHTTPSErrors: true,
          });

          const page = await browser.newPage();
          await page.setContent(htmlContent, {
            waitUntil: "networkidle0",
            timeout: 30000,
          });

          const pdfBuffer = await page.pdf({
            format: "a4",
            printBackground: true,
            margin: { top: "10mm", right: "0mm", bottom: "10mm", left: "0mm" },
          });
          return pdfBuffer as unknown as Buffer;
        }
      } catch (e) {
        console.error("❌ CRITICAL: Puppeteer/PDF generation failed:", e);
        throw new Error("Failed to generate PDF file due to server error.");
      } finally {
        if (browser) await browser.close();
      }
    }

    throw new Error(`Unsupported format: ${format}`);
  }

  async exportInspections(payload: ExportPayload) {
    const inspectionData = await this.getInspectionDataForExport(
      payload.inspectionIds
    );
    if (inspectionData.length === 1) {
      // Define Columns and Map Data (used for general CSV/flat export)
      const excelColumns: ExcelExportColumn[] = [
        { header: "Unit ID", key: "unitId", width: 12 },
        { header: "Type", key: "unitType", width: 10 },
        { header: "Location", key: "location", width: 20 },
        { header: "Mechanic", key: "mechanic", width: 20 },
        { header: "SMR", key: "smr", width: 8 },
        { header: "Status", key: "status", width: 10 },
        { header: "Lock Switch", key: "lowerLockOutSwitch", width: 15 },
      ];

      const mappedData = inspectionData.map((item: any) => ({
        unitId: item.equipmentId,
        unitType: item.equipmentGeneralType,
        location: item.location,
        mechanic: item.mechanicName,
        smr: item.smr,
        status: item.status,
        lowerLockOutSwitch: item.trackDetails?.lowerLockOutSwitch || "N/A",
      }));

      const fileBuffer = await this.generateFile(
        mappedData,
        excelColumns,
        inspectionData,
        payload.format
      );

      const extension = payload.format === "excel" ? "xlsx" : payload.format;

      return {
        fileBuffer,
        mimeType: this.getMimeType(payload.format),
        fileName: `inspection_export_${
          new Date().toISOString().split("T")[0]
        }.${extension}`,
      };
    }
    if (inspectionData.length > 1) {
      console.log(`Generating ZIP for ${inspectionData.length} files...`);
      if (payload.format === "csv") {
        throw new Error(
          "CSV export is not supported for multiple selections. Please choose PDF or Excel."
        );
      }

      const zip = new JSZip();
      const extension = payload.format === "excel" ? "xlsx" : payload.format;

      // Loop melalui setiap inspeksi untuk membuat filenya masing-masing
      for (const inspection of inspectionData) {
        const singleFileBuffer = await this.generateFile(
          [],
          [],
          [inspection],
          payload.format
        );

        // Buat nama file yang unik untuk setiap item di dalam zip
        const fileNameInZip = `Inspection_${
          inspection.equipmentId
        }_${inspection.id.slice(-6)}.${extension}`;

        // Tambahkan file ke dalam zip
        zip.file(fileNameInZip, singleFileBuffer);
      }

      // Generate buffer untuk file ZIP
      const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

      return {
        fileBuffer: zipBuffer,
        mimeType: "application/zip",
        fileName: `inspections_export_${
          new Date().toISOString().split("T")[0]
        }.zip`,
      };
    }
    // Jika tidak ada data, kembalikan error (atau respons kosong)
    throw new NotFoundError("No data found to export.");
  }

  private getMimeType(format: string): string {
    switch (format) {
      case "pdf":
        return "application/pdf";
      case "excel":
        return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      case "csv":
        return "text/csv";
      default:
        return "application/octet-stream";
    }
  }
}

export const reportService = new ReportService();
