import type { ChecklistSection } from "../../../types/interfaces";

export const supportChecklistDataTowerlamp: ChecklistSection[] = [
  {
    title: "A. Mesin",
    fields: [
      {
        field: "engineOilLevel",
        label: "Periksa level oli mesin & kebocoran",
        type: "result",
      },
      {
        field: "engineMounting",
        label: "Periksa dudukan mesin",
        type: "result",
      },
      {
        field: "engineCoolantLevel",
        label: "Periksa level air coolant & kebocoran",
        type: "result",
      },
      {
        field: "engineFuelSystem",
        label: "Periksa sistem bahan bakar & kebocoran",
        type: "result",
      },
      {
        field: "engineBeltTension",
        label: "Periksa ketegangan belt & komponen terkait",
        type: "result",
      },
      {
        field: "engineAirIntake",
        label: "Periksa saluran udara masuk & sambungan knalpot",
        type: "result",
      },
    ],
  },
  {
    title: "B. Hidrolik",
    fields: [
      {
        field: "hydraulicOilLevel",
        label: "Periksa level oli hidrolik",
        type: "result",
      },
      {
        field: "hydraulicPumpLeakage",
        label: "Periksa kebocoran pada pompa, motor, PTO, selang/pipa",
        type: "result",
      },
      {
        field: "hydraulicValveLeakage",
        label: "Periksa kebocoran pada control valve",
        type: "result",
      },
      {
        field: "hydraulicWireRope",
        label: "Periksa wire rope",
        type: "result",
      },
      {
        field: "hydraulicTelescopicTower",
        label: "Periksa menara teleskopik",
        type: "result",
      },
    ],
  },
  {
    title: "C. Kelistrikan",
    fields: [
      {
        field: "electricWorkLamp",
        label: "Periksa semua lampu kerja",
        type: "result",
      },
      {
        field: "electricSwitchLamp",
        label: "Periksa semua saklar lampu",
        type: "result",
      },
      {
        field: "electricPanelMonitor",
        label: "Periksa fungsi panel monitor",
        type: "result",
      },
      {
        field: "electricGeneratorConnection",
        label: "Periksa koneksi generator",
        type: "result",
      },
      {
        field: "electricBattery",
        label: "Periksa aki & kondisi koneksi",
        type: "result",
      },
      {
        field: "electricGeneratorVoltage",
        label: "Periksa tegangan output generator",
        type: "result",
      },
      {
        field: "electricBreakerCurrent",
        label: "Periksa arus output breaker",
        type: "result",
      },
      {
        field: "electricFrequency",
        label: "Periksa frekuensi",
        type: "result",
      },
    ],
  },
  {
    title: "D. Opsional",
    fields: [
      {
        field: "optionalVisualSkidding",
        label: "Periksa kondisi visual skidding",
        type: "result",
      },
      { field: "optionalApar", label: "Periksa APAR", type: "result" },
    ],
  },
  {
    title: "E. Penambahan Pelumas & Pendingin",
    fields: [
      { field: "topUpCoolant", label: "Coolant", type: "result" },
      {
        field: "topUpEngineOil",
        label: "Oli Mesin (SAE 15W-40)",
        type: "result",
      },
    ],
  },
];
