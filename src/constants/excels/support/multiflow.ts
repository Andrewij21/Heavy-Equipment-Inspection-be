import type { ChecklistSection } from "../../../types/interfaces";

export const supportChecklistDataMultiFlow: ChecklistSection[] = [
  {
    title: "A. Engine",
    fields: [
      {
        field: "engineOilLevel",
        label: "Periksa level oil engine",
        type: "result",
      },
      {
        field: "engineCoolantLevel",
        label: "Periksa level air pendingin",
        type: "result",
      },
      {
        field: "engineVisual",
        label:
          "Pengamatan secara visual area engine dari kebocoran, baut hilang dll",
        type: "result",
      },
      {
        field: "engineAirFilter",
        label: "Periksa kondisi filter udara",
        type: "result",
      },
      {
        field: "engineLeaks",
        label: "Periksa kebocoron oil, kebocoran air pendingin",
        type: "result",
      },
      {
        field: "engineFanBelt",
        label: "Periksa tegangan fan belt",
        type: "result",
      },
      {
        field: "engineHose",
        label: "Periksa hose dari kebocoran",
        type: "result",
      },
    ],
  },
  {
    title: "B. Ponton, Frame, & Pump",
    fields: [
      {
        field: "pontonCondition",
        label: "Periksa pontoon dari keretakan atau keasan",
        type: "result",
      },
      {
        field: "pumpCondition",
        label: "Periksa pompa dari kerusakan",
        type: "result",
      },
      {
        field: "pumpMounting",
        label: "Periksa mounting pompa dari kehilangan atau kerusakan",
        type: "result",
      },
      {
        field: "boltTightness",
        label: "Periksa semua kekencangan baut",
        type: "result",
      },
      {
        field: "suctionDischargeHose",
        label: "Periksa hose pengisap (suctions) hose keluran (discarge)",
        type: "result",
      },
    ],
  },
  {
    title: "C. Electric",
    fields: [
      {
        field: "electricTerminals",
        label: "Periksa terminal atau kabel dari indikasi kerusakan",
        type: "result",
      },
      {
        field: "electricBattery",
        label:
          "Periksa level air battery, kutub positif atau negatif battery dan kabel battery",
        type: "result",
      },
      {
        field: "electricIndicators",
        label: "Periksa semua indikator dan gauge pada konrol panel",
        type: "result",
      },
    ],
  },
  {
    title: "D. Opsional",
    fields: [{ field: "optionalApar", label: "Check APAR", type: "result" }],
  },
  {
    title: "E. Top Up Lubricant & Coolant",
    fields: [
      { field: "topUpCoolant", label: "Coolant", type: "topup" },
      {
        field: "topUpEngineOil",
        label: "Engine Oil (SAE 15W-40)",
        type: "topup",
      },
      { field: "topUpHydraulic", label: "Hydraulic)", type: "topup" },
    ],
  },
];
