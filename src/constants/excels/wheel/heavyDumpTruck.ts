import type { ChecklistSection } from "../../../types/interfaces";

export const wheelChecklistDataHeavyDumpTruck: ChecklistSection[] = [
  {
    title: "Engine",
    fields: [
      {
        field: "engineVisualCheck",
        label:
          "Visual inspection of engine condition for leaks, loose bolts, etc.",
        type: "select",
      },
      {
        field: "engineUpperLeaks",
        label:
          "Check for oil, coolant, and gas leaks in the upper engine compartment",
        type: "select",
      },
      {
        field: "engineFuelLine",
        label: "Check all fuel lines for tightness, wear, and leaks",
        type: "select",
      },
      {
        field: "engineUnusualSound",
        label: "Check for unusual sounds",
        type: "select",
      },
      {
        field: "alternatorCondition",
        label: "Check alternator condition",
        type: "select",
      },
      {
        field: "starterMotorCondition",
        label: "Check starter motor condition",
        type: "select",
      },
      {
        field: "acCompressorCondition",
        label: "Check AC compressor condition",
        type: "select",
      },
      {
        field: "turbochargerCondition",
        label: "Check Turbocharger Right (RH)/Left (LH)",
        type: "select",
      },
      {
        field: "waterPumpCondition",
        label: "Check Water Pump condition",
        type: "select",
      },
    ],
  },
  {
    title: "Cooling System",
    fields: [
      {
        field: "radiatorConnection",
        label: "Check Radiator & connections",
        type: "select",
      },
      {
        field: "fanGuardCondition",
        label: "Check Fan guard condition",
        type: "select",
      },
      {
        field: "beltTension",
        label: "Check Belt Tension",
        type: "select",
      },
    ],
  },
  {
    title: "Left Side (LH) Inspection",
    fields: [
      {
        field: "leftFrontWheel",
        label: "Check left front wheel pressure & fasteners",
        type: "select",
      },
      {
        field: "ropsMounting",
        label: "Check ROPS cabin mounting",
        type: "select",
      },
      {
        field: "steeringLinkage",
        label: "Check Steering Linkage",
        type: "select",
      },
      {
        field: "frontSuspension",
        label: "Check Front Suspension cylinder & mounting",
        type: "select",
      },
      {
        field: "rearSuspension",
        label: "Check Rear Suspension cylinder & mounting",
        type: "select",
      },
      {
        field: "hydraulicTank",
        label: "Check Hydraulic tank",
        type: "select",
      },
      {
        field: "tankMounting",
        label: "Check Tank Mounting",
        type: "select",
      },
      {
        field: "chassisMainFrame",
        label: "Check Chassis/Main Frame",
        type: "select",
      },
      {
        field: "hoistCylinder",
        label: "Check Hoist Cylinder & mounting",
        type: "select",
      },
      {
        field: "leftRearWheel",
        label: "Check Left Rear Wheel",
        type: "select",
      },
      {
        field: "leftRearFinalDrive",
        label: "Check left rear Final Drive",
        type: "select",
      },
      {
        field: "dumpBody",
        label: "Check Dump Body",
        type: "select",
      },
      {
        field: "greaseLine",
        label: "Check Grease Line",
        type: "select",
      },
      {
        field: "hydraulicLine",
        label: "Check Hydraulic Line",
        type: "select",
      },
      {
        field: "airCleaner",
        label: "Check Air Cleaner condition",
        type: "select",
      },
      {
        field: "steeringOilTank",
        label: "Check Steering Oil Tank",
        type: "select",
      },
      {
        field: "greaseSystem",
        label: "Check Grease System",
        type: "select",
      },
      {
        field: "batteryElectrolyte",
        label: "Check Battery Electrolyte Level",
        type: "select",
      },
      {
        field: "handRail",
        label: "Check Hand Rail condition",
        type: "select",
      },
      {
        field: "walkways",
        label: "Check Walkways condition",
        type: "select",
      },
    ],
  },
  {
    title: "Right Side (RH) Inspection",
    fields: [
      {
        field: "rightRearWheel",
        label: "Check right rear wheel pressure & fasteners",
        type: "select",
      },
      {
        field: "rhFinalDrive",
        label: "Check Right (RH) Final Drive condition",
        type: "select",
      },
      {
        field: "rhRearSuspension",
        label: "Check Rear Suspension Cylinder & Mounting",
        type: "select",
      },
      {
        field: "fuelTankMounting",
        label: "Check Fuel Tank & Mounting",
        type: "select",
      },
      {
        field: "fuelLineCondition",
        label: "Check Fuel Line condition",
        type: "select",
      },
      {
        field: "rhChassisMounting",
        label: "Check Chassis & Mounting",
        type: "select",
      },
      {
        field: "rhFrontSuspension",
        label: "Check Front Suspension Cylinder & Mounting",
        type: "select",
      },
      {
        field: "rhSteeringLinkage",
        label: "Check Steering Linkage",
        type: "select",
      },
      {
        field: "rhDumpBodyCondition",
        label: "Check dump body condition",
        type: "select",
      },
    ],
  },
  {
    title: "Rear Axle Assembly",
    fields: [
      {
        field: "rearAxleLooseBolts",
        label: "Check for Loose Bolts",
        type: "select",
      },
      {
        field: "rearAxleOilLeaks",
        label: "Check for Oil Leaks",
        type: "select",
      },
    ],
  },
  {
    title: "Power Train",
    fields: [
      {
        field: "differentialCondition",
        label: "Check Differential Condition",
        type: "select",
      },
      {
        field: "transmissionCondition",
        label: "Check transmission condition",
        type: "select",
      },
      {
        field: "powerTrainLine",
        label: "Check Power Train Line condition",
        type: "select",
      },
      {
        field: "torqueConverter",
        label: "Check Torque Converter condition",
        type: "select",
      },
      {
        field: "driveShaftJoint",
        label: "Check Drive Shaft joint condition",
        type: "select",
      },
    ],
  },
  {
    title: "Cabin & Safety Devices",
    fields: [
      {
        field: "cabinGlass",
        label: "Check Cabin Glass Condition",
        type: "select",
      },
      {
        field: "cabinRops",
        label: "Check cabin & ROPS Condition",
        type: "select",
      },
      {
        field: "seatSafetyBelt",
        label: "Check Seat & Safety Belt condition",
        type: "select",
      },
      {
        field: "wiperFunction",
        label: "Check Wiper function",
        type: "select",
      },
      {
        field: "hornFunction",
        label: "Check Horn function",
        type: "select",
      },
      {
        field: "radioCommunication",
        label: "Check Radio Communication",
        type: "select",
      },
      {
        field: "reverseCamera",
        label: "Check Reverse Camera",
        type: "select",
      },
      {
        field: "mdvr",
        label: "Check MDVR",
        type: "select",
      },
      {
        field: "mirrorCondition",
        label: "Check Mirror condition",
        type: "select",
      },
      {
        field: "doorLock",
        label: "Check Door & Lock",
        type: "select",
      },
      {
        field: "monitoringSystem",
        label: "Check monitoring system condition",
        type: "select",
      },
      {
        field: "secondarySteering",
        label: "Check Secondary Steering",
        type: "select",
      },
      {
        field: "allBrakeFunction",
        label: "Check all Brake functions",
        type: "select",
      },
      {
        field: "parkingBrakeControl",
        label: "Check Parking Brake Control",
        type: "select",
      },
      {
        field: "emergencyStop",
        label: "Check Emergency Stop Function",
        type: "select",
      },
      {
        field: "fireExtinguisher",
        label: "Check Fire Extinguisher (APAR)",
        type: "select",
      },
    ],
  },
  {
    title: "Add Oil",
    fields: [
      {
        field: "conditionCoolant",
        label: "Coolant",
        type: "topup",
      },

      {
        field: "conditionEngineOil",
        label: "Engine Oil (15W-40)",
        type: "topup",
      },
      {
        field: "conditionTransmission",
        label: "Transmission (HD-30)",
        type: "topup",
      },
      {
        field: "conditionDifferential",
        label: "Differential (HD-30)",
        type: "topup",
      },
      {
        field: "conditionFinalDrive",
        label: "Final Drive (HD-30)",
        type: "topup",
      },
      {
        field: "conditionBrakeFluid",
        label: "Brake (HD-30)",
        type: "topup",
      },
      {
        field: "conditionSuspension",
        label: "Suspension (TURALIK 46)",
        type: "topup",
      },
      {
        field: "conditionHydraulic",
        label: "Hydraulic (TURALIK 46)",
        type: "topup",
      },
    ],
  },
];
// export const wheelChecklistDataHeavyDumpTruck: ChecklistSection[] = [
//   {
//     title: "A. Mesin (Engine)",
//     fields: [
//       {
//         field: "engineVisualCheck",
//         label:
//           "Pemeriksaan visual kondisi mesin dari: kebocoran, baut kendor & lain-lain",
//         type: "result",
//       },
//       {
//         field: "engineUpperLeaks",
//         label:
//           "Periksa kebocoran oli, kebocoran coolant dan kebocoran gas di area kompartemen mesin atas",
//         type: "result",
//       },
//       {
//         field: "engineFuelLine",
//         label:
//           "Periksa semua saluran bahan bakar (fuel line) dari kekencangan, keausan dan kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineUnusualSound",
//         label: "Periksa bunyi/suara yang tidak biasa",
//         type: "result",
//       },
//       {
//         field: "alternatorCondition",
//         label: "Periksa kondisi alternator",
//         type: "result",
//       },
//       {
//         field: "starterMotorCondition",
//         label: "Periksa kondisi starter motor",
//         type: "result",
//       },
//       {
//         field: "acCompressorCondition",
//         label: "Periksa kondisi kompresor AC",
//         type: "result",
//       },
//       {
//         field: "turbochargerCondition",
//         label: "Periksa Turbocharger Kanan (RH)/Kiri (LH)",
//         type: "result",
//       },
//       {
//         field: "waterPumpCondition",
//         label: "Periksa kondisi Water Pump",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "B. Sistem Pendingin (Cooling System)",
//     fields: [
//       {
//         field: "radiatorConnection",
//         label: "Periksa Radiator & koneksi",
//         type: "result",
//       },
//       {
//         field: "fanGuardCondition",
//         label: "Periksa kondisi pelindung Kipas (Fan guard)",
//         type: "result",
//       },
//       {
//         field: "beltTension",
//         label: "Periksa Ketegangan Belt",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "C. Pemeriksaan Sisi Kiri (LH) Mesin",
//     fields: [
//       {
//         field: "leftFrontWheel",
//         label: "Periksa tekanan & pengencang roda depan kiri",
//         type: "result",
//       },
//       {
//         field: "ropsMounting",
//         label: "Periksa dudukan kabin ROPS",
//         type: "result",
//       },
//       {
//         field: "steeringLinkage",
//         label: "Periksa Sambungan Kemudi (Steering Linkage)",
//         type: "result",
//       },
//       {
//         field: "frontSuspension",
//         label: "Periksa silinder & dudukan Suspensi Depan",
//         type: "result",
//       },
//       {
//         field: "rearSuspension",
//         label: "Periksa silinder & dudukan Suspensi Belakang",
//         type: "result",
//       },
//       {
//         field: "hydraulicTank",
//         label: "Periksa tangki Hidraulik",
//         type: "result",
//       },
//       {
//         field: "tankMounting",
//         label: "Periksa Dudukan Tangki",
//         type: "result",
//       },
//       {
//         field: "chassisMainFrame",
//         label: "Periksa Chassis/Main Frame",
//         type: "result",
//       },
//       {
//         field: "hoistCylinder",
//         label: "Periksa Silinder Hoist & dudukan",
//         type: "result",
//       },
//       {
//         field: "leftRearWheel",
//         label: "Periksa Roda Belakang Kiri",
//         type: "result",
//       },
//       {
//         field: "leftRearFinalDrive",
//         label: "Periksa Final Drive belakang kiri",
//         type: "result",
//       },
//       { field: "dumpBody", label: "Periksa Dump Body", type: "result" },
//       {
//         field: "greaseLine",
//         label: "Periksa Saluran Gemuk (Grease Line)",
//         type: "result",
//       },
//       {
//         field: "hydraulicLine",
//         label: "Periksa Saluran Hidraulik",
//         type: "result",
//       },
//       {
//         field: "airCleaner",
//         label: "Periksa kondisi Filter Udara (Air Cleaner)",
//         type: "result",
//       },
//       {
//         field: "steeringOilTank",
//         label: "Periksa Tangki Oli Kemudi",
//         type: "result",
//       },
//       {
//         field: "greaseSystem",
//         label: "Periksa Sistem Gemuk (Grease System)",
//         type: "result",
//       },
//       {
//         field: "batteryElectrolyte",
//         label: "Periksa Level Elektrolit Baterai",
//         type: "result",
//       },
//       {
//         field: "handRail",
//         label: "Periksa kondisi Pegangan Tangan (Hand Rail)",
//         type: "result",
//       },
//       { field: "walkways", label: "Periksa kondisi Walkways", type: "result" },
//     ],
//   },
//   {
//     title: "D. Pemeriksaan Sisi Kanan (RH) Mesin",
//     fields: [
//       {
//         field: "rightRearWheel",
//         label: "Periksa tekanan & pengencang roda belakang kanan",
//         type: "result",
//       },
//       {
//         field: "rhFinalDrive",
//         label: "Periksa kondisi Final Drive Kanan (RH)",
//         type: "result",
//       },
//       {
//         field: "rhRearSuspension",
//         label: "Periksa Silinder & Dudukan Suspensi Belakang",
//         type: "result",
//       },
//       {
//         field: "fuelTankMounting",
//         label: "Periksa Tangki Bahan Bakar & Dudukan",
//         type: "result",
//       },
//       {
//         field: "fuelLineCondition",
//         label: "Periksa kondisi Saluran Bahan Bakar",
//         type: "result",
//       },
//       {
//         field: "rhChassisMounting",
//         label: "Periksa Chassis & Dudukan",
//         type: "result",
//       },
//       {
//         field: "rhFrontSuspension",
//         label: "Periksa Silinder & Dudukan Suspensi Depan",
//         type: "result",
//       },
//       {
//         field: "rhSteeringLinkage",
//         label: "Periksa Sambungan Kemudi (Steering Linkage)",
//         type: "result",
//       },
//       {
//         field: "rhDumpBodyCondition",
//         label: "Periksa kondisi dump body",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "E. Rakitan Axle Belakang (Rear Axle Assembly)",
//     fields: [
//       {
//         field: "rearAxleLooseBolts",
//         label: "Periksa Baut Kendor",
//         type: "result",
//       },
//       {
//         field: "rearAxleOilLeaks",
//         label: "Periksa Kebocoran Oli",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "F. Power Train",
//     fields: [
//       {
//         field: "differentialCondition",
//         label: "Periksa Kondisi Differensial",
//         type: "result",
//       },
//       {
//         field: "transmissionCondition",
//         label: "Periksa kondisi transmisi",
//         type: "result",
//       },
//       {
//         field: "powerTrainLine",
//         label: "Periksa kondisi Saluran Power Train",
//         type: "result",
//       },
//       {
//         field: "torqueConverter",
//         label: "Periksa kondisi Torque Converter",
//         type: "result",
//       },
//       {
//         field: "driveShaftJoint",
//         label: "Periksa kondisi sambungan Drive Shaft",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "G. Kabin & Perangkat Keselamatan",
//     fields: [
//       {
//         field: "cabinGlass",
//         label: "Periksa Kondisi Kaca Kabin",
//         type: "result",
//       },
//       {
//         field: "cabinRops",
//         label: "Periksa Kondisi kabin & ROPS",
//         type: "result",
//       },
//       {
//         field: "seatSafetyBelt",
//         label: "Periksa kondisi Kursi & Sabuk Pengaman",
//         type: "result",
//       },
//       { field: "wiperFunction", label: "Periksa fungsi Wiper", type: "result" },
//       {
//         field: "hornFunction",
//         label: "Periksa fungsi Klakson",
//         type: "result",
//       },
//       {
//         field: "radioCommunication",
//         label: "Periksa Komunikasi Radio",
//         type: "result",
//       },
//       {
//         field: "reverseCamera",
//         label: "Periksa Kamera Mundur",
//         type: "result",
//       },
//       { field: "mdvr", label: "Periksa MDVR", type: "result" },
//       {
//         field: "mirrorCondition",
//         label: "Periksa kondisi Kaca Spion",
//         type: "result",
//       },
//       { field: "doorLock", label: "Periksa Pintu & Kunci", type: "result" },
//       {
//         field: "monitoringSystem",
//         label: "Periksa kondisi sistem pemantauan",
//         type: "result",
//       },
//       {
//         field: "secondarySteering",
//         label: "Periksa Kemudi Sekunder",
//         type: "result",
//       },
//       {
//         field: "allBrakeFunction",
//         label: "Periksa semua fungsi Rem",
//         type: "result",
//       },
//       {
//         field: "parkingBrakeControl",
//         label: "Periksa Kontrol Rem Parkir",
//         type: "result",
//       },
//       {
//         field: "emergencyStop",
//         label: "Periksa Fungsi Emergency Stop",
//         type: "result",
//       },
//       {
//         field: "fireExtinguisher",
//         label: "Periksa Alat Pemadam Api Ringan (APAR)",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "I. Penambahan Pelumas & Coolant",
//     fields: [
//       { field: "conditionCoolant", label: "Coolant", type: "topup" },

//       {
//         field: "conditionEngineOil",
//         label: "Oli Mesin (15W-40)",
//         type: "topup",
//       },
//       {
//         field: "conditionTransmission",
//         label: "Transmisi (HD-30)",
//         type: "topup",
//       },
//       {
//         field: "conditionDifferential",
//         label: "Differensial (HD-30)",
//         type: "topup",
//       },
//       {
//         field: "conditionFinalDrive",
//         label: "Final Drive (HD-30)",
//         type: "topup",
//       },
//       { field: "conditionBrakeFluid", label: "Rem (HD-30)", type: "topup" },
//       {
//         field: "conditionSuspension",
//         label: "Suspensi (TURALIK 46)",
//         type: "topup",
//       },
//       {
//         field: "conditionHydraulic",
//         label: "Hidraulik (TURALIK 46)",
//         type: "topup",
//       },
//     ],
//   },
// ];
