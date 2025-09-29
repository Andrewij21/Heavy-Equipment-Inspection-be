// src/services/report.service.ts

import { prisma } from "../lib/prisma";
import { NotFoundError } from "../utils/customeErrors";
import puppeteer from "puppeteer";
import * as XLSX from "xlsx";
import * as Handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";
import { Buffer } from "buffer";
import * as ExcelJS from "exceljs";
import { Prisma, InspectionStatus } from "@prisma/client";

// --- HANDLEBARS HELPERS ---
Handlebars.registerHelper("addOne", function (index: number) {
  return index + 1;
});
Handlebars.registerHelper("eq", function (v1: any, v2: any) {
  return v1 === v2;
});

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

const getOrDefault = (value: any, defaultValue: string = "N/A") => {
  if (value === null || value === undefined || value === "") {
    return defaultValue;
  }
  if (typeof value === "number" && value === 0) {
    return "0";
  }
  return String(value);
};

class ReportService {
  async getInspectionDataForExport(inspectionIds: string[]) {
    const inspections = await prisma.inspection.findMany({
      where: { id: { in: inspectionIds } },
      include: {
        trackDetails: true,
        approver: { select: { username: true, email: true, role: true } },
      },
    });

    if (inspections.length === 0) {
      throw new NotFoundError("No inspections found for the provided IDs.");
    }
    return inspections;
  }

  private prepareTemplateData(rawInspection: any) {
    const td = rawInspection.trackDetails || {};
    const approver = rawInspection.approver || {};

    const templateData = {
      inspectionDate: getOrDefault(rawInspection.inspectionDate),
      equipmentId: getOrDefault(rawInspection.equipmentId),
      smr: getOrDefault(rawInspection.smr),
      timeDown: getOrDefault(rawInspection.timeDown),
      timeOut: getOrDefault(rawInspection.timeOut),
      mechanicName: getOrDefault(rawInspection.mechanicName),
      approverName: getOrDefault(approver.username),
      location: getOrDefault(rawInspection.location),
      shift: getOrDefault(rawInspection.shift),

      // --- TRACK DETAILS (Mapping semua fields) ---
      lowerLockOutSwitch: getOrDefault(td.lowerLockOutSwitch),
      lowerTrackLinkTension: getOrDefault(td.lowerTrackLinkTension),
      lowerTrackShoeBolt: getOrDefault(td.lowerTrackShoeBolt),
      lowerIdlerRollerGuard: getOrDefault(td.lowerIdlerRollerGuard),
      lowerUnderGuard: getOrDefault(td.lowerUnderGuard),
      lowerFinalDriveSprocket: getOrDefault(td.lowerFinalDriveSprocket),
      lowerSwingCircle: getOrDefault(td.lowerSwingCircle),
      lowerAttachmentCondition: getOrDefault(td.lowerAttachmentCondition),
      lowerDrainWaterSediment: getOrDefault(td.lowerDrainWaterSediment),
      lowerHydraulicOilLevel: getOrDefault(td.lowerHydraulicOilLevel),

      upperEngineOilLevel: getOrDefault(td.upperEngineOilLevel),
      upperEngineVisual: getOrDefault(td.upperEngineVisual),
      upperCoolantLevel: getOrDefault(td.upperCoolantLevel),
      upperRadiatorEtc: getOrDefault(td.upperRadiatorEtc || td.upperRadiator),
      upperTurboInlet: getOrDefault(td.upperTurboInlet),
      upperAirCleaner: getOrDefault(td.upperAirCleaner),
      upperCompartmentLeaks: getOrDefault(td.upperCompartmentLeaks),
      upperHydraulicPump: getOrDefault(td.upperHydraulicPump),
      upperControlValve: getOrDefault(td.upperControlValve),
      upperSwingMachineOil: getOrDefault(td.upperSwingMachineOil),
      upperElectricWiring: getOrDefault(td.upperElectricWiring),
      upperBatteryElectrolyte: getOrDefault(td.upperBatteryElectrolyte),
      upperFanBelts: getOrDefault(td.upperFanBelts),
      upperCylinderLeaks: getOrDefault(td.upperCylinderLeaks),
      upperCoverHandRail: getOrDefault(td.upperCoverHandRail),

      tempCylBoomRh: getOrDefault(td.tempCylBoomRh, ""),
      tempCylBoomLh: getOrDefault(td.tempCylBoomLh, ""),
      tempCylArmRh: getOrDefault(td.tempCylArmRh, ""),
      tempCylArmLh: getOrDefault(td.tempCylArmLh, ""),
      tempCylBucketRh: getOrDefault(td.tempCylBucketRh, ""),
      tempCylBucketLh: getOrDefault(td.tempCylBucketLh, ""),

      greaseBoomCylFoot: getOrDefault(td.greaseBoomCylFoot),
      greaseBoomFootPin: getOrDefault(td.greaseBoomFootPin),
      greaseBoomCylRod: getOrDefault(td.greaseBoomCylRod),
      greaseArmCylFoot: getOrDefault(td.greaseArmCylFoot),
      greaseBoomArmCoupling: getOrDefault(td.greaseBoomArmCoupling),
      greaseArmCylRod: getOrDefault(td.greaseArmCylRod),
      greaseBucketCylFoot: getOrDefault(td.greaseBucketCylFoot),
      greaseArmLinkCoupling: getOrDefault(td.greaseArmLinkCoupling),
      greaseArmBucketCoupling: getOrDefault(td.greaseArmBucketCoupling),
      greaseLinkCoupling: getOrDefault(td.greaseLinkCoupling),
      greaseBucketCylRod: getOrDefault(td.greaseBucketCylRod),
      greaseBucketLinkCoupling: getOrDefault(td.greaseBucketLinkCoupling),

      cabinMonitorPanel: getOrDefault(td.cabinMonitorPanel),
      cabinSwitches: getOrDefault(td.cabinSwitches),
      cabinGauge: getOrDefault(td.cabinGauge),
      cabinControlLever: getOrDefault(td.cabinControlLever),
      cabinRadioComm: getOrDefault(td.cabinRadioComm),
      cabinFmRadio: getOrDefault(td.cabinFmRadio),
      cabinWorkLamp: getOrDefault(td.cabinWorkLamp),
      cabinTravelAlarm: getOrDefault(td.cabinTravelAlarm),
      cabinHorn: getOrDefault(td.cabinHorn),
      cabinMirror: getOrDefault(td.cabinMirror),
      cabinRotaryLamp: getOrDefault(td.cabinRotaryLamp),
      cabinWiper: getOrDefault(td.cabinWiper),
      cabinWindowWasher: getOrDefault(td.cabinWindowWasher),
      cabinAcFunction: getOrDefault(td.cabinAcFunction),
      cabinFuseRelay: getOrDefault(td.cabinFuseRelay),
      cabinOperatorSeat: getOrDefault(td.cabinOperatorSeat),
      safetyFireExtinguisher: getOrDefault(td.safetyFireExtinguisher),
      safetyEmergencyStop: getOrDefault(td.safetyEmergencyStop),
      safetyCabinRops: getOrDefault(td.safetyCabinRops),
      safetyBelt: getOrDefault(td.safetyBelt),

      topUpCoolant: getOrDefault(td.topUpCoolant || td.topUpCoolantQty, ""),
      topUpEngine: getOrDefault(td.topUpEngine || td.topUpEngineQty, ""),
      topUpHydraulic: getOrDefault(
        td.topUpHydraulic || td.topUpHydraulicQty,
        ""
      ),
      topUpSwingMachinery: getOrDefault(
        td.topUpSwingMachinery || td.topUpSwingMachineryQty,
        ""
      ),
      topUpFinalDrive: getOrDefault(
        td.topUpFinalDrive || td.topUpFinalDriveQty,
        ""
      ),

      findings: td.findings || [],
      equipmentGeneralType: rawInspection.equipmentGeneralType,
    };

    return templateData;
  }

  // --- EXCELJS GENERATOR (Menciptakan Layout Form BigDigger) ---
  private async generateExcelFile(rawInspection: any): Promise<Buffer> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Inspection Checksheet");
    const data = this.prepareTemplateData(rawInspection);

    // Helper untuk style border
    const thinBorderStyle: ExcelJS.BorderStyle = "thin";
    const allBorders: Partial<ExcelJS.Borders> = {
      top: { style: thinBorderStyle },
      bottom: { style: thinBorderStyle },
      left: { style: thinBorderStyle },
      right: { style: thinBorderStyle },
    };
    const sectionFill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "DDEBF7" },
    }; // Biru Muda

    let r = 1; // Start row
    let no = 0;
    const N = () => ++no;

    // Helper untuk menambahkan item checklist (HANYA 3 KOLOM)
    const addItem = (label: string, value: string) => {
      // Dihapus argumen 'notes'
      let row = worksheet.getRow(r);
      worksheet.mergeCells(`B${r}:D${r}`); // Merge Item Label area
      worksheet.mergeCells(`E${r}:F${r}`); // Merge Condition Area

      row.getCell("A").value = N();
      row.getCell("B").value = label;
      row.getCell("E").value = value; // CONDITION (Menggunakan kolom E yang di-merge)

      row.eachCell({ includeEmpty: true }, (cell) => {
        cell.border = allBorders;
      });
      r++;
    };

    const addTempItem = (label: string, rhValue: string, lhValue: string) => {
      let row = worksheet.getRow(r);
      worksheet.mergeCells(`B${r}:D${r}`);
      worksheet.mergeCells(`E${r}:F${r}`); // Merge Condition/Value Area

      row.getCell("A").value = N();
      row.getCell("B").value = label;
      row.getCell("E").value = `RH: ${rhValue} °C | LH: ${lhValue} °C`;

      row.eachCell({ includeEmpty: true }, (cell) => {
        cell.border = allBorders;
      });
      r++;
    };

    const addSectionHeader = (title: string, fill: any = sectionFill) => {
      worksheet.mergeCells(`A${r}:F${r}`);
      worksheet.getCell(`A${r}`).value = title;
      worksheet.getCell(`A${r}`).font = { bold: true };
      worksheet.getCell(`A${r}`).fill = fill;
      worksheet.getCell(`A${r}`).border = allBorders;
      r++;
    };

    // 1. Konfigurasi Kolom
    worksheet.columns = [
      { key: "A", width: 5 }, // No.
      { key: "B", width: 25 },
      { key: "C", width: 15 },
      { key: "D", width: 15 },
      { key: "E", width: 15 },
      { key: "F", width: 15 },
    ];

    // --- 2. HEADER TINGKAT ATAS & INFORMASI ---
    worksheet.mergeCells(`A${r}:F${r}`);
    worksheet.getCell(
      `A${r}`
    ).value = `DAILY INSPECTION CHECKSHEET (${data.equipmentGeneralType.toUpperCase()})`;
    worksheet.getCell(`A${r}`).font = { bold: true, size: 14 };
    worksheet.getCell(`A${r}`).alignment = { horizontal: "center" };
    r += 2;

    // Info Rows (Header Informasi)
    worksheet.mergeCells(`A${r}:B${r}`);
    worksheet.getCell(`A${r}`).value = "Date:";
    worksheet.getCell(`C${r}`).value = data.inspectionDate;
    worksheet.mergeCells(`D${r}:E${r}`);
    worksheet.getCell(`D${r}`).value = "SMR:";
    worksheet.getCell(`F${r}`).value = data.smr;
    r++;

    worksheet.mergeCells(`A${r}:B${r}`);
    worksheet.getCell(`A${r}`).value = "Unit No:";
    worksheet.getCell(`C${r}`).value = data.equipmentId;
    worksheet.mergeCells(`D${r}:E${r}`);
    worksheet.getCell(`D${r}`).value = "Mechanic:";
    worksheet.getCell(`F${r}`).value = data.mechanicName;
    r += 2;

    // --- 3. HEADER TABEL CHECKLIST UTAMA ---
    let currentHeaderRow = worksheet.getRow(r);
    worksheet.mergeCells(`B${r}:D${r}`); // Merge Item Check/Observe Area
    worksheet.mergeCells(`E${r}:F${r}`); // Merge Condition Area

    currentHeaderRow.values = [
      "No.",
      "COMPONENT & ITEM CHECK/OBSERVE",
      "",
      "",
      "CONDITION",
      "",
    ];

    currentHeaderRow.font = { bold: true };
    currentHeaderRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D3D3D3" },
    }; // Abu-abu
    currentHeaderRow.eachCell({ includeEmpty: true }, (cell) => {
      cell.border = allBorders;
    });
    r++;

    // --- 4. CHECKLIST ITEMS (Populasi Lengkap) ---

    // Lower Frame Area Check
    addSectionHeader("Lower Frame Area Check (Pemeriksaan Area Rangka Bawah)");
    addItem("Check Lock Out Switch", data.lowerLockOutSwitch);
    addItem("Check RH & LH Track Link Tension", data.lowerTrackLinkTension);
    addItem("Check RH & LH Track Shoe Bolt", data.lowerTrackShoeBolt);
    addItem(
      "Check Condition of idler, Roller & Wear Guard",
      data.lowerIdlerRollerGuard
    );
    addItem(
      "Check condition under guard, cover & counter weight",
      data.lowerUnderGuard
    );
    addItem(
      "Check Final Drive & Teeth Sprocket condition",
      data.lowerFinalDriveSprocket
    );
    addItem("Check Swing Circle condition", data.lowerSwingCircle);
    addItem(
      "Check Boom, Arm Stick, Link Bucket & Bucket",
      data.lowerAttachmentCondition
    );
    addItem(
      "Drain water sediment from fuel tank & water separator",
      data.lowerDrainWaterSediment
    );
    addItem("Check Hydraulic oil level", data.lowerHydraulicOilLevel);

    // Upper Structure Area Check
    addSectionHeader(
      "Upper Structure Area Check (Pemeriksaan Area Rangka Atas)"
    );
    addItem("Check engine oil level", data.upperEngineOilLevel);
    addItem(
      "Visual Check engine condition from: leak, Lost bolt, etc",
      data.upperEngineVisual
    );
    addItem("Check Coolant Level", data.upperCoolantLevel);
    addItem(
      "Check Radiator, Aftercooler, Hdy oil cooler & connection",
      data.upperRadiatorEtc
    );
    addItem("Check Condition of turbo inlet elbow", data.upperTurboInlet);
    addItem("Check Air Cleaner (add if necessary)", data.upperAirCleaner);
    addItem(
      "Check Oil Leaks, Coolant Leak & Gas leak at upper engine compartment area",
      data.upperCompartmentLeaks
    );
    addItem("Check Hydraulic Pump & Line Condition", data.upperHydraulicPump);
    addItem("Check Control Valve & Line Condition", data.upperControlValve);
    addItem("Check Swing Machine oil level", data.upperSwingMachineOil);
    addItem("Check Elektrik Wiring", data.upperElectricWiring);
    addItem("Check Battery Electrolit level", data.upperBatteryElectrolyte);
    addItem("Check fan Belt, & AC Compresor Belt", data.upperFanBelts);
    addItem("Check All Cylinder For Oil Leaks", data.upperCylinderLeaks);
    addItem("Check All Cover & Hand Rail", data.upperCoverHandRail);

    // Measure Cylinder Temperature
    addSectionHeader("Measure Cylinder Temperature");
    addTempItem(
      "Measure ∆T Cylinder boom",
      data.tempCylBoomRh,
      data.tempCylBoomLh
    );
    addTempItem(
      "Measure ∆T Cylinder arm",
      data.tempCylArmRh,
      data.tempCylArmLh
    );
    addTempItem(
      "Measure ∆T Cylinder bucket",
      data.tempCylBucketRh,
      data.tempCylBucketLh
    );

    // Grease Condition
    addSectionHeader("Check Grease Condition at (Periksa Kondisi Grease Pada)");
    addItem("Boom Cylinder Foot Pin (2 Point)", data.greaseBoomCylFoot);
    addItem("Boom Foot Pin (2 Point)", data.greaseBoomFootPin);
    addItem("Boom Cylinder Rod End (2 Point)", data.greaseBoomCylRod);
    addItem("Arm Cylinder Foot Pin (1 Point)", data.greaseArmCylFoot);
    addItem("Boom Arm Coupling Pin (1 Point)", data.greaseBoomArmCoupling);
    addItem("Arm Cylinder Rod End (1 Point)", data.greaseArmCylRod);
    addItem("Bucket Cylinder Foot Pin (1 Point)", data.greaseBucketCylFoot);
    addItem("Arm & Link Coupling Pin (1 Point)", data.greaseArmLinkCoupling);
    addItem(
      "Arm & Bucket Coupling Pin (1 Point)",
      data.greaseArmBucketCoupling
    );
    addItem("Link Coupling Pin (2 Point)", data.greaseLinkCoupling);
    addItem("Bucket Cylinder Rod End (1 Point)", data.greaseBucketCylRod);
    addItem(
      "Bucket & Link Copling Pin (1 Point)",
      data.greaseBucketLinkCoupling
    );

    // Inside Cabin Check
    addSectionHeader("Inside Cabin Check (Pemeriksaan Cabin)");
    addItem("Monitor Panel", data.cabinMonitorPanel);
    addItem("Switches", data.cabinSwitches);
    addItem("Gauge (Jarum Penunjuk)", data.cabinGauge);
    addItem("Control Lever & Control Pedal", data.cabinControlLever);
    addItem("Radio Communication", data.cabinRadioComm);
    addItem("FM Radio", data.cabinFmRadio);
    addItem("Work Lamp", data.cabinWorkLamp);
    addItem("Travel alarm", data.cabinTravelAlarm);
    addItem("Horn (Klakson)", data.cabinHorn);
    addItem("Mirror & Bracket", data.cabinMirror);
    addItem("Rotary Lamp", data.cabinRotaryLamp);
    addItem("Wiper & Blade", data.cabinWiper);
    addItem("Window Washer", data.cabinWindowWasher);
    addItem("Air Conditoner Function & Gas Level", data.cabinAcFunction);
    addItem("Check Fuse, Relay & Gas Level", data.cabinFuseRelay);
    addItem("Check Operator Seat Condition", data.cabinOperatorSeat);

    // Safety Function
    addSectionHeader("Safety Function (Pemeriksaan Alat Keselamatan)");
    addItem("Check Fire Extinghuiser", data.safetyFireExtinguisher);
    addItem("Check Function Emergancy Stop", data.safetyEmergencyStop);
    addItem("Check Condition of cabin & ROPS", data.safetyCabinRops);
    addItem("Check Safety Belt condition", data.safetyBelt);

    // Add Oil Section
    addSectionHeader("Add Oil");
    addItem("Coolant (AF-NACDM)", data.topUpCoolant);
    addItem("Engine (15W-40)", data.topUpEngine);
    addItem("Hydraulic (TURALIK 46)", data.topUpHydraulic);
    addItem("Swing Machinary (HD 50 / HD 30)", data.topUpSwingMachinery);
    addItem("Final Drive (HD 50 / HD 30)", data.topUpFinalDrive);

    // --- 5. Findings Section ---
    r += 2;
    addSectionHeader("Finding Inspection Unit (Temuan Inspeksi)", {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFC000" },
    });

    let findingsHeaderRow = worksheet.getRow(r);
    worksheet.mergeCells(`B${r}:D${r}`);
    worksheet.mergeCells(`E${r}:F${r}`);
    findingsHeaderRow.values = [
      "No.",
      "Finding Description",
      "",
      "",
      "Open (V)",
      "Close (V)",
    ];
    findingsHeaderRow.font = { bold: true };
    r++;

    // Findings Items
    (data.findings || []).forEach((f: any, index: number) => {
      let row = worksheet.getRow(r);
      worksheet.mergeCells(`B${r}:D${r}`);
      row.getCell("A").value = index + 1;
      row.getCell("B").value = f.description;
      row.getCell("E").value = f.status === "open" ? "✓" : "";
      row.getCell("F").value = f.status === "close" ? "✓" : "";
      row.eachCell({ includeEmpty: true }, (cell) => {
        cell.border = allBorders;
      });
      r++;
    });

    // --- 6. Signature Block ---
    r += 2;
    worksheet.mergeCells(`A${r}:C${r}`);
    worksheet.getCell(`A${r}`).value = "Checked By (Mechanic)";
    worksheet.mergeCells(`D${r}:F${r}`);
    worksheet.getCell(`D${r}`).value = "Approved By (Leader)";
    r++;

    worksheet.mergeCells(`A${r}:C${r}`);
    worksheet.getCell(`A${r}`).value = `Name: ${data.mechanicName}`;
    worksheet.mergeCells(`D${r}:F${r}`);
    worksheet.getCell(`D${r}`).value = `Name: ${data.approverName}`;
    r++;

    // Baris untuk tanda tangan
    worksheet.mergeCells(`A${r}:C${r + 3}`);
    worksheet.getCell(`A${r}`).value = "Signature:";
    worksheet.mergeCells(`D${r}:F${r + 3}`);
    worksheet.getCell(`D${r}`).value = "Signature:";

    // Finalize and return buffer
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer as unknown as Buffer;
  }
  // --------------------------------------------------------

  async generateFile(
    mappedData: any[],
    excelColumns: ExcelExportColumn[],
    rawInspectionData: any[],
    format: "pdf" | "excel" | "csv"
  ): Promise<Buffer> {
    if (format === "excel" || format === "csv") {
      if (rawInspectionData.length !== 1) {
        throw new Error(
          "Structured Excel export only supports one inspection at a time."
        );
      }

      if (format === "excel") {
        return this.generateExcelFile(rawInspectionData[0]);
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

      const templateName = rawInspection.equipmentGeneralType.replace(
        /\s/g,
        ""
      );
      const equipmentType = rawInspection.equipmentType.toLowerCase();

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
      const template = Handlebars.compile(templateHtml);

      const templateData = this.prepareTemplateData(rawInspection);

      const htmlContent = template({
        inspection: templateData,
        findings: templateData.findings,
      });

      let browser;
      try {
        browser = await puppeteer.launch({
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
          margin: { top: "10mm", right: "5mm", bottom: "10mm", left: "5mm" },
        });

        return pdfBuffer as unknown as Buffer;
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
