// src/lib/excel-layouts/excel-layout-generator.ts
import * as ExcelJS from "exceljs";
import { Buffer } from "buffer";

// src/lib/excel-layouts/track-checklist-data.ts

interface ChecklistItem {
  label: string;
  field: string; // Nama field di object trackDetails
  type: "result" | "temp" | "topup"; // Tipe item
}

interface ChecklistSection {
  title: string;
  fields: ChecklistItem[];
}

export const trackChecklistDataBigDigger: ChecklistSection[] = [
  {
    title: "Lower Frame Area Check (Pemeriksaan Area Rangka Bawah)",
    fields: [
      {
        label: "Check Lock Out Switch",
        field: "lowerLockOutSwitch",
        type: "result",
      },
      {
        label: "Check RH & LH Track Link Tension",
        field: "lowerTrackLinkTension",
        type: "result",
      },
      {
        label: "Check RH & LH Track Shoe Bolt",
        field: "lowerTrackShoeBolt",
        type: "result",
      },
      {
        label: "Check Condition of idler, Roller & Wear Guard",
        field: "lowerIdlerRollerGuard",
        type: "result",
      },
      {
        label: "Check condition under guard, cover & counter weight",
        field: "lowerUnderGuard",
        type: "result",
      },
      {
        label: "Check Final Drive & Teeth Sprocket condition",
        field: "lowerFinalDriveSprocket",
        type: "result",
      },
      {
        label: "Check Swing Circle condition",
        field: "lowerSwingCircle",
        type: "result",
      },
      {
        label: "Check Boom, Arm Stick, Link Bucket & Bucket",
        field: "lowerAttachmentCondition",
        type: "result",
      },
      {
        label: "Drain water sediment from fuel tank & water separator",
        field: "lowerDrainWaterSediment",
        type: "result",
      },
      {
        label: "Check Hydraulic oil level",
        field: "lowerHydraulicOilLevel",
        type: "result",
      },
    ],
  },
  {
    title: "Upper Structure Area Check (Pemeriksaan Area Rangka Atas)",
    fields: [
      {
        label: "Check engine oil level",
        field: "upperEngineOilLevel",
        type: "result",
      },
      {
        label: "Visual Check engine condition from: leak, Lost bolt, etc",
        field: "upperEngineVisual",
        type: "result",
      },
      {
        label: "Check Coolant Level",
        field: "upperCoolantLevel",
        type: "result",
      },
      {
        label: "Check Radiator, Aftercooler, Hdy oil cooler & connection",
        field: "upperRadiatorEtc",
        type: "result",
      },
      {
        label: "Check Condition of turbo inlet elbow",
        field: "upperTurboInlet",
        type: "result",
      },
      {
        label: "Check Air Cleaner (add if necessary)",
        field: "upperAirCleaner",
        type: "result",
      },
      {
        label:
          "Check Oil Leaks, Coolant Leak & Gas leak at upper engine compartment area",
        field: "upperCompartmentLeaks",
        type: "result",
      },
      {
        label: "Check Hydraulic Pump & Line Condition",
        field: "upperHydraulicPump",
        type: "result",
      },
      {
        label: "Check Control Valve & Line Condition",
        field: "upperControlValve",
        type: "result",
      },
      {
        label: "Check Swing Machine oil level",
        field: "upperSwingMachineOil",
        type: "result",
      },
      {
        label: "Check Elektrik Wiring",
        field: "upperElectricWiring",
        type: "result",
      },
      {
        label: "Check Battery Electrolit level",
        field: "upperBatteryElectrolyte",
        type: "result",
      },
      {
        label: "Check fan Belt, & AC Compresor Belt",
        field: "upperFanBelts",
        type: "result",
      },
      {
        label: "Check All Cylinder For Oil Leaks",
        field: "upperCylinderLeaks",
        type: "result",
      },
      {
        label: "Check All Cover & Hand Rail",
        field: "upperCoverHandRail",
        type: "result",
      },
    ],
  },
  {
    title: "Measure Cylinder Temperature",
    // Field pengukuran suhu akan dihandle secara khusus di loop
    fields: [
      { label: "Cylinder Boom Status", field: "tempCylBoom", type: "temp" },
      { label: "Cylinder Arm Status", field: "tempCylArm", type: "temp" },
      { label: "Cylinder Bucket Status", field: "tempCylBucket", type: "temp" },
    ],
  },
  {
    title: "Check Grease Condition at (Periksa Kondisi Grease Pada)",
    fields: [
      {
        label: "Boom Cylinder Foot Pin (2 Point)",
        field: "greaseBoomCylFoot",
        type: "result",
      },
      {
        label: "Boom Foot Pin (2 Point)",
        field: "greaseBoomFootPin",
        type: "result",
      },
      {
        label: "Boom Cylinder Rod End (2 Point)",
        field: "greaseBoomCylRod",
        type: "result",
      },
      {
        label: "Arm Cylinder Foot Pin (1 Point)",
        field: "greaseArmCylFoot",
        type: "result",
      },
      {
        label: "Boom Arm Coupling Pin (1 Point)",
        field: "greaseBoomArmCoupling",
        type: "result",
      },
      {
        label: "Arm Cylinder Rod End (1 Point)",
        field: "greaseArmCylRod",
        type: "result",
      },
      {
        label: "Bucket Cylinder Foot Pin (1 Point)",
        field: "greaseBucketCylFoot",
        type: "result",
      },
      {
        label: "Arm & Link Coupling Pin (1 Point)",
        field: "greaseArmLinkCoupling",
        type: "result",
      },
      {
        label: "Arm & Bucket Coupling Pin (1 Point)",
        field: "greaseArmBucketCoupling",
        type: "result",
      },
      {
        label: "Link Coupling Pin (2 Point)",
        field: "greaseLinkCoupling",
        type: "result",
      },
      {
        label: "Bucket Cylinder Rod End (1 Point)",
        field: "greaseBucketCylRod",
        type: "result",
      },
      {
        label: "Bucket & Link Copling Pin (1 Point)",
        field: "greaseBucketLinkCoupling",
        type: "result",
      },
    ],
  },
  {
    title: "Inside Cabin Check (Pemeriksaan Cabin)",
    fields: [
      { label: "Monitor Panel", field: "cabinMonitorPanel", type: "result" },
      { label: "Switches", field: "cabinSwitches", type: "result" },
      { label: "Gauge (Jarum Penunjuk)", field: "cabinGauge", type: "result" },
      {
        label: "Control Lever & Control Pedal",
        field: "cabinControlLever",
        type: "result",
      },
      { label: "Radio Communication", field: "cabinRadioComm", type: "result" },
      { label: "FM Radio", field: "cabinFmRadio", type: "result" },
      { label: "Work Lamp", field: "cabinWorkLamp", type: "result" },
      { label: "Travel alarm", field: "cabinTravelAlarm", type: "result" },
      { label: "Horn (Klakson)", field: "cabinHorn", type: "result" },
      { label: "Mirror & Bracket", field: "cabinMirror", type: "result" },
      { label: "Rotary Lamp", field: "cabinRotaryLamp", type: "result" },
      { label: "Wiper & Blade", field: "cabinWiper", type: "result" },
      { label: "Window Washer", field: "cabinWindowWasher", type: "result" },
      {
        label: "Air Conditoner Function & Gas Level",
        field: "cabinAcFunction",
        type: "result",
      },
      {
        label: "Check Fuse, Relay & Gas Level",
        field: "cabinFuseRelay",
        type: "result",
      },
      {
        label: "Check Operator Seat Condition",
        field: "cabinOperatorSeat",
        type: "result",
      },
    ],
  },
  {
    title: "Safety Function (Pemeriksaan Alat Keselamatan)",
    fields: [
      {
        label: "Check Fire Extinghuiser",
        field: "safetyFireExtinguisher",
        type: "result",
      },
      {
        label: "Check Function Emergancy Stop",
        field: "safetyEmergencyStop",
        type: "result",
      },
      {
        label: "Check Condition of cabin & ROPS",
        field: "safetyCabinRops",
        type: "result",
      },
      {
        label: "Check Safety Belt condition",
        field: "safetyBelt",
        type: "result",
      },
    ],
  },
  {
    title: "Add Oil",
    fields: [
      { label: "Coolant (AF-NACDM)", field: "topUpCoolant", type: "topup" },
      { label: "Engine (15W-40)", field: "topUpEngine", type: "topup" },
      {
        label: "Hydraulic (TURALIK 46)",
        field: "topUpHydraulic",
        type: "topup",
      },
      {
        label: "Swing Machinary (HD 50 / HD 30)",
        field: "topUpSwingMachinery",
        type: "topup",
      },
      {
        label: "Final Drive (HD 50 / HD 30)",
        field: "topUpFinalDrive",
        type: "topup",
      },
    ],
  },
];
export const trackChecklistDataSmallPC: ChecklistSection[] = [
  {
    title: "Lower Frame Area Check (Pemeriksaan Area Rangka Bawah)",
    fields: [
      {
        label: "Check Lock Out Switch",
        field: "lowerLockOutSwitch",
        type: "result",
      },
      {
        label: "Check RH & LH Track Link Tension",
        field: "lowerTrackLinkTension",
        type: "result",
      },
      {
        label: "Check RH & LH Track Shoe Bolt",
        field: "lowerTrackShoeBolt",
        type: "result",
      },
      {
        label: "Check Condition of idler, Roller & Wear Guard",
        field: "lowerIdlerRollerGuard",
        type: "result",
      },
      {
        label: "Check condition under guard, cover & counter weight",
        field: "lowerUnderGuard",
        type: "result",
      },
      {
        label: "Check Final Drive & Teeth Sprocket condition",
        field: "lowerFinalDriveSprocket",
        type: "result",
      },
      {
        label: "Check Swing Circle condition",
        field: "lowerSwingCircle",
        type: "result",
      },
      {
        label: "Check Boom, Arm Stick, Link Bucket & Bucket",
        field: "lowerAttachmentCondition",
        type: "result",
      },
      {
        label: "Drain water sediment from fuel tank & water separator",
        field: "lowerDrainWaterSediment",
        type: "result",
      },
      {
        label: "Check Hydraulic oil level",
        field: "lowerHydraulicOilLevel",
        type: "result",
      },
    ],
  },
  {
    title: "Upper Structure Area Check (Pemeriksaan Area Rangka Atas)",
    fields: [
      {
        label: "Check engine oil level",
        field: "upperEngineOilLevel",
        type: "result",
      },
      {
        label: "Visual Check engine condition from: leak, Lost bolt, etc",
        field: "upperEngineVisual",
        type: "result",
      },
      {
        label: "Check Coolant Level",
        field: "upperCoolantLevel",
        type: "result",
      },
      {
        label: "Check Radiator, Aftercooler, Hdy oil cooler & connection",
        field: "upperRadiatorEtc",
        type: "result",
      },
      {
        label: "Check Condition of turbo inlet elbow",
        field: "upperTurboInlet",
        type: "result",
      },
      {
        label: "Check Air Cleaner (add if necessary)",
        field: "upperAirCleaner",
        type: "result",
      },
      {
        label:
          "Check Oil Leaks, Coolant Leak & Gas leak at upper engine compartment area",
        field: "upperCompartmentLeaks",
        type: "result",
      },
      {
        label: "Check Hydraulic Pump & Line Condition",
        field: "upperHydraulicPump",
        type: "result",
      },
      {
        label: "Check Control Valve & Line Condition",
        field: "upperControlValve",
        type: "result",
      },
      {
        label: "Check Swing Machine oil level",
        field: "upperSwingMachineOil",
        type: "result",
      },
      {
        label: "Check Elektrik Wiring",
        field: "upperElectricWiring",
        type: "result",
      },
      {
        label: "Check Battery Electrolit level",
        field: "upperBatteryElectrolyte",
        type: "result",
      },
      {
        label: "Check fan Belt, & AC Compresor Belt",
        field: "upperFanBelts",
        type: "result",
      },
      {
        label: "Check All Cylinder For Oil Leaks",
        field: "upperCylinderLeaks",
        type: "result",
      },
      {
        label: "Check All Cover & Hand Rail",
        field: "upperCoverHandRail",
        type: "result",
      },
    ],
  },
  {
    title: "Measure Cylinder Temperature",
    // Field pengukuran suhu akan dihandle secara khusus di loop
    fields: [
      { label: "Cylinder Boom Status", field: "tempCylBoom", type: "temp" },
    ],
  },
  {
    title: "Check Grease Condition at (Periksa Kondisi Grease Pada)",
    fields: [
      {
        label: "Boom Cylinder Foot Pin (2 Point)",
        field: "greaseBoomCylFoot",
        type: "result",
      },
      {
        label: "Boom Foot Pin (2 Point)",
        field: "greaseBoomFootPin",
        type: "result",
      },
      {
        label: "Boom Cylinder Rod End (2 Point)",
        field: "greaseBoomCylRod",
        type: "result",
      },
      {
        label: "Arm Cylinder Foot Pin (1 Point)",
        field: "greaseArmCylFoot",
        type: "result",
      },
      {
        label: "Boom Arm Coupling Pin (1 Point)",
        field: "greaseBoomArmCoupling",
        type: "result",
      },
      {
        label: "Arm Cylinder Rod End (1 Point)",
        field: "greaseArmCylRod",
        type: "result",
      },
      {
        label: "Bucket Cylinder Foot Pin (1 Point)",
        field: "greaseBucketCylFoot",
        type: "result",
      },
      {
        label: "Arm & Link Coupling Pin (1 Point)",
        field: "greaseArmLinkCoupling",
        type: "result",
      },
      {
        label: "Arm & Bucket Coupling Pin (1 Point)",
        field: "greaseArmBucketCoupling",
        type: "result",
      },
      {
        label: "Link Coupling Pin (2 Point)",
        field: "greaseLinkCoupling",
        type: "result",
      },
      {
        label: "Bucket Cylinder Rod End (1 Point)",
        field: "greaseBucketCylRod",
        type: "result",
      },
      {
        label: "Bucket & Link Copling Pin (1 Point)",
        field: "greaseBucketLinkCoupling",
        type: "result",
      },
    ],
  },
  {
    title: "Inside Cabin Check (Pemeriksaan Cabin)",
    fields: [
      { label: "Monitor Panel", field: "cabinMonitorPanel", type: "result" },
      { label: "Switches", field: "cabinSwitches", type: "result" },
      { label: "Gauge (Jarum Penunjuk)", field: "cabinGauge", type: "result" },
      {
        label: "Control Lever & Control Pedal",
        field: "cabinControlLever",
        type: "result",
      },
      { label: "Radio Communication", field: "cabinRadioComm", type: "result" },
      { label: "FM Radio", field: "cabinFmRadio", type: "result" },
      { label: "Work Lamp", field: "cabinWorkLamp", type: "result" },
      { label: "Travel alarm", field: "cabinTravelAlarm", type: "result" },
      { label: "Horn (Klakson)", field: "cabinHorn", type: "result" },
      { label: "Mirror & Bracket", field: "cabinMirror", type: "result" },
      { label: "Rotary Lamp", field: "cabinRotaryLamp", type: "result" },
      { label: "Wiper & Blade", field: "cabinWiper", type: "result" },
      { label: "Window Washer", field: "cabinWindowWasher", type: "result" },
      {
        label: "Air Conditoner Function & Gas Level",
        field: "cabinAcFunction",
        type: "result",
      },
      {
        label: "Check Fuse, Relay & Gas Level",
        field: "cabinFuseRelay",
        type: "result",
      },
      {
        label: "Check Operator Seat Condition",
        field: "cabinOperatorSeat",
        type: "result",
      },
    ],
  },
  {
    title: "Safety Function (Pemeriksaan Alat Keselamatan)",
    fields: [
      {
        label: "Check Fire Extinghuiser",
        field: "safetyFireExtinguisher",
        type: "result",
      },
      {
        label: "Check Function Emergancy Stop",
        field: "safetyEmergencyStop",
        type: "result",
      },
      {
        label: "Check Condition of cabin & ROPS",
        field: "safetyCabinRops",
        type: "result",
      },
      {
        label: "Check Safety Belt condition",
        field: "safetyBelt",
        type: "result",
      },
    ],
  },
  {
    title: "Add Oil",
    fields: [
      { label: "Coolant", field: "topUpCoolant", type: "topup" },
      { label: "Engine (15W-40)", field: "topUpEngine", type: "topup" },
      {
        label: "Hydraulic (TURALIK 46)",
        field: "topUpHydraulic",
        type: "topup",
      },
      {
        label: "Swing Machinary (HD 50 / HD 30)",
        field: "topUpSwingMachinery",
        type: "topup",
      },
      {
        label: "Final Drive (HD 50 / HD 30)",
        field: "topUpFinalDrive",
        type: "topup",
      },
    ],
  },
];

const getTrackChecklistData = (type: string) => {
  switch (type) {
    case "BigDigger":
      return trackChecklistDataBigDigger;
    case "SmallPC":
      return trackChecklistDataSmallPC;
    default:
      return [];
  }
};
// --- HELPER UNIVERSAL (Untuk semua layout) ---

// Style Definitions
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
};

// --- TIPE FUNGSI LAYOUT ---
type ExcelLayoutFunction = (worksheet: ExcelJS.Worksheet, data: any) => number;

// --- STATE TEMPORARY (Untuk nomor baris dan item) ---
let globalRow = 1;
let globalItemNo = 0;
const N = () => ++globalItemNo;

// --- HELPER FUNCTION UNTUK MEMBUAT BARIS ---

// Helper untuk menambahkan item checklist non-suhu/topup (Condition di G)
const addItem = (
  worksheet: ExcelJS.Worksheet,
  label: string,
  value: string
) => {
  let row = worksheet.getRow(globalRow);
  worksheet.mergeCells(`B${globalRow}:F${globalRow}`);

  row.getCell("A").value = N();
  row.getCell("B").value = label;
  row.getCell("G").value = value;
  row.getCell("G").alignment = { horizontal: "left" };

  row.eachCell({ includeEmpty: true }, (cell) => {
    cell.border = allBorders;
  });
  globalRow++;
};

// Helper untuk menambahkan item suhu (RH/LH/Delta di E:F, Status di G)
const addTempItem = (
  worksheet: ExcelJS.Worksheet,
  label: string,
  rhValue: string,
  lhValue: string,
  deltaTValue: string,
  resultValue: string
) => {
  let row = worksheet.getRow(globalRow);

  // Label di B:D
  worksheet.mergeCells(`B${globalRow}:D${globalRow}`);

  // Nilai Suhu di E:F
  worksheet.mergeCells(`E${globalRow}:F${globalRow}`);

  row.getCell("A").value = N();
  row.getCell("B").value = label;

  row.getCell(
    "E"
  ).value = `RH: ${rhValue} °C | LH: ${lhValue} °C | ΔT: ${deltaTValue} °C`;

  // Status Hasil di G
  row.getCell("G").value = resultValue;

  row.eachCell({ includeEmpty: true }, (cell) => {
    cell.border = allBorders;
  });

  row.getCell("E").alignment = { horizontal: "left" };
  row.getCell("G").alignment = { horizontal: "left" };

  globalRow++;
};

// Helper untuk membuat header section
const addSectionHeader = (
  worksheet: ExcelJS.Worksheet,
  title: string,
  fill: any = sectionFill
) => {
  worksheet.mergeCells(`A${globalRow}:G${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = title;
  worksheet.getCell(`A${globalRow}`).font = { bold: true };
  worksheet.getCell(`A${globalRow}`).fill = fill;
  worksheet.getCell(`A${globalRow}`).border = allBorders;
  //   worksheet.getCell("A").alignment = { horizontal: "left" };

  globalRow++;
};

// =========================================================================
// IMPLEMENTASI LAYOUT SPESIFIK (Standard Track)
// =========================================================================

const generateStandardTrackLayout: ExcelLayoutFunction = (worksheet, data) => {
  // Reset nomor item untuk setiap layout
  globalRow = 1;
  globalItemNo = 0;
  const type = data.equipmentGeneralType;
  const td = data.trackDetails || {};

  // --- 2. HEADER TINGKAT ATAS & INFORMASI ---

  // Title
  worksheet.mergeCells(`A${globalRow}:G${globalRow}`);
  worksheet.getCell(
    `A${globalRow}`
  ).value = `DAILY INSPECTION CHECKSHEET (${data.equipmentGeneralType.toUpperCase()})`;
  worksheet.getCell(`A${globalRow}`).font = { bold: true, size: 14 };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "center" };
  globalRow += 2;

  // Info Rows (Header Informasi)
  worksheet.mergeCells(`A${globalRow}:B${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = "Date:";
  worksheet.getCell(`C${globalRow}`).value = data.inspectionDate;
  worksheet.mergeCells(`D${globalRow}:E${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = "SMR:";
  worksheet.getCell(`F${globalRow}`).value = data.smr;
  worksheet.getCell(`F${globalRow}`).alignment = { horizontal: "left" };
  globalRow++;

  worksheet.mergeCells(`A${globalRow}:B${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = "Unit No:";
  worksheet.getCell(`C${globalRow}`).value = data.equipmentId;
  worksheet.mergeCells(`D${globalRow}:E${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = "Mechanic:";
  worksheet.getCell(`F${globalRow}`).value = data.mechanicName;
  globalRow += 2;

  // --- 3. HEADER TABEL CHECKLIST UTAMA ---
  let currentHeaderRow = worksheet.getRow(globalRow);

  // Menggunakan merge B:F untuk label
  worksheet.mergeCells(`B${globalRow}:F${globalRow}`);

  currentHeaderRow.values = [
    "No.",
    "COMPONENT & ITEM CHECK/OBSERVE",
    "",
    "",
    "",
    "",
    "STATUS",
  ];

  currentHeaderRow.font = { bold: true };
  currentHeaderRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "D3D3D3" },
  };
  currentHeaderRow.eachCell({ includeEmpty: true }, (cell) => {
    cell.border = allBorders;
  });
  globalRow++;
  const trackChecklistData = getTrackChecklistData(type);
  // --- 4. LOOPING UNTUK CHECKLIST ---
  trackChecklistData.forEach((section) => {
    addSectionHeader(worksheet, section.title);

    section.fields.forEach((item) => {
      const resultValue = data.trackDetails[item.field];

      if (item.type === "temp") {
        // Logic khusus untuk item temperatur (hanya 3 item)
        if (item.field === "tempCylBoom") {
          addTempItem(
            worksheet,
            "Cylinder Boom",
            td.tempCylBoomRh,
            td.tempCylBoomLh,
            td.deltaTCylBoom,
            resultValue
          );
        } else if (item.field === "tempCylArm") {
          addTempItem(
            worksheet,
            "Cylinder Arm",
            td.tempCylArmRh,
            td.tempCylArmLh,
            td.deltaTCylArm,
            resultValue
          );
        } else if (item.field === "tempCylBucket") {
          addTempItem(
            worksheet,
            "Cylinder Bucket",
            td.tempCylBucketRh,
            td.tempCylBucketLh,
            td.deltaTCylBucket,
            resultValue
          );
        }
        // Catatan: Item resultEnum pada tempCylBoom/Arm/Bucket sekarang diabaikan di loop addItem biasa
      } else {
        // Logic untuk item result (OK/NG/NA) dan topup
        addItem(worksheet, item.label, resultValue);
      }
    });
  });

  // --- 5. Findings Section ---
  globalRow += 2;
  addSectionHeader(worksheet, "Finding Inspection Unit (Temuan Inspeksi)", {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFC000" },
  });

  let findingsHeaderRow = worksheet.getRow(globalRow);
  worksheet.mergeCells(`B${globalRow}:D${globalRow}`);
  worksheet.mergeCells(`E${globalRow}:F${globalRow}`);
  findingsHeaderRow.values = [
    "No.",
    "Finding Description",
    "",
    "",
    "Open (V)",
    "Close (V)",
    "", // Kolom G kosong di header findings
  ];
  findingsHeaderRow.font = { bold: true };
  globalRow++;

  // Findings Items
  (data.trackDetails?.findings || []).forEach((f: any, index: number) => {
    let row = worksheet.getRow(globalRow);
    worksheet.mergeCells(`B${globalRow}:D${globalRow}`);
    row.getCell("A").value = index + 1;
    row.getCell("B").value = f.description;
    row.getCell("E").value = f.status === "open" ? "✓" : "";
    row.getCell("F").value = f.status === "close" ? "✓" : "";
    row.eachCell({ includeEmpty: true }, (cell) => {
      cell.border = allBorders;
    });
    globalRow++;
  });

  // --- 6. Signature Block ---
  // Note: Signature block merge harus disesuaikan jika ingin sampai kolom G
  globalRow += 2;
  worksheet.mergeCells(`A${globalRow}:C${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = "Checked By (Mechanic)";
  worksheet.mergeCells(`D${globalRow}:F${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = "Approved By (Leader)";
  globalRow++;

  worksheet.mergeCells(`A${globalRow}:C${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = `Name: ${data.mechanicName}`;
  worksheet.mergeCells(`D${globalRow}:F${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = `Name: ${data.approverName}`;
  globalRow++;

  // Kembalikan baris terakhir setelah selesai
  return globalRow;
};

// =========================================================================
// DISPATCHER UTAMA
// =========================================================================

// Peta (Mapping) Sub-tipe ke fungsi layout yang sesuai
const excelLayouts: Record<string, ExcelLayoutFunction> = {
  // TRACK
  BigDigger: generateStandardTrackLayout,
  SmallPC: generateStandardTrackLayout,
  Bulldozer: generateStandardTrackLayout, // Asumsi Bulldozer menggunakan layout yang sama
  // WHEEL
  // ...
};

export const generateExcelFile = async (
  rawInspection: any
): Promise<Buffer> => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Inspection Checksheet");
  const data = rawInspection; // Asumsi rawInspection sudah diformat dengan prepareTemplateData

  const generalType = data.equipmentGeneralType;

  const LayoutFunction = excelLayouts[generalType];

  if (!LayoutFunction) {
    throw new Error(
      `Excel layout not defined for equipment type: ${generalType}`
    );
  }

  // 1. Konfigurasi Kolom
  worksheet.columns = [
    { key: "A", width: 5 },
    { key: "B", width: 25 },
    { key: "C", width: 15 },
    { key: "D", width: 15 },
    { key: "E", width: 15 },
    { key: "F", width: 15 },
    { key: "G", width: 15 },
  ];

  // 2. Panggil fungsi layout yang spesifik
  LayoutFunction(worksheet, data);

  const buffer = await workbook.xlsx.writeBuffer();
  return buffer as unknown as Buffer;
};
