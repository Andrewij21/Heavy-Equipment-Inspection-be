import type { ChecklistSection } from "../../../types/interfaces";

export const supportChecklistDataWeldingMachine: ChecklistSection[] = [
  {
    title: "A. Mesin",
    fields: [
      {
        field: "engineFan",
        label: "Perbaiki/ganti bila kipas rusak",
        type: "result",
      },
      {
        field: "engineCoolantSystem",
        label: "Periksa sistem pendingin (coolant system)",
        type: "result",
      },
      {
        field: "engineRadiatorLevel",
        label: "Periksa level air radiator",
        type: "result",
      },
      {
        field: "engineBreather",
        label: "Periksa dan bersihkan breather mesin",
        type: "result",
      },
      {
        field: "engineFuelTank",
        label:
          "Periksa tutup tangki solar, jalur bahan bakar & sambungan. Cek juga kebocoran tangki",
        type: "result",
      },
      {
        field: "engineExhaustPipe",
        label:
          "Periksa/perbaiki pipa knalpot (muffler) dari kebocoran dan kerusakan",
        type: "result",
      },
      {
        field: "engineTurbocharger",
        label: "Periksa kondisi turbocharger dari kebocoran dan kerusakan",
        type: "result",
      },
      {
        field: "engineFloorCleanliness",
        label: "Periksa kebersihan lantai mesin / bersihkan bila kotor",
        type: "result",
      },
    ],
  },
  {
    title: "B. Kelistrikan",
    fields: [
      {
        field: "electricTerminals",
        label: "Periksa terminal & kabel elektroda",
        type: "result",
      },
      {
        field: "electricIndicators",
        label: "Periksa semua indikator & pengukur di panel kontrol",
        type: "result",
      },
      {
        field: "electricBattery",
        label: "Periksa level elektrolit aki, terminal, dan kabel aki",
        type: "result",
      },
      {
        field: "electricSwitchMode",
        label: "Periksa mode saklar (Off, Run, Start)",
        type: "result",
      },
      {
        field: "electricBatteryConnection",
        label: "Periksa aki & kondisi sambungannya",
        type: "result",
      },
    ],
  },
  {
    title: "C. Opsional",
    fields: [{ field: "optionalApar", label: "Periksa APAR", type: "result" }],
  },
  {
    title: "D. Penambahan Pelumas & Pendingin",
    fields: [
      {
        field: "topUpCoolant",
        label: "Cairan Pendingin (Coolant)",
        type: "topup",
      },
      {
        field: "topUpEngineOil",
        label: "Oli Mesin (SAE 15W-40)",
        type: "topup",
      },
    ],
  },
];
