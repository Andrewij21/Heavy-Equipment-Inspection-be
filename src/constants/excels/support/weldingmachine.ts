import type { ChecklistSection } from "../../../types/interfaces";

export const supportChecklistDataWeldingMachine: ChecklistSection[] = [
  {
    title: "Engine",
    fields: [
      {
        field: "engineFan",
        label: "Repair/replace if fan is damaged",
        type: "select",
      },
      {
        field: "engineCoolantSystem",
        label: "Check coolant system",
        type: "select",
      },
      {
        field: "engineRadiatorLevel",
        label: "Check radiator water level",
        type: "select",
      },
      {
        field: "engineBreather",
        label: "Check and clean engine breather",
        type: "select",
      },
      {
        field: "engineFuelTank",
        label:
          "Check fuel tank cap, fuel lines & connections. Also check for tank leaks",
        type: "select",
      },
      {
        field: "engineExhaustPipe",
        label: "Check/repair exhaust pipe (muffler) for leaks and damage",
        type: "select",
      },
      {
        field: "engineTurbocharger",
        label: "Check turbocharger condition for leaks and damage",
        type: "select",
      },
      {
        field: "engineFloorCleanliness",
        label: "Check engine floor cleanliness / clean if dirty",
        type: "select",
      },
    ],
  },
  {
    title: "Electric",
    fields: [
      {
        field: "electricTerminals",
        label: "Check terminals & electrode cables",
        type: "select",
      },
      {
        field: "electricIndicators",
        label: "Check all indicators & gauges on the control panel",
        type: "select",
      },
      {
        field: "electricBattery",
        label: "Check battery electrolyte level, terminals, and cables",
        type: "select",
      },
      {
        field: "electricSwitchMode",
        label: "Check switch modes (Off, Run, Start)",
        type: "select",
      },
      {
        field: "electricBatteryConnection",
        label: "Check battery & its connection condition",
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
    ],
  },
];
// export const supportChecklistDataWeldingMachine: ChecklistSection[] = [
//   {
//     title: "A. Mesin",
//     fields: [
//       {
//         field: "engineFan",
//         label: "Perbaiki/ganti bila kipas rusak",
//         type: "result",
//       },
//       {
//         field: "engineCoolantSystem",
//         label: "Periksa sistem pendingin (coolant system)",
//         type: "result",
//       },
//       {
//         field: "engineRadiatorLevel",
//         label: "Periksa level air radiator",
//         type: "result",
//       },
//       {
//         field: "engineBreather",
//         label: "Periksa dan bersihkan breather mesin",
//         type: "result",
//       },
//       {
//         field: "engineFuelTank",
//         label:
//           "Periksa tutup tangki solar, jalur bahan bakar & sambungan. Cek juga kebocoran tangki",
//         type: "result",
//       },
//       {
//         field: "engineExhaustPipe",
//         label:
//           "Periksa/perbaiki pipa knalpot (muffler) dari kebocoran dan kerusakan",
//         type: "result",
//       },
//       {
//         field: "engineTurbocharger",
//         label: "Periksa kondisi turbocharger dari kebocoran dan kerusakan",
//         type: "result",
//       },
//       {
//         field: "engineFloorCleanliness",
//         label: "Periksa kebersihan lantai mesin / bersihkan bila kotor",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "B. Kelistrikan",
//     fields: [
//       {
//         field: "electricTerminals",
//         label: "Periksa terminal & kabel elektroda",
//         type: "result",
//       },
//       {
//         field: "electricIndicators",
//         label: "Periksa semua indikator & pengukur di panel kontrol",
//         type: "result",
//       },
//       {
//         field: "electricBattery",
//         label: "Periksa level elektrolit aki, terminal, dan kabel aki",
//         type: "result",
//       },
//       {
//         field: "electricSwitchMode",
//         label: "Periksa mode saklar (Off, Run, Start)",
//         type: "result",
//       },
//       {
//         field: "electricBatteryConnection",
//         label: "Periksa aki & kondisi sambungannya",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "C. Opsional",
//     fields: [{ field: "optionalApar", label: "Periksa APAR", type: "result" }],
//   },
//   {
//     title: "D. Penambahan Pelumas & Pendingin",
//     fields: [
//       {
//         field: "topUpCoolant",
//         label: "Cairan Pendingin (Coolant)",
//         type: "topup",
//       },
//       {
//         field: "topUpEngineOil",
//         label: "Oli Mesin (SAE 15W-40)",
//         type: "topup",
//       },
//     ],
//   },
// ];
