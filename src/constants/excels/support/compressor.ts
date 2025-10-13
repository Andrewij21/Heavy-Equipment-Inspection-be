import type { ChecklistSection } from "../../../types/interfaces";

export const supportChecklistDataCompressor: ChecklistSection[] = [
  {
    title: "Engine",
    fields: [
      {
        field: "engineOilLevel",
        label: "Check engine oil level & leakage",
        type: "select",
      },
      {
        field: "engineMounting",
        label: "Check engine mounting",
        type: "select",
      },
      {
        field: "engineCoolantLevel",
        label: "Check coolant level & leakage",
        type: "select",
      },
      {
        field: "engineFuelSystem",
        label: "Check fuel system & leakage",
        type: "select",
      },
      {
        field: "engineBeltTension",
        label: "Check all belt tension & related parts",
        type: "select",
      },
      {
        field: "engineFilterConditions",
        label: "Check all filter conditions",
        type: "select",
      },
      {
        field: "engineAirCleaner",
        label: "Check air cleaner (clean if necessary)",
        type: "select",
      },
    ],
  },
  {
    title: "Electric",
    fields: [
      {
        field: "electricTerminals",
        label: "Check terminals and electrode cables",
        type: "select",
      },
      {
        field: "electricIndicators",
        label: "Check all indicators & gauges on the control panel",
        type: "select",
      },
      {
        field: "electricBattery",
        label: "Check battery electrolyte level, terminals & battery cables",
        type: "select",
      },
      {
        field: "electricSwitchMode",
        label: "Check switch modes (off, run, start)",
        type: "select",
      },
      {
        field: "electricBatteryConnection",
        label: "Check battery condition & connection",
        type: "select",
      },
    ],
  },
  {
    title: "Optional",
    fields: [
      {
        field: "optionalApar",
        label: "Check Fire Extinguisher (APAR)",
        type: "select",
      },
    ],
  },
  {
    title: "Add Oil",
    fields: [
      {
        field: "topUpCoolant",
        label: "Coolant",
        type: "topup",
      },
      {
        field: "topUpEngineOil",
        label: "Engine Oil (15W-40)",
        type: "topup",
      },
      {
        field: "topUpCompressor",
        label: "Compressor",
        type: "topup",
      },
    ],
  },
];
// export const supportChecklistDataCompressor: ChecklistSection[] = [
//   {
//     title: "A. Mesin",
//     fields: [
//       {
//         field: "engineOilLevel",
//         label: "Periksa level oli mesin & kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineMounting",
//         label: "Periksa dudukan mesin",
//         type: "result",
//       },
//       {
//         field: "engineCoolantLevel",
//         label: "Periksa level air pendingin & kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineFuelSystem",
//         label: "Periksa sistem bahan bakar & kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineBeltTension",
//         label: "Periksa semua ketegangan sabuk & bagian terkait",
//         type: "result",
//       },
//       {
//         field: "engineFilterConditions",
//         label: "Periksa kondisi semua filter",
//         type: "result",
//       },
//       {
//         field: "engineAirCleaner",
//         label: "Periksa pembersih udara (bersihkan jika perlu)",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "B. Kelistrikan",
//     fields: [
//       {
//         field: "electricTerminals",
//         label: "Periksa terminal dan kabel elektroda",
//         type: "result",
//       },
//       {
//         field: "electricIndicators",
//         label: "Periksa semua indikator & pengukur di panel kontrol",
//         type: "result",
//       },
//       {
//         field: "electricBattery",
//         label: "Periksa level elektrolit baterai, terminal & kabel baterai",
//         type: "result",
//       },
//       {
//         field: "electricSwitchMode",
//         label: "Periksa saklar mode off, run, start",
//         type: "result",
//       },
//       {
//         field: "electricBatteryConnection",
//         label: "Periksa kondisi baterai & koneksi",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "C. Opsional",
//     fields: [{ field: "optionalApar", label: "Periksa APAR", type: "result" }],
//   },
//   {
//     title: "D. Pengisian Pelumas & Pendingin",
//     fields: [
//       { field: "topUpCoolant", label: "Coolant", type: "topup" },

//       {
//         field: "topUpEngineOil",
//         label: "Oli Mesin (SAE 15W-40)",
//         type: "topup",
//       },
//       {
//         field: "topUpCompressor",
//         label: "Compressor",
//         type: "topup",
//       },
//     ],
//   },
// ];
