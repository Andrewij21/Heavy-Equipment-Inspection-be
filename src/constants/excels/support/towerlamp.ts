import type { ChecklistSection } from "../../../types/interfaces";

export const supportChecklistDataTowerlamp: ChecklistSection[] = [
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
        label: "Check belt tension & related components",
        type: "select",
      },
      {
        field: "engineAirIntake",
        label: "Check air intake & exhaust connection",
        type: "select",
      },
    ],
  },
  {
    title: "Hydraulic",
    fields: [
      {
        field: "hydraulicOilLevel",
        label: "Check hydraulic oil level",
        type: "select",
      },
      {
        field: "hydraulicPumpLeakage",
        label: "Check for leaks on pump, motor, PTO, hose/pipe",
        type: "select",
      },
      {
        field: "hydraulicValveLeakage",
        label: "Check for leaks on control valve",
        type: "select",
      },
      {
        field: "hydraulicWireRope",
        label: "Check wire rope",
        type: "select",
      },
      {
        field: "hydraulicTelescopicTower",
        label: "Check telescopic tower",
        type: "select",
      },
    ],
  },
  {
    title: "Electric",
    fields: [
      {
        field: "electricWorkLamp",
        label: "Check all work lamps",
        type: "select",
      },
      {
        field: "electricSwitchLamp",
        label: "Check all lamp switches",
        type: "select",
      },
      {
        field: "electricPanelMonitor",
        label: "Check monitor panel function",
        type: "select",
      },
      {
        field: "electricGeneratorConnection",
        label: "Check generator connection",
        type: "select",
      },
      {
        field: "electricBattery",
        label: "Check battery & connection condition",
        type: "select",
      },
      {
        field: "electricGeneratorVoltage",
        label: "Check generator output voltage",
        type: "select",
      },
      {
        field: "electricBreakerCurrent",
        label: "Check breaker output current",
        type: "select",
      },
      {
        field: "electricFrequency",
        label: "Check frequency",
        type: "select",
      },
    ],
  },
  {
    title: "Optional",
    fields: [
      {
        field: "optionalVisualSkidding",
        label: "Check visual condition of skidding",
        type: "select",
      },
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
// export const supportChecklistDataTowerlamp: ChecklistSection[] = [
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
//         label: "Periksa level air coolant & kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineFuelSystem",
//         label: "Periksa sistem bahan bakar & kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineBeltTension",
//         label: "Periksa ketegangan belt & komponen terkait",
//         type: "result",
//       },
//       {
//         field: "engineAirIntake",
//         label: "Periksa saluran udara masuk & sambungan knalpot",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "B. Hidrolik",
//     fields: [
//       {
//         field: "hydraulicOilLevel",
//         label: "Periksa level oli hidrolik",
//         type: "result",
//       },
//       {
//         field: "hydraulicPumpLeakage",
//         label: "Periksa kebocoran pada pompa, motor, PTO, selang/pipa",
//         type: "result",
//       },
//       {
//         field: "hydraulicValveLeakage",
//         label: "Periksa kebocoran pada control valve",
//         type: "result",
//       },
//       {
//         field: "hydraulicWireRope",
//         label: "Periksa wire rope",
//         type: "result",
//       },
//       {
//         field: "hydraulicTelescopicTower",
//         label: "Periksa menara teleskopik",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "C. Kelistrikan",
//     fields: [
//       {
//         field: "electricWorkLamp",
//         label: "Periksa semua lampu kerja",
//         type: "result",
//       },
//       {
//         field: "electricSwitchLamp",
//         label: "Periksa semua saklar lampu",
//         type: "result",
//       },
//       {
//         field: "electricPanelMonitor",
//         label: "Periksa fungsi panel monitor",
//         type: "result",
//       },
//       {
//         field: "electricGeneratorConnection",
//         label: "Periksa koneksi generator",
//         type: "result",
//       },
//       {
//         field: "electricBattery",
//         label: "Periksa aki & kondisi koneksi",
//         type: "result",
//       },
//       {
//         field: "electricGeneratorVoltage",
//         label: "Periksa tegangan output generator",
//         type: "result",
//       },
//       {
//         field: "electricBreakerCurrent",
//         label: "Periksa arus output breaker",
//         type: "result",
//       },
//       {
//         field: "electricFrequency",
//         label: "Periksa frekuensi",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "D. Opsional",
//     fields: [
//       {
//         field: "optionalVisualSkidding",
//         label: "Periksa kondisi visual skidding",
//         type: "result",
//       },
//       { field: "optionalApar", label: "Periksa APAR", type: "result" },
//     ],
//   },
//   {
//     title: "E. Penambahan Pelumas & Pendingin",
//     fields: [
//       { field: "topUpCoolant", label: "Coolant", type: "result" },
//       {
//         field: "topUpEngineOil",
//         label: "Oli Mesin (SAE 15W-40)",
//         type: "result",
//       },
//     ],
//   },
// ];
