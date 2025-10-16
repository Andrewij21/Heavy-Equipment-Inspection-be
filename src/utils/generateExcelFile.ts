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
import { supoortChecklistDataCrane } from "../constants/excels/support/crane";
import { supportChecklistDataTowerlamp } from "../constants/excels/support/towerlamp";
import { supportChecklistDataGenset } from "../constants/excels/support/genset";
import { supportChecklistDataWeldingMachine } from "../constants/excels/support/weldingmachine";
import { supportChecklistDataCompressor } from "../constants/excels/support/compressor";
import { supportChecklistDataMultiFlow } from "../constants/excels/support/multiflow";
import { supportChecklistDataTyreHandler } from "../constants/excels/support/TyreHandler";
// --- STATE TEMPORARY (Untuk nomor baris dan item) ---
let globalRow = 1;
let globalItemNo = 0;
const N = () => ++globalItemNo;
const formIdMap: { [key: string]: string } = {
  BIGDIGGER: "AMM-SBS-F-PLT-01AA",
  SMALLPC: "AMM-SBS-F-PLT-01AB",
  BULLDOZER: "AMM-SBS-F-PLT-01AC",
  COMPACTOR: "AMM-SBS-F-PLT-01Y",
  DUMPTRUCK: "AMM-SBS-F-PLT-01X",
  GRADER: "AMM-SBS-F.PLT-01Z",
  HEAVYDUMPTRUCK: "AMM-SBS.F.PLT-01W",
  COMPRESSOR: "AMM-SBS-F-PLT-01AK",
  CRANE: "AMM-SBS-F-PLT-01AG",
  GENSET: "AMM-SBS-F-PLT-01AJ",
  MOBILE: "AMM-SBS-F.PLT-01AD",
  MULTIFLOW: "AMM-SBS-F-PLT-01AM",
  TOWERLAMP: "AMM-SBS-F-PLT-01AI",
  TYREHANDLER: "AMM-SBS-F PLT-01AH",
  WELDINGMACHINE: "AMM-SBS-F-PLT-01AL",
};
const defaultId = "AMM-SBS-F-PLT-01AD";
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
    case "Crane":
      return supoortChecklistDataCrane;
    case "Towerlamp":
      return supportChecklistDataTowerlamp;
    case "Genset":
      return supportChecklistDataGenset;
    case "WeldingMachine":
      return supportChecklistDataWeldingMachine;
    case "Compressor":
      return supportChecklistDataCompressor;
    case "MultiFlow":
      return supportChecklistDataMultiFlow;
    case "TyreHandler":
      return supportChecklistDataTyreHandler;

    default:
      return [];
  }
};
// Di dalam file generateExcelFile.ts atau file utilitas Excel Anda

// ... (import dan helper lain seperti allBorders, globalRow, dll.)

const generateStandardTyreLayout: ExcelLayoutFunction = (worksheet, data) => {
  globalRow = 1; // Reset baris global

  // --- 1. PENGATURAN AWAL ---
  // Atur lebar kolom agar sesuai dengan formulir Tyre Inspection
  worksheet.columns = [
    { key: "no", width: 5 }, // A
    { key: "posisi", width: 15 }, // B
    { key: "sn", width: 20 }, // C
    { key: "brand", width: 15 }, // D
    { key: "pattern", width: 15 }, // E
    { key: "rtd", width: 10 }, // F
    { key: "pressure", width: 10 }, // G
    { key: "problem", width: 30 }, // H
    { key: "action", width: 30 }, // I
    { key: "manpower", width: 20 }, // J
  ];

  // --- 2. HEADER UTAMA (Logo, Judul, Info Box) ---
  // Menambahkan logo jika ada (asumsi path sudah benar)
  // const logo1Path = path.join(process.cwd(), "public", "logo.jpeg");
  // if (fs.existsSync(logo1Path)) {
  //   const logo1ImageId = worksheet.workbook.addImage({
  //     buffer: fs.readFileSync(logo1Path),
  //     extension: "jpeg",
  //   });
  //   worksheet.addImage(logo1ImageId, "A1:B3");
  // }

  // Judul di tengah
  worksheet.mergeCells("C1:H1");
  worksheet.getCell("C1").value = "PT. ANTAREJA MAHADA MAKMUR";
  worksheet.getCell("C1").font = { name: "Arial", size: 16, bold: true };
  worksheet.getCell("C1").alignment = {
    vertical: "middle",
    horizontal: "center",
  };

  worksheet.mergeCells("C2:H2");
  worksheet.getCell("C2").value = "Job Site - SBS";
  worksheet.getCell("C2").font = { name: "Arial", size: 12 };
  worksheet.getCell("C2").alignment = {
    vertical: "middle",
    horizontal: "center",
  };

  worksheet.mergeCells("C3:H3");
  worksheet.getCell("C3").value = "INSPEKSI TYRE";
  worksheet.getCell("C3").font = { name: "Arial", size: 14, bold: true };
  worksheet.getCell("C3").alignment = {
    vertical: "middle",
    horizontal: "center",
  };

  // Info Box di kanan atas
  ["I1", "I2", "I3"].forEach((cellRef) => {
    worksheet.getCell(cellRef).font = { bold: true };
    worksheet.getCell(cellRef).border = allBorders;
  });
  worksheet.getCell("I1").value = "No. Formulir";
  worksheet.getCell("I2").value = "Revisi";
  worksheet.getCell("I3").value = "Tanggal Terbit";

  ["J1", "J2", "J3"].forEach(
    (cellRef) => (worksheet.getCell(cellRef).border = allBorders)
  );
  worksheet.getCell("J1").value = `: ${data.formNumber || ""}`;
  worksheet.getCell("J2").value = `: ${data.revision || ""}`;
  worksheet.getCell("J3").value = `: ${data.dateOfIssue || ""}`;

  globalRow = 5; // Pindah ke baris di bawah header
  const infoStartRow = globalRow;
  // Baris 1: UNIT CODE dan TANGGAL
  worksheet.getCell(`A${infoStartRow}`).value = "UNIT CODE";
  worksheet.getCell(`A${infoStartRow}`).font = { bold: true };
  worksheet.getCell(`B${infoStartRow}`).value = `: ${data.equipmentId}`;

  worksheet.getCell(`I${infoStartRow}`).value = "TANGGAL";
  worksheet.getCell(`I${infoStartRow}`).font = { bold: true };
  worksheet.getCell(`J${infoStartRow}`).value = `: ${data.inspectionDate}`;

  // Baris 2: HM
  worksheet.getCell(`A${infoStartRow + 1}`).value = "HM";
  worksheet.getCell(`A${infoStartRow + 1}`).font = { bold: true };
  worksheet.getCell(`B${infoStartRow + 1}`).value = `: ${data.hm}`;

  // Baris 3: SIZE
  worksheet.getCell(`A${infoStartRow + 2}`).value = "SIZE";
  worksheet.getCell(`A${infoStartRow + 2}`).font = { bold: true };
  worksheet.getCell(`B${infoStartRow + 2}`).value = `: ${data.size}`;

  // Pindahkan globalRow ke posisi setelah blok info ini
  globalRow = infoStartRow + 4; // Memberi satu baris spasi kosong

  worksheet.mergeCells(`I${globalRow}:J${globalRow}`);
  worksheet.getCell(`I${globalRow}`).value = `TANGGAL : ${data.inspectionDate}`;
  worksheet.getCell(`I${globalRow}`).font = { bold: true };

  globalRow += 2; // Spasi sebelum tabel utama

  // --- 4. TABEL INSPEKSI BAN ---
  const tableHeaders = [
    "NO",
    "POSISI",
    "SERIAL NUMBER",
    "BRAND",
    "PATTERN",
    "RTD",
    "PRESSURE",
    "PROBLEM",
    "ACTION",
    "MAN POWER",
  ];
  const headerRow = worksheet.getRow(globalRow);
  headerRow.values = tableHeaders;
  headerRow.eachCell((cell) => {
    cell.style = {
      font: { bold: true },
      fill: {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFD9D9D9" },
      },
      alignment: { vertical: "middle", horizontal: "center", wrapText: true },
      border: allBorders,
    };
  });
  globalRow++;

  // Isi data ban (jika ada)
  const tyreDetails = data.tyreDetails || [];
  tyreDetails.forEach((detail: any, index: number) => {
    const row = worksheet.addRow([
      index + 1,
      detail.position,
      detail.serialNumber,
      detail.brand,
      detail.pattern,
      detail.rtd,
      detail.pressure,
      detail.problem,
      detail.action,
      detail.manpower,
    ]);
    row.eachCell((cell) => {
      cell.border = allBorders;
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });
    globalRow++;
  });

  // Tambahkan baris kosong hingga total 12 baris data
  const emptyRowsNeeded = 12 - tyreDetails.length;
  for (let i = 0; i < emptyRowsNeeded; i++) {
    const row = worksheet.addRow(Array(tableHeaders.length).fill(""));
    row.eachCell((cell) => {
      cell.border = allBorders;
    });
    globalRow++;
  }

  // --- 5. FOOTER (Note Action & Signature) ---
  globalRow += 1;
  worksheet.getCell(`A${globalRow}`).value = "NOTE ACTION :";
  worksheet.getCell(`A${globalRow}`).font = { bold: true };
  worksheet.getCell(`A${globalRow + 1}`).value = "1. Monitoring";
  worksheet.getCell(`A${globalRow + 2}`).value = "2. Replace To Repair";
  worksheet.getCell(`A${globalRow + 3}`).value = "3. Replace To Scrap";
  worksheet.getCell(`A${globalRow + 4}`).value = "4. Buffing";

  worksheet.mergeCells(`I${globalRow + 1}:J${globalRow + 1}`);
  worksheet.getCell(`I${globalRow + 1}`).value = "Checked by,";
  worksheet.getCell(`I${globalRow + 1}`).alignment = { horizontal: "center" };

  worksheet.mergeCells(`I${globalRow + 4}:J${globalRow + 4}`);
  const signatureCell = worksheet.getCell(`I${globalRow + 4}`);
  signatureCell.value = "Group Leader Tyre";
  signatureCell.alignment = { horizontal: "center" };
  signatureCell.border = { top: { style: "dotted" } };

  globalRow += 6; // Menambah baris setelah footer
  return globalRow;
};
const generateStandardTrackLayout: ExcelLayoutFunction = (worksheet, data) => {
  globalRow = 1;
  globalItemNo = 0;
  const type = data.equipmentGeneralType;
  const td = data.trackDetails || {};
  const formId = formIdMap[type.toUpperCase()] || defaultId;
  worksheet.mergeCells(`A${globalRow}:J${globalRow}`);
  worksheet.getCell(
    `A${globalRow}`
  ).value = `DAILY INSPECTION CHECKSHEET (${data.equipmentGeneralType.toUpperCase()})`;
  worksheet.getCell(`A${globalRow}`).font = { bold: true, size: 14 };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "center" };
  globalRow += 2;
  // --- BAGIAN 0: PENGATURAN AWAL ---
  // Atur lebar kolom agar layout terlihat bagus
  worksheet.getColumn("A").width = 10;
  worksheet.getColumn("B").width = 15;
  worksheet.getColumn("C").width = 4; // Spasi
  worksheet.getColumn("D").width = 10;
  worksheet.getColumn("E").width = 15;
  worksheet.getColumn("F").width = 5; // Spasi besar
  worksheet.getColumn("G").width = 12;
  worksheet.getColumn("H").width = 15;
  worksheet.getColumn("I").width = 15;
  worksheet.getColumn("J").width = 15;

  // --- BAGIAN 1: HEADER INFORMASI (SESUAI GAMBAR) ---
  const infoRowStart = globalRow;
  const headerFont = { bold: true };

  // Baris 1
  worksheet.getCell(`A${infoRowStart}`).value = "Date";
  worksheet.getCell(`A${infoRowStart}`).font = headerFont;
  worksheet.getCell(`B${infoRowStart}`).value = data.inspectionDate;

  worksheet.getCell(`D${infoRowStart}`).value = "TIME";
  worksheet.getCell(`D${infoRowStart}`).font = headerFont;
  worksheet.getCell(`E${infoRowStart}`).value = data.smr;

  worksheet.getCell(`I${infoRowStart}`).value = "HM Down";
  worksheet.getCell(`I${infoRowStart}`).font = headerFont;
  worksheet.getCell(`J${infoRowStart}`).value = data.timeDown;

  // Baris 2
  worksheet.getCell(`A${infoRowStart + 1}`).value = "Unit No";
  worksheet.getCell(`A${infoRowStart + 1}`).font = headerFont;
  worksheet.getCell(`B${infoRowStart + 1}`).value = data.equipmentId;

  worksheet.getCell(`D${infoRowStart + 1}`).value = "Location";
  worksheet.getCell(`D${infoRowStart + 1}`).font = headerFont;
  worksheet.getCell(`E${infoRowStart + 1}`).value = data.location; // Pastikan data ini ada

  // === DIPINDAHKAN KE KOLOM I dan J ===
  worksheet.getCell(`I${infoRowStart + 1}`).value = "HM RFU";
  worksheet.getCell(`I${infoRowStart + 1}`).font = headerFont;
  worksheet.getCell(`J${infoRowStart + 1}`).value = data.timeOut;

  // Baris 3
  worksheet.getCell(`A${infoRowStart + 2}`).value = "Type";
  worksheet.getCell(`A${infoRowStart + 2}`).font = headerFont;
  worksheet.getCell(`B${infoRowStart + 2}`).value = data.equipmentGeneralType;

  worksheet.getCell(`D${infoRowStart + 2}`).value = "Shift";
  worksheet.getCell(`D${infoRowStart + 2}`).font = headerFont;
  worksheet.getCell(`E${infoRowStart + 2}`).value = data.shift; // Pastikan data ini ada

  // Memberi border pada semua sel header
  // Memberi border pada semua sel header sesuai posisi baru
  for (let i = 0; i < 3; i++) {
    const row = worksheet.getRow(infoRowStart + i);
    // Border untuk tabel kiri
    row.getCell("A").border = allBorders;
    row.getCell("B").border = allBorders;
    row.getCell("D").border = allBorders;
    row.getCell("E").border = allBorders;

    // Border untuk tabel kanan (hanya 2 baris pertama)
    if (i < 2) {
      row.getCell("I").border = allBorders;
      row.getCell("J").border = allBorders;
    }
  }
  globalRow = infoRowStart + 4;

  // --- BAGIAN 2: SAFETY NOTICE ---
  worksheet.mergeCells(`A${globalRow}:J${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = '"IMPORTANT BE SAFETY"';
  worksheet.getCell(`A${globalRow}`).font = { bold: true };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "center" };
  globalRow++;

  worksheet.mergeCells(`A${globalRow}:J${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value =
    "Before carrying out Maintenance, Park machine on Firm Flat Ground, Lowering all Attachment, Shut Down the Engine, Applied Parking Brake & use personal Lock Out & Tag Out";
  worksheet.getCell(`A${globalRow}`).alignment = {
    horizontal: "center",
    vertical: "middle",
    wrapText: true,
  };
  globalRow += 2;

  const legendText =
    "✓ = Good ,   X = Bad/Repair required ,   Ⓧ = Repaired ,   NA = Not Available";
  worksheet.mergeCells(`A${globalRow}:G${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = legendText;
  worksheet.getCell(`A${globalRow}`).font = { bold: true };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "left" };

  worksheet.mergeCells(`H${globalRow}:J${globalRow}`);
  worksheet.getCell(`H${globalRow}`).value = formId; // Ambil dari data
  worksheet.getCell(`H${globalRow}`).font = { bold: true };
  worksheet.getCell(`H${globalRow}`).alignment = { horizontal: "right" };
  globalRow += 2;

  let currentHeaderRow = worksheet.getRow(globalRow);
  worksheet.mergeCells(`B${globalRow}:I${globalRow}`);
  currentHeaderRow.values = [
    "No.",
    "COMPONENT & ITEM CHECK/OBSERVE",
    ...Array(7).fill(null),
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
    addNewSectionHeader(worksheet, section.title);

    section.fields.forEach((item) => {
      // Cek jika tipe item adalah grup temperatur
      if (item.type === "temperatureGroup") {
        // Ambil semua nilai yang relevan dari objek 'data' dan 'td'
        const resultValue = data.trackDetails[item.fieldNames.result];
        const rhValue = td[item.fieldNames.rh];
        const lhValue = td[item.fieldNames.lh];
        const deltaTValue = td[item.fieldNames.deltaT];

        // Panggil addTempItem SATU KALI dengan semua data yang sudah lengkap
        addTempItem(
          worksheet,
          item.label,
          rhValue,
          lhValue,
          deltaTValue,
          resultValue
        );
      }
      // Untuk semua tipe lain (result, select, qty, dll.)
      else {
        const resultValue = data.trackDetails[item.field];
        addNewItem(worksheet, item.label, resultValue);
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
  worksheet.getCell(`D${globalRow}`).value = `Name: ${
    data.status === "REJECTED" ? "-" : data.approver?.username || "-"
  }`;
  globalRow++;

  // Kembalikan baris terakhir setelah selesai
  return globalRow;
};
const generateStandardWheelLayout: ExcelLayoutFunction = (worksheet, data) => {
  globalRow = 1;
  globalItemNo = 0;
  const type = data.wheelGeneralType;
  const td = data.wheelDetails || {};
  const formId = formIdMap[type.toUpperCase()] || defaultId;

  worksheet.mergeCells(`A${globalRow}:J${globalRow}`);
  worksheet.getCell(
    `A${globalRow}`
  ).value = `DAILY INSPECTION CHECKSHEET (${data.wheelGeneralType.toUpperCase()})`;
  worksheet.getCell(`A${globalRow}`).font = { bold: true, size: 14 };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "center" };
  globalRow += 2;
  // --- BAGIAN 0: PENGATURAN AWAL ---
  // Atur lebar kolom agar layout terlihat bagus
  worksheet.getColumn("A").width = 10;
  worksheet.getColumn("B").width = 15;
  worksheet.getColumn("C").width = 4; // Spasi
  worksheet.getColumn("D").width = 10;
  worksheet.getColumn("E").width = 15;
  worksheet.getColumn("F").width = 5; // Spasi besar
  worksheet.getColumn("G").width = 12;
  worksheet.getColumn("H").width = 15;
  worksheet.getColumn("I").width = 15;
  worksheet.getColumn("J").width = 15;

  // --- BAGIAN 1: HEADER INFORMASI (SESUAI GAMBAR) ---
  const infoRowStart = globalRow;
  const headerFont = { bold: true };

  // Baris 1
  worksheet.getCell(`A${infoRowStart}`).value = "Date";
  worksheet.getCell(`A${infoRowStart}`).font = headerFont;
  worksheet.getCell(`B${infoRowStart}`).value = data.inspectionDate;

  worksheet.getCell(`D${infoRowStart}`).value = "TIME";
  worksheet.getCell(`D${infoRowStart}`).font = headerFont;
  worksheet.getCell(`E${infoRowStart}`).value = data.smr;

  worksheet.getCell(`I${infoRowStart}`).value = "HM Down";
  worksheet.getCell(`I${infoRowStart}`).font = headerFont;
  worksheet.getCell(`J${infoRowStart}`).value = data.timeDown;

  // Baris 2
  worksheet.getCell(`A${infoRowStart + 1}`).value = "Unit No";
  worksheet.getCell(`A${infoRowStart + 1}`).font = headerFont;
  worksheet.getCell(`B${infoRowStart + 1}`).value = data.equipmentId;

  worksheet.getCell(`D${infoRowStart + 1}`).value = "Location";
  worksheet.getCell(`D${infoRowStart + 1}`).font = headerFont;
  worksheet.getCell(`E${infoRowStart + 1}`).value = data.location; // Pastikan data ini ada

  // === DIPINDAHKAN KE KOLOM I dan J ===
  worksheet.getCell(`I${infoRowStart + 1}`).value = "HM RFU";
  worksheet.getCell(`I${infoRowStart + 1}`).font = headerFont;
  worksheet.getCell(`J${infoRowStart + 1}`).value = data.timeOut;

  // Baris 3
  worksheet.getCell(`A${infoRowStart + 2}`).value = "Type";
  worksheet.getCell(`A${infoRowStart + 2}`).font = headerFont;
  worksheet.getCell(`B${infoRowStart + 2}`).value = data.wheelGeneralType;

  worksheet.getCell(`D${infoRowStart + 2}`).value = "Shift";
  worksheet.getCell(`D${infoRowStart + 2}`).font = headerFont;
  worksheet.getCell(`E${infoRowStart + 2}`).value = data.shift; // Pastikan data ini ada

  // Memberi border pada semua sel header
  // Memberi border pada semua sel header sesuai posisi baru
  for (let i = 0; i < 3; i++) {
    const row = worksheet.getRow(infoRowStart + i);
    // Border untuk tabel kiri
    row.getCell("A").border = allBorders;
    row.getCell("B").border = allBorders;
    row.getCell("D").border = allBorders;
    row.getCell("E").border = allBorders;

    // Border untuk tabel kanan (hanya 2 baris pertama)
    if (i < 2) {
      row.getCell("I").border = allBorders;
      row.getCell("J").border = allBorders;
    }
  }
  globalRow = infoRowStart + 4;

  // --- BAGIAN 2: SAFETY NOTICE ---
  worksheet.mergeCells(`A${globalRow}:J${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = '"IMPORTANT BE SAFETY"';
  worksheet.getCell(`A${globalRow}`).font = { bold: true };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "center" };
  globalRow++;

  worksheet.mergeCells(`A${globalRow}:J${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value =
    "Before carrying out Maintenance, Park machine on Firm Flat Ground, Lowering all Attachment, Shut Down the Engine, Applied Parking Brake & use personal Lock Out & Tag Out";
  worksheet.getCell(`A${globalRow}`).alignment = {
    horizontal: "center",
    vertical: "middle",
    wrapText: true,
  };
  globalRow += 2;

  const legendText =
    "✓ = Good ,   X = Bad/Repair required ,   Ⓧ = Repaired ,   NA = Not Available";
  worksheet.mergeCells(`A${globalRow}:G${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = legendText;
  worksheet.getCell(`A${globalRow}`).font = { bold: true };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "left" };

  worksheet.mergeCells(`H${globalRow}:J${globalRow}`);
  worksheet.getCell(`H${globalRow}`).value = formId; // Ambil dari data
  worksheet.getCell(`H${globalRow}`).font = { bold: true };
  worksheet.getCell(`H${globalRow}`).alignment = { horizontal: "right" };
  globalRow += 2;

  let currentHeaderRow = worksheet.getRow(globalRow);
  worksheet.mergeCells(`B${globalRow}:I${globalRow}`);
  currentHeaderRow.values = [
    "No.",
    "COMPONENT & ITEM CHECK/OBSERVE",
    ...Array(7).fill(null),
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
    addNewSectionHeader(worksheet, section.title);

    section.fields.forEach((item) => {
      // Cek jika tipe item adalah grup temperatur
      if (item.type === "temperatureGroup") {
        // Ambil semua nilai yang relevan dari objek 'data' dan 'td'
        const resultValue = data.trackDetails[item.fieldNames.result];
        const rhValue = td[item.fieldNames.rh];
        const lhValue = td[item.fieldNames.lh];
        const deltaTValue = td[item.fieldNames.deltaT];

        // Panggil addTempItem SATU KALI dengan semua data yang sudah lengkap
        addTempItem(
          worksheet,
          item.label,
          rhValue,
          lhValue,
          deltaTValue,
          resultValue
        );
      }
      // Untuk semua tipe lain (result, select, qty, dll.)
      else {
        const resultValue = data.wheelDetails[item.field];
        addNewItem(worksheet, item.label, resultValue);
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
  worksheet.getCell(`D${globalRow}`).value = `Name: ${
    data.status === "REJECTED" ? "-" : data.approver?.username || "-"
  }`;
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
  const formId = formIdMap[type.toUpperCase()] || defaultId;

  worksheet.mergeCells(`A${globalRow}:J${globalRow}`);
  worksheet.getCell(
    `A${globalRow}`
  ).value = `DAILY INSPECTION CHECKSHEET (${data.supportGeneralType.toUpperCase()})`;
  worksheet.getCell(`A${globalRow}`).font = { bold: true, size: 14 };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "center" };
  globalRow += 2;
  // --- BAGIAN 0: PENGATURAN AWAL ---
  // Atur lebar kolom agar layout terlihat bagus
  worksheet.getColumn("A").width = 10;
  worksheet.getColumn("B").width = 15;
  worksheet.getColumn("C").width = 4; // Spasi
  worksheet.getColumn("D").width = 10;
  worksheet.getColumn("E").width = 15;
  worksheet.getColumn("F").width = 5; // Spasi besar
  worksheet.getColumn("G").width = 12;
  worksheet.getColumn("H").width = 15;
  worksheet.getColumn("I").width = 15;
  worksheet.getColumn("J").width = 15;

  // --- BAGIAN 1: HEADER INFORMASI (SESUAI GAMBAR) ---
  const infoRowStart = globalRow;
  const headerFont = { bold: true };

  // Baris 1
  worksheet.getCell(`A${infoRowStart}`).value = "Date";
  worksheet.getCell(`A${infoRowStart}`).font = headerFont;
  worksheet.getCell(`B${infoRowStart}`).value = data.inspectionDate;

  worksheet.getCell(`D${infoRowStart}`).value = "TIME";
  worksheet.getCell(`D${infoRowStart}`).font = headerFont;
  worksheet.getCell(`E${infoRowStart}`).value = data.smr;

  worksheet.getCell(`I${infoRowStart}`).value = "HM Down";
  worksheet.getCell(`I${infoRowStart}`).font = headerFont;
  worksheet.getCell(`J${infoRowStart}`).value = data.timeDown;

  // Baris 2
  worksheet.getCell(`A${infoRowStart + 1}`).value = "Unit No";
  worksheet.getCell(`A${infoRowStart + 1}`).font = headerFont;
  worksheet.getCell(`B${infoRowStart + 1}`).value = data.equipmentId;

  worksheet.getCell(`D${infoRowStart + 1}`).value = "Location";
  worksheet.getCell(`D${infoRowStart + 1}`).font = headerFont;
  worksheet.getCell(`E${infoRowStart + 1}`).value = data.location; // Pastikan data ini ada

  // === DIPINDAHKAN KE KOLOM I dan J ===
  worksheet.getCell(`I${infoRowStart + 1}`).value = "HM RFU";
  worksheet.getCell(`I${infoRowStart + 1}`).font = headerFont;
  worksheet.getCell(`J${infoRowStart + 1}`).value = data.timeOut;

  // Baris 3
  worksheet.getCell(`A${infoRowStart + 2}`).value = "Type";
  worksheet.getCell(`A${infoRowStart + 2}`).font = headerFont;
  worksheet.getCell(`B${infoRowStart + 2}`).value = data.supportGeneralType;

  worksheet.getCell(`D${infoRowStart + 2}`).value = "Shift";
  worksheet.getCell(`D${infoRowStart + 2}`).font = headerFont;
  worksheet.getCell(`E${infoRowStart + 2}`).value = data.shift; // Pastikan data ini ada

  // Memberi border pada semua sel header
  // Memberi border pada semua sel header sesuai posisi baru
  for (let i = 0; i < 3; i++) {
    const row = worksheet.getRow(infoRowStart + i);
    // Border untuk tabel kiri
    row.getCell("A").border = allBorders;
    row.getCell("B").border = allBorders;
    row.getCell("D").border = allBorders;
    row.getCell("E").border = allBorders;

    // Border untuk tabel kanan (hanya 2 baris pertama)
    if (i < 2) {
      row.getCell("I").border = allBorders;
      row.getCell("J").border = allBorders;
    }
  }
  globalRow = infoRowStart + 4;

  // --- BAGIAN 2: SAFETY NOTICE ---
  worksheet.mergeCells(`A${globalRow}:J${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = '"IMPORTANT BE SAFETY"';
  worksheet.getCell(`A${globalRow}`).font = { bold: true };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "center" };
  globalRow++;

  worksheet.mergeCells(`A${globalRow}:J${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value =
    "Before carrying out Maintenance, Park machine on Firm Flat Ground, Lowering all Attachment, Shut Down the Engine, Applied Parking Brake & use personal Lock Out & Tag Out";
  worksheet.getCell(`A${globalRow}`).alignment = {
    horizontal: "center",
    vertical: "middle",
    wrapText: true,
  };
  globalRow += 2;

  const legendText =
    "✓ = Good ,   X = Bad/Repair required ,   Ⓧ = Repaired ,   NA = Not Available";
  worksheet.mergeCells(`A${globalRow}:G${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = legendText;
  worksheet.getCell(`A${globalRow}`).font = { bold: true };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "left" };
  // MASUKKAN KODE UNTUK TIPE SUPPORT DAN WHEEL
  worksheet.mergeCells(`H${globalRow}:J${globalRow}`);
  worksheet.getCell(`H${globalRow}`).value = formId; // Ambil dari data
  worksheet.getCell(`H${globalRow}`).font = { bold: true };
  worksheet.getCell(`H${globalRow}`).alignment = { horizontal: "right" };
  globalRow += 2;

  let currentHeaderRow = worksheet.getRow(globalRow);
  worksheet.mergeCells(`B${globalRow}:I${globalRow}`);
  currentHeaderRow.values = [
    "No.",
    "COMPONENT & ITEM CHECK/OBSERVE",
    ...Array(7).fill(null),
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
  wheelChecklistData.forEach((section) => {
    addNewSectionHeader(worksheet, section.title);

    section.fields.forEach((item) => {
      // Cek jika tipe item adalah grup temperatur
      if (item.type === "temperatureGroup") {
        // Ambil semua nilai yang relevan dari objek 'data' dan 'td'
        const resultValue = data.trackDetails[item.fieldNames.result];
        const rhValue = td[item.fieldNames.rh];
        const lhValue = td[item.fieldNames.lh];
        const deltaTValue = td[item.fieldNames.deltaT];

        // Panggil addTempItem SATU KALI dengan semua data yang sudah lengkap
        addTempItem(
          worksheet,
          item.label,
          rhValue,
          lhValue,
          deltaTValue,
          resultValue
        );
      }
      // Untuk semua tipe lain (result, select, qty, dll.)
      else {
        const resultValue = data.supportDetails[item.field];
        addNewItem(worksheet, item.label, resultValue);
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
  worksheet.getCell(`D${globalRow}`).value = `Name: ${
    data.status === "REJECTED" ? "-" : data.approver?.username || "-"
  }`;
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
  Crane: generateStandardSupportlLayout,
  Towerlamp: generateStandardSupportlLayout,
  Genset: generateStandardSupportlLayout,
  WeldingMachine: generateStandardSupportlLayout,
  Compressor: generateStandardSupportlLayout,
  MultiFlow: generateStandardSupportlLayout,
  TyreHandler: generateStandardSupportlLayout,
  tyre: generateStandardTyreLayout,
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
  } else if (type === "tyre") {
    generalType = "tyre";
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

// Helper untuk menambahkan item suhu (RH/LH/Delta di E:F, Status di G)
export const addTempItem = (
  worksheet: ExcelJS.Worksheet,
  label: string,
  rhValue: string | number, // Tipe bisa number atau string
  lhValue: string | number,
  deltaTValue: string | number,
  resultValue: string
) => {
  let row = worksheet.getRow(globalRow);
  console.log({ label, rhValue, lhValue, deltaTValue, resultValue });
  // DIUBAH: Merge sekarang dari kolom B sampai I untuk seluruh deskripsi
  worksheet.mergeCells(`B${globalRow}:I${globalRow}`);

  // Kolom A untuk penomoran
  row.getCell("A").value = N(); // N() adalah fungsi penomoran Anda

  // DIUBAH: Menggabungkan label dan nilai suhu menjadi satu string deskriptif
  const fullDescription = `${label} (RH: ${rhValue}°C | LH: ${lhValue}°C | ΔT: ${deltaTValue}°C)`;
  row.getCell("B").value = fullDescription;

  // DIUBAH: Kolom J untuk nilai hasil/status
  row.getCell("J").value = resultValue;

  // Menerapkan border ke semua sel di baris ini
  row.eachCell({ includeEmpty: true }, (cell) => {
    cell.border = allBorders;
  });

  // Mengatur alignment
  row.getCell("B").alignment = { horizontal: "left", vertical: "middle" };
  row.getCell("J").alignment = { horizontal: "center", vertical: "middle" };

  globalRow++;
};
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

export const addNewItem = (
  worksheet: ExcelJS.Worksheet,
  label: string,
  value: string
) => {
  let row = worksheet.getRow(globalRow);
  // DIUBAH: Merge sekarang dari kolom B sampai I
  worksheet.mergeCells(`B${globalRow}:I${globalRow}`);

  row.getCell("A").value = N(); // N() adalah fungsi penomoran Anda
  row.getCell("B").value = label;

  // DIUBAH: Nilai/status sekarang diletakkan di kolom J
  row.getCell("J").value = value;
  // DIUBAH: Alignment diatur untuk kolom J dan dibuat center
  row.getCell("J").alignment = { horizontal: "center", vertical: "middle" };

  row.eachCell({ includeEmpty: true }, (cell) => {
    cell.border = allBorders;
  });
  globalRow++;
};

export const addNewSectionHeader = (
  worksheet: ExcelJS.Worksheet,
  title: string,
  fill: any = sectionFill // sectionFill adalah variabel fill default Anda
) => {
  // DIUBAH: Merge sekarang dari kolom A sampai J agar memenuhi lebar tabel
  worksheet.mergeCells(`A${globalRow}:J${globalRow}`);

  const cell = worksheet.getCell(`A${globalRow}`);
  cell.value = title;
  cell.font = { bold: true };
  cell.fill = fill;
  cell.border = allBorders;
  cell.alignment = { vertical: "middle" }; // Tambahan agar teks di tengah vertikal

  globalRow++;
};
