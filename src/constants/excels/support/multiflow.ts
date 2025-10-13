import type { ChecklistSection } from "../../../types/interfaces";

export const supportChecklistDataMultiFlow: ChecklistSection[] = [
  {
    title: "Engine",
    fields: [
      {
        field: "engineOilLevel",
        label: "Check engine oil level",
        type: "select",
      },
      {
        field: "engineCoolantLevel",
        label: "Check coolant level",
        type: "select",
      },
      {
        field: "engineVisual",
        label:
          "Visual inspection of engine area for leaks, missing bolts, etc.",
        type: "select",
      },
      {
        field: "engineAirFilter",
        label: "Check air filter condition",
        type: "select",
      },
      {
        field: "engineLeaks",
        label: "Check for oil leaks, coolant leaks",
        type: "select",
      },
      {
        field: "engineFanBelt",
        label: "Check fan belt tension",
        type: "select",
      },
      {
        field: "engineHose",
        label: "Check hose for leaks",
        type: "select",
      },
    ],
  },
  {
    title: "Pontoon, Frame, & Pump",
    fields: [
      {
        field: "pontonCondition",
        label: "Check pontoon for cracks or wear",
        type: "select",
      },
      {
        field: "pumpCondition",
        label: "Check pump for damage",
        type: "select",
      },
      {
        field: "pumpMounting",
        label: "Check pump mounting for missing parts or damage",
        type: "select",
      },
      {
        field: "boltTightness",
        label: "Check all bolt tightness",
        type: "select",
      },
      {
        field: "suctionDischargeHose",
        label: "Check suction hose and discharge hose",
        type: "select",
      },
    ],
  },
  {
    title: "Electric",
    fields: [
      {
        field: "electricTerminals",
        label: "Check terminals or cables for signs of damage",
        type: "select",
      },
      {
        field: "electricBattery",
        label:
          "Check battery water level, positive and negative terminals, and battery cables",
        type: "select",
      },
      {
        field: "electricIndicators",
        label: "Check all indicators and gauges on the control panel",
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
        field: "topUpHydraulic",
        label: "Hydraulic",
        type: "topup",
      },
    ],
  },
];
// export const supportChecklistDataMultiFlow: ChecklistSection[] = [
//   {
//     title: "A. Engine",
//     fields: [
//       {
//         field: "engineOilLevel",
//         label: "Periksa level oil engine",
//         type: "result",
//       },
//       {
//         field: "engineCoolantLevel",
//         label: "Periksa level air pendingin",
//         type: "result",
//       },
//       {
//         field: "engineVisual",
//         label:
//           "Pengamatan secara visual area engine dari kebocoran, baut hilang dll",
//         type: "result",
//       },
//       {
//         field: "engineAirFilter",
//         label: "Periksa kondisi filter udara",
//         type: "result",
//       },
//       {
//         field: "engineLeaks",
//         label: "Periksa kebocoron oil, kebocoran air pendingin",
//         type: "result",
//       },
//       {
//         field: "engineFanBelt",
//         label: "Periksa tegangan fan belt",
//         type: "result",
//       },
//       {
//         field: "engineHose",
//         label: "Periksa hose dari kebocoran",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "B. Ponton, Frame, & Pump",
//     fields: [
//       {
//         field: "pontonCondition",
//         label: "Periksa pontoon dari keretakan atau keasan",
//         type: "result",
//       },
//       {
//         field: "pumpCondition",
//         label: "Periksa pompa dari kerusakan",
//         type: "result",
//       },
//       {
//         field: "pumpMounting",
//         label: "Periksa mounting pompa dari kehilangan atau kerusakan",
//         type: "result",
//       },
//       {
//         field: "boltTightness",
//         label: "Periksa semua kekencangan baut",
//         type: "result",
//       },
//       {
//         field: "suctionDischargeHose",
//         label: "Periksa hose pengisap (suctions) hose keluran (discarge)",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "C. Electric",
//     fields: [
//       {
//         field: "electricTerminals",
//         label: "Periksa terminal atau kabel dari indikasi kerusakan",
//         type: "result",
//       },
//       {
//         field: "electricBattery",
//         label:
//           "Periksa level air battery, kutub positif atau negatif battery dan kabel battery",
//         type: "result",
//       },
//       {
//         field: "electricIndicators",
//         label: "Periksa semua indikator dan gauge pada konrol panel",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "D. Opsional",
//     fields: [{ field: "optionalApar", label: "Check APAR", type: "result" }],
//   },
//   {
//     title: "E. Top Up Lubricant & Coolant",
//     fields: [
//       { field: "topUpCoolant", label: "Coolant", type: "topup" },
//       {
//         field: "topUpEngineOil",
//         label: "Engine Oil (SAE 15W-40)",
//         type: "topup",
//       },
//       { field: "topUpHydraulic", label: "Hydraulic)", type: "topup" },
//     ],
//   },
// ];
