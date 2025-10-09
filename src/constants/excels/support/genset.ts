import type { ChecklistSection } from "../../../types/interfaces";

export const supportChecklistDataGenset: ChecklistSection[] = [
  {
    title: "A. Mesin",
    fields: [
      {
        field: "engineOilLevel",
        label: "Oli Mesin (Periksa Level / Tambah Oli)",
        type: "result",
      },
      {
        field: "engineOilFilter",
        label: "Filter Oli (Periksa)",
        type: "result",
      },
      {
        field: "engineFuelFilter",
        label: "Filter Bahan Bakar (Periksa)",
        type: "result",
      },
      {
        field: "engineAirCleaner",
        label: "Saringan Udara (Periksa & Bersihkan)",
        type: "result",
      },
      {
        field: "engineRadiatorCoolant",
        label: "Air Pendingin Radiator (Periksa)",
        type: "result",
      },
      {
        field: "engineRubberMounting",
        label: "Karet Dudukan Mesin (Periksa & Kencangkan Ulang)",
        type: "result",
      },
      {
        field: "engineFanBelt",
        label: "Tali Kipas (Fan Belt) (Periksa & Sesuaikan)",
        type: "result",
      },
      {
        field: "engineVisualCheck",
        label: "Pemeriksaan Visual Unit Lengkap",
        type: "result",
      },
      {
        field: "engineLeaks",
        label: "Kebocoran (Oli vakum, udara & konektor air)",
        type: "result",
      },
      {
        field: "engineBearing",
        label: "Bearing (Periksa Visual & Ganti bila perlu)",
        type: "result",
      },
      {
        field: "engineBoltTightening",
        label:
          "Pengencangan Baut (Mesin & Dudukan Genset) (Periksa & Kencangkan Ulang)",
        type: "result",
      },
    ],
  },
  {
    title: "B. Kelistrikan",
    fields: [
      {
        field: "electricStartingCharging",
        label: "Sistem Starter & Pengisian (Periksa)",
        type: "result",
      },
      {
        field: "electricStartingMotor",
        label: "Motor Starter (Periksa / Ganti)",
        type: "result",
      },
      {
        field: "electricBattery",
        label: "Aki (Elektrolit & Terminal) (Periksa / Ganti)",
        type: "result",
      },
      {
        field: "electricStartingSwitch",
        label: "Saklar Starter (Periksa / Ganti)",
        type: "result",
      },
      {
        field: "electricAlternator",
        label: "Alternator (Periksa / Ganti)",
        type: "result",
      },
      {
        field: "electricWiringHarness",
        label: "Kabel Harness & Panel Monitor (Periksa)",
        type: "result",
      },
      {
        field: "electricMcb",
        label: "Semua MCB (Periksa / Ganti)",
        type: "result",
      },
      {
        field: "electricMeters",
        label: "Ampere Meter & Frequency Meter (Hz) (Periksa)",
        type: "result",
      },
      {
        field: "electricresultorSwitch",
        label: "Saklar Selektor (Periksa / Ganti)",
        type: "result",
      },
      {
        field: "electricPowerCouple",
        label: "Kabel Power & Coupling (Periksa)",
        type: "result",
      },
      { field: "electricAvr", label: "AVR (Bersihkan)", type: "result" },
      {
        field: "electricGeneratorSet",
        label: "Genset (Pemeriksaan Visual)",
        type: "result",
      },
      {
        field: "electricGrounding",
        label: "Grounding (Tes Pentanahan)",
        type: "result",
      },
      {
        field: "electricLightningArrester",
        label: "Penyalur Petir (Tes Pentanahan)",
        type: "result",
      },
      {
        field: "electricGuarding",
        label: "Pelindung (Periksa)",
        type: "result",
      },
    ],
  },
  {
    title: "C. Opsional",
    fields: [
      { field: "optionalApar", label: "APAR (Periksa)", type: "result" },
    ],
  },
  {
    title: "D. Pengisian Pelumas & Pendingin",
    fields: [
      {
        field: "topUpCoolant",
        label: "coolant",
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
