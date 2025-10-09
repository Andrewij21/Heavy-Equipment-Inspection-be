import * as ExcelJS from "exceljs";
import { Buffer } from "buffer";
import { trackChecklistDataBigDigger } from "../constants/excels/track/bigDigger";
import { trackChecklistDataSmallPC } from "../constants/excels/track/smallPC";
import { trackChecklistDataBulldozer } from "../constants/excels/track/bulldozer";
import { wheelChecklistDataDumpTruck } from "../constants/excels/wheel/dumpTruck";
import { wheelChecklistDataHeavyDumpTruck } from "../constants/excels/wheel/heavyDumpTruck";
import { wheelChecklistDataGrader } from "../constants/excels/wheel/grader";
import { wheelChecklistDataCompactor } from "../constants/excels/wheel/compactor";
import { wheelChecklistDataMobile } from "../constants/excels/support/mobile";
// --- STATE TEMPORARY (Untuk nomor baris dan item) ---
let globalRow = 1;
let globalItemNo = 0;
const N = () => ++globalItemNo;
const getTrackChecklistData = (type: string) => {
  switch (type) {
    case "BigDigger":
      return trackChecklistDataBigDigger;
    case "SmallPC":
      return trackChecklistDataSmallPC;
    case "Bulldozer":
      return trackChecklistDataBulldozer;
    case "DumpTruck":
      return wheelChecklistDataDumpTruck;
    default:
      return [];
  }
};
const getWheelChecklistData = (type: string) => {
  switch (type) {
    case "DumpTruck":
      return wheelChecklistDataDumpTruck;
    case "HeavyDumpTruck":
      return wheelChecklistDataHeavyDumpTruck;
    case "Grader":
      return wheelChecklistDataGrader;
    case "Compactor":
      return wheelChecklistDataCompactor;
    default:
      return [];
  }
};
const getSupportChecklistData = (type: string) => {
  switch (type) {
    case "Mobile":
      return wheelChecklistDataMobile;

    default:
      return [];
  }
};

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
const generateStandardWheelLayout: ExcelLayoutFunction = (worksheet, data) => {
  // Reset nomor item untuk setiap layout
  globalRow = 1;
  globalItemNo = 0;
  const type = data.wheelGeneralType;
  const td = data.wheelDetails || {};

  // --- 2. HEADER TINGKAT ATAS & INFORMASI ---

  // Title
  worksheet.mergeCells(`A${globalRow}:G${globalRow}`);
  worksheet.getCell(
    `A${globalRow}`
  ).value = `DAILY INSPECTION CHECKSHEET (${data.wheelGeneralType.toUpperCase()})`;
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
  const wheelChecklistData = getWheelChecklistData(type);
  // --- 4. LOOPING UNTUK CHECKLIST ---
  wheelChecklistData.forEach((section) => {
    addSectionHeader(worksheet, section.title);

    section.fields.forEach((item) => {
      const resultValue = data.wheelDetails[item.field];

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
  (data.wheelDetails?.findings || []).forEach((f: any, index: number) => {
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
const generateStandardSupportlLayout: ExcelLayoutFunction = (
  worksheet,
  data
) => {
  // Reset nomor item untuk setiap layout
  globalRow = 1;
  globalItemNo = 0;
  const type = data.supportGeneralType;
  const td = data.wheelDetails || {};

  // --- 2. HEADER TINGKAT ATAS & INFORMASI ---

  // Title
  worksheet.mergeCells(`A${globalRow}:G${globalRow}`);
  worksheet.getCell(
    `A${globalRow}`
  ).value = `DAILY INSPECTION CHECKSHEET (${data.supportGeneralType.toUpperCase()})`;
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
  const wheelChecklistData = getSupportChecklistData(type);
  // --- 4. LOOPING UNTUK CHECKLIST ---
  console.log({ wheelChecklistData: wheelChecklistData[0].fields });
  wheelChecklistData.forEach((section) => {
    addSectionHeader(worksheet, section.title);

    section.fields.forEach((item) => {
      const resultValue = data.supportDetails[item.field];

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
  (data.supportDetails?.findings || []).forEach((f: any, index: number) => {
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
  Bulldozer: generateStandardTrackLayout,
  DumpTruck: generateStandardWheelLayout,
  HeavyDumpTruck: generateStandardWheelLayout,
  Grader: generateStandardWheelLayout,
  Compactor: generateStandardWheelLayout,
  Mobile: generateStandardSupportlLayout,
};

export const generateExcelFile = async (
  rawInspection: any
): Promise<Buffer> => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Inspection Checksheet");
  const data = rawInspection; // Asumsi rawInspection sudah diformat dengan prepareTemplateData

  const type = data.equipmentType;
  let generalType;

  if (type === "track") {
    generalType = data.equipmentGeneralType;
  } else if (type === "wheel") {
    generalType = data.wheelGeneralType;
  } else {
    generalType = data.supportGeneralType;
  }
  // const generalType = data.equipmentGeneralType;

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

// Style Definitions
export const thinBorderStyle: ExcelJS.BorderStyle = "thin";
export const allBorders: Partial<ExcelJS.Borders> = {
  top: { style: thinBorderStyle },
  bottom: { style: thinBorderStyle },
  left: { style: thinBorderStyle },
  right: { style: thinBorderStyle },
};
export const sectionFill = {
  type: "pattern",
  pattern: "solid",
  fgColor: { argb: "DDEBF7" },
};

// --- TIPE FUNGSI LAYOUT ---
export type ExcelLayoutFunction = (
  worksheet: ExcelJS.Worksheet,
  data: any
) => number;

// --- HELPER FUNCTION UNTUK MEMBUAT BARIS ---

// Helper untuk menambahkan item checklist non-suhu/topup (Condition di G)
export const addItem = (
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
export const addTempItem = (
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
export const addSectionHeader = (
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
