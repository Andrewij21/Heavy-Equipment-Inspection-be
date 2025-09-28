// src/services/report.service.ts

import { prisma } from "../lib/prisma";
import { NotFoundError } from "../utils/customeErrors";
import puppeteer from "puppeteer";
import * as XLSX from "xlsx";
import * as Handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";
import { Buffer } from "buffer";

// FIX 1: Register the custom helper outside the class
// This helper is used to convert the zero-based index (@index) to a one-based number (1, 2, 3...)
Handlebars.registerHelper("addOne", function (index: number) {
  return index + 1;
});

// FIX 2: Register the 'eq' helper used in the template for status checks
Handlebars.registerHelper("eq", function (v1: any, v2: any) {
  return v1 === v2;
});

// Define the required types
interface ExportPayload {
  inspectionIds: string[];
  format: "pdf" | "excel" | "csv";
}

// Define the column structure for the generalized Excel output
interface ExcelExportColumn {
  header: string;
  key: string;
  width?: number;
}

// Helper for safe data access in Handlebars templates
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
      where: {
        id: { in: inspectionIds },
      },
      include: {
        trackDetails: true,
        approver: {
          select: { username: true, email: true, role: true },
        },
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

    // Create a comprehensive, flattened object for HBS
    const templateData = {
      // --- BASE FIELDS ---
      inspectionDate: getOrDefault(rawInspection.inspectionDate),
      equipmentId: getOrDefault(rawInspection.equipmentId),
      smr: getOrDefault(rawInspection.smr),
      timeDown: getOrDefault(rawInspection.timeDown),
      timeOut: getOrDefault(rawInspection.timeOut),
      mechanicName: getOrDefault(rawInspection.mechanicName),
      notes: getOrDefault(rawInspection.notes),
      approverName: getOrDefault(approver.username),
      approvedStatus: getOrDefault(rawInspection.status),

      // =======================================================
      // UNIVERSAL & BIG DIGGER/SMALL PC FIELDS
      // =======================================================

      // Lower Frame Area Check (10 fields)
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

      // Upper Structure Area Check (15 fields)
      upperEngineOilLevel: getOrDefault(td.upperEngineOilLevel),
      upperEngineVisual: getOrDefault(td.upperEngineVisual),
      upperCoolantLevel: getOrDefault(td.upperCoolantLevel),
      // FIX for SmallPC: Check for upperRadiator (used in SmallPC.tsx) OR upperRadiatorEtc
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

      // Measure Cylinder Temperature (6 fields)
      tempCylBoomRh: getOrDefault(td.tempCylBoomRh, ""),
      tempCylBoomLh: getOrDefault(td.tempCylBoomLh, ""),
      tempCylArmRh: getOrDefault(td.tempCylArmRh, ""),
      tempCylArmLh: getOrDefault(td.tempCylArmLh, ""),
      tempCylBucketRh: getOrDefault(td.tempCylBucketRh, ""),
      tempCylBucketLh: getOrDefault(td.tempCylBucketLh, ""),

      // Grease Condition (12 fields)
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

      // Inside Cabin Check (16 fields)
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

      // Safety Function (4 fields)
      safetyFireExtinguisher: getOrDefault(td.safetyFireExtinguisher),
      safetyEmergencyStop: getOrDefault(td.safetyEmergencyStop),
      safetyCabinRops: getOrDefault(td.safetyCabinRops),
      safetyBelt: getOrDefault(td.safetyBelt),

      // Add Oil/TopUp - Use SmallPC naming (no Qty suffix) as priority,
      // falling back to Qty suffix if SmallPC fields are empty
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

      // Findings
      findings: td.findings || [],

      // Add Oil/TopUp (Quantity fields)
      topUpCoolantQty: getOrDefault(td.topUpCoolantQty, ""), // BigDigger uses 'Qty' suffix
      topUpEngineQty: getOrDefault(td.topUpEngineQty, ""),
      topUpHydraulicQty: getOrDefault(td.topUpHydraulicQty, ""),
      topUpSwingMachineryQty: getOrDefault(td.topUpSwingMachineryQty, ""),
      topUpFinalDriveQty: getOrDefault(td.topUpFinalDriveQty, ""),

      // =======================================================
      // BULLDOZER UNIQUE FIELDS (CRITICAL FIX)
      // =======================================================
      engineOilLevelLeakage: getOrDefault(td.engineOilLevelLeakage),
      engineCoolantLevelLeakage: getOrDefault(td.engineCoolantLevelLeakage),
      engineFuelSystemLeakage: getOrDefault(td.engineFuelSystemLeakage),
      engineBelts: getOrDefault(td.engineBelts),
      engineIntakeClamps: getOrDefault(td.engineIntakeClamps),
      engineExhaustLeakage: getOrDefault(td.engineExhaustLeakage),
      engineOperationalSound: getOrDefault(td.engineOperationalSound),

      powertrainTransmissionOil: getOrDefault(td.powertrainTransmissionOil),
      powertrainTorqueConverterOil: getOrDefault(
        td.powertrainTorqueConverterOil
      ),
      powertrainDifferentialOil: getOrDefault(td.powertrainDifferentialOil),
      powertrainFinalDriveOil: getOrDefault(td.powertrainFinalDriveOil),
      powertrainBrakeOperation: getOrDefault(td.powertrainBrakeOperation),
      powertrainPropellerShaft: getOrDefault(td.powertrainPropellerShaft),

      hydraulicOilLevel: getOrDefault(td.hydraulicOilLevel),
      hydraulicSystemLeakage: getOrDefault(td.hydraulicSystemLeakage),
      hydraulicPumpLineLeakage: getOrDefault(td.hydraulicPumpLineLeakage),
      hydraulicHoseCondition: getOrDefault(td.hydraulicHoseCondition),
      hydraulicCylinderLiftBlade: getOrDefault(td.hydraulicCylinderLiftBlade),
      hydraulicCylinderTiltBlade: getOrDefault(td.hydraulicCylinderTiltBlade),
      hydraulicCylinderLiftRipper: getOrDefault(td.hydraulicCylinderLiftRipper),
      hydraulicCylinderTiltRipper: getOrDefault(td.hydraulicCylinderTiltRipper),

      structureAutolube: getOrDefault(td.structureAutolube),
      structureEqualizerBarSeal: getOrDefault(td.structureEqualizerBarSeal),
      structurePivotShaftLeakage: getOrDefault(td.structurePivotShaftLeakage),
      structureFrameCracks: getOrDefault(td.structureFrameCracks),
      structureTrackLinkBushing: getOrDefault(td.structureTrackLinkBushing),
      structureUndercarriageBolt: getOrDefault(td.structureUndercarriageBolt),
      structureTrackTension: getOrDefault(td.structureTrackTension),
      structureRipperFrame: getOrDefault(td.structureRipperFrame),
      structureBogglePivot: getOrDefault(td.structureBogglePivot),
      structureMasterLinkBolt: getOrDefault(td.structureMasterLinkBolt),
      structureIdlerMountingBolt: getOrDefault(td.structureIdlerMountingBolt),
      structureEqualizerBarBearing: getOrDefault(
        td.structureEqualizerBarBearing
      ),
      structureBladeMountingPin: getOrDefault(td.structureBladeMountingPin),
      structureCuttingEdge: getOrDefault(td.structureCuttingEdge),
      structureEndBit: getOrDefault(td.structureEndBit),
      structureCarrieRoller: getOrDefault(td.structureCarrieRoller),
      structureRipperPoint: getOrDefault(td.structureRipperPoint),

      electricalBatteryMounting: getOrDefault(td.electricalBatteryMounting),
      electricalBatteryElectrolyte: getOrDefault(
        td.electricalBatteryElectrolyte
      ),
      electricalTerminalCleaning: getOrDefault(td.electricalTerminalCleaning),
      electricalConnectorCleaning: getOrDefault(td.electricalConnectorCleaning),
      electricalLamps: getOrDefault(td.electricalLamps),
      electricalIsolationSwitch: getOrDefault(td.electricalIsolationSwitch),
      electricalGaugePanel: getOrDefault(td.electricalGaugePanel),
      electricalBackupAlarm: getOrDefault(td.electricalBackupAlarm),
      // =======================================================
    };

    return templateData;
  }

  async generateFile(
    mappedData: any[],
    excelColumns: ExcelExportColumn[],
    rawInspectionData: any[],
    format: "pdf" | "excel" | "csv"
  ): Promise<Buffer> {
    if (format === "excel" || format === "csv") {
      const ws = XLSX.utils.json_to_sheet(mappedData);
      ws["!cols"] = excelColumns.map((col) => ({ wch: col.width || 15 }));
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Inspections Summary");

      if (format === "excel") {
        const uint8ArrayBuffer = XLSX.write(wb, {
          type: "buffer",
          bookType: "xlsx",
        });
        return Buffer.from(uint8ArrayBuffer);
      } else {
        const csvContent = XLSX.utils.sheet_to_csv(ws);
        return Buffer.from(csvContent, "utf-8");
      }
    } else if (format === "pdf") {
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
          margin: { top: "10mm", right: "5mm", bottom: "10mm", left: "1mm" },
        });

        return pdfBuffer as Buffer;
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

    // Define Columns and Map Data (remains the same)
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

    return {
      fileBuffer,
      mimeType: this.getMimeType(payload.format),
      fileName: `inspection_export_${new Date().toISOString().split("T")[0]}.${
        payload.format === "excel" ? "xlsx" : payload.format
      }`,
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
