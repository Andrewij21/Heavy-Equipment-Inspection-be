import type { ChecklistSection } from "../../../types/interfaces";

export const wheelChecklistDataHeavyDumpTruck: ChecklistSection[] = [
  {
    title: "A. Mesin (Engine)",
    fields: [
      {
        field: "engineVisualCheck",
        label:
          "Pemeriksaan visual kondisi mesin dari: kebocoran, baut kendor & lain-lain",
        type: "result",
      },
      {
        field: "engineUpperLeaks",
        label:
          "Periksa kebocoran oli, kebocoran coolant dan kebocoran gas di area kompartemen mesin atas",
        type: "result",
      },
      {
        field: "engineFuelLine",
        label:
          "Periksa semua saluran bahan bakar (fuel line) dari kekencangan, keausan dan kebocoran",
        type: "result",
      },
      {
        field: "engineUnusualSound",
        label: "Periksa bunyi/suara yang tidak biasa",
        type: "result",
      },
      {
        field: "alternatorCondition",
        label: "Periksa kondisi alternator",
        type: "result",
      },
      {
        field: "starterMotorCondition",
        label: "Periksa kondisi starter motor",
        type: "result",
      },
      {
        field: "acCompressorCondition",
        label: "Periksa kondisi kompresor AC",
        type: "result",
      },
      {
        field: "turbochargerCondition",
        label: "Periksa Turbocharger Kanan (RH)/Kiri (LH)",
        type: "result",
      },
      {
        field: "waterPumpCondition",
        label: "Periksa kondisi Water Pump",
        type: "result",
      },
    ],
  },
  {
    title: "B. Sistem Pendingin (Cooling System)",
    fields: [
      {
        field: "radiatorConnection",
        label: "Periksa Radiator & koneksi",
        type: "result",
      },
      {
        field: "fanGuardCondition",
        label: "Periksa kondisi pelindung Kipas (Fan guard)",
        type: "result",
      },
      {
        field: "beltTension",
        label: "Periksa Ketegangan Belt",
        type: "result",
      },
    ],
  },
  {
    title: "C. Pemeriksaan Sisi Kiri (LH) Mesin",
    fields: [
      {
        field: "leftFrontWheel",
        label: "Periksa tekanan & pengencang roda depan kiri",
        type: "result",
      },
      {
        field: "ropsMounting",
        label: "Periksa dudukan kabin ROPS",
        type: "result",
      },
      {
        field: "steeringLinkage",
        label: "Periksa Sambungan Kemudi (Steering Linkage)",
        type: "result",
      },
      {
        field: "frontSuspension",
        label: "Periksa silinder & dudukan Suspensi Depan",
        type: "result",
      },
      {
        field: "rearSuspension",
        label: "Periksa silinder & dudukan Suspensi Belakang",
        type: "result",
      },
      {
        field: "hydraulicTank",
        label: "Periksa tangki Hidraulik",
        type: "result",
      },
      {
        field: "tankMounting",
        label: "Periksa Dudukan Tangki",
        type: "result",
      },
      {
        field: "chassisMainFrame",
        label: "Periksa Chassis/Main Frame",
        type: "result",
      },
      {
        field: "hoistCylinder",
        label: "Periksa Silinder Hoist & dudukan",
        type: "result",
      },
      {
        field: "leftRearWheel",
        label: "Periksa Roda Belakang Kiri",
        type: "result",
      },
      {
        field: "leftRearFinalDrive",
        label: "Periksa Final Drive belakang kiri",
        type: "result",
      },
      { field: "dumpBody", label: "Periksa Dump Body", type: "result" },
      {
        field: "greaseLine",
        label: "Periksa Saluran Gemuk (Grease Line)",
        type: "result",
      },
      {
        field: "hydraulicLine",
        label: "Periksa Saluran Hidraulik",
        type: "result",
      },
      {
        field: "airCleaner",
        label: "Periksa kondisi Filter Udara (Air Cleaner)",
        type: "result",
      },
      {
        field: "steeringOilTank",
        label: "Periksa Tangki Oli Kemudi",
        type: "result",
      },
      {
        field: "greaseSystem",
        label: "Periksa Sistem Gemuk (Grease System)",
        type: "result",
      },
      {
        field: "batteryElectrolyte",
        label: "Periksa Level Elektrolit Baterai",
        type: "result",
      },
      {
        field: "handRail",
        label: "Periksa kondisi Pegangan Tangan (Hand Rail)",
        type: "result",
      },
      { field: "walkways", label: "Periksa kondisi Walkways", type: "result" },
    ],
  },
  {
    title: "D. Pemeriksaan Sisi Kanan (RH) Mesin",
    fields: [
      {
        field: "rightRearWheel",
        label: "Periksa tekanan & pengencang roda belakang kanan",
        type: "result",
      },
      {
        field: "rhFinalDrive",
        label: "Periksa kondisi Final Drive Kanan (RH)",
        type: "result",
      },
      {
        field: "rhRearSuspension",
        label: "Periksa Silinder & Dudukan Suspensi Belakang",
        type: "result",
      },
      {
        field: "fuelTankMounting",
        label: "Periksa Tangki Bahan Bakar & Dudukan",
        type: "result",
      },
      {
        field: "fuelLineCondition",
        label: "Periksa kondisi Saluran Bahan Bakar",
        type: "result",
      },
      {
        field: "rhChassisMounting",
        label: "Periksa Chassis & Dudukan",
        type: "result",
      },
      {
        field: "rhFrontSuspension",
        label: "Periksa Silinder & Dudukan Suspensi Depan",
        type: "result",
      },
      {
        field: "rhSteeringLinkage",
        label: "Periksa Sambungan Kemudi (Steering Linkage)",
        type: "result",
      },
      {
        field: "rhDumpBodyCondition",
        label: "Periksa kondisi dump body",
        type: "result",
      },
    ],
  },
  {
    title: "E. Rakitan Axle Belakang (Rear Axle Assembly)",
    fields: [
      {
        field: "rearAxleLooseBolts",
        label: "Periksa Baut Kendor",
        type: "result",
      },
      {
        field: "rearAxleOilLeaks",
        label: "Periksa Kebocoran Oli",
        type: "result",
      },
    ],
  },
  {
    title: "F. Power Train",
    fields: [
      {
        field: "differentialCondition",
        label: "Periksa Kondisi Differensial",
        type: "result",
      },
      {
        field: "transmissionCondition",
        label: "Periksa kondisi transmisi",
        type: "result",
      },
      {
        field: "powerTrainLine",
        label: "Periksa kondisi Saluran Power Train",
        type: "result",
      },
      {
        field: "torqueConverter",
        label: "Periksa kondisi Torque Converter",
        type: "result",
      },
      {
        field: "driveShaftJoint",
        label: "Periksa kondisi sambungan Drive Shaft",
        type: "result",
      },
    ],
  },
  {
    title: "G. Kabin & Perangkat Keselamatan",
    fields: [
      {
        field: "cabinGlass",
        label: "Periksa Kondisi Kaca Kabin",
        type: "result",
      },
      {
        field: "cabinRops",
        label: "Periksa Kondisi kabin & ROPS",
        type: "result",
      },
      {
        field: "seatSafetyBelt",
        label: "Periksa kondisi Kursi & Sabuk Pengaman",
        type: "result",
      },
      { field: "wiperFunction", label: "Periksa fungsi Wiper", type: "result" },
      {
        field: "hornFunction",
        label: "Periksa fungsi Klakson",
        type: "result",
      },
      {
        field: "radioCommunication",
        label: "Periksa Komunikasi Radio",
        type: "result",
      },
      {
        field: "reverseCamera",
        label: "Periksa Kamera Mundur",
        type: "result",
      },
      { field: "mdvr", label: "Periksa MDVR", type: "result" },
      {
        field: "mirrorCondition",
        label: "Periksa kondisi Kaca Spion",
        type: "result",
      },
      { field: "doorLock", label: "Periksa Pintu & Kunci", type: "result" },
      {
        field: "monitoringSystem",
        label: "Periksa kondisi sistem pemantauan",
        type: "result",
      },
      {
        field: "secondarySteering",
        label: "Periksa Kemudi Sekunder",
        type: "result",
      },
      {
        field: "allBrakeFunction",
        label: "Periksa semua fungsi Rem",
        type: "result",
      },
      {
        field: "parkingBrakeControl",
        label: "Periksa Kontrol Rem Parkir",
        type: "result",
      },
      {
        field: "emergencyStop",
        label: "Periksa Fungsi Emergency Stop",
        type: "result",
      },
      {
        field: "fireExtinguisher",
        label: "Periksa Alat Pemadam Api Ringan (APAR)",
        type: "result",
      },
    ],
  },
  {
    title: "I. Penambahan Pelumas & Coolant",
    fields: [
      {
        field: "conditionEngineOil",
        label: "Oli Mesin (SAE 15W-40)",
        type: "result",
      },
      {
        field: "conditionHydraulic",
        label: "Hidraulik (TURALIK 46)",
        type: "result",
      },
      {
        field: "conditionFrontSuspension",
        label: "Suspensi Depan (TURALIK 46)",
        type: "result",
      },
      {
        field: "conditionRearSuspension",
        label: "Suspensi Belakang (TURALIK 46)",
        type: "result",
      },
      {
        field: "conditionTransmission",
        label: "Transmisi (SAE-30)",
        type: "result",
      },
      {
        field: "conditionDifferential",
        label: "Differensial (SAE-30)",
        type: "result",
      },
      {
        field: "conditionFinalDrive",
        label: "Final Drive (SAE-30)",
        type: "result",
      },
      { field: "conditionBrakeFluid", label: "Rem (SAE-30)", type: "result" },
      {
        field: "conditionSteering",
        label: "Kemudi (Steering)",
        type: "result",
      },
      {
        field: "conditionGrease",
        label: "Gemuk (Grease) (V220)",
        type: "result",
      },
      { field: "conditionCoolant", label: "Coolant", type: "result" },
    ],
  },
];
