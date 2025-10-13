import type { ChecklistSection } from "../../../types/interfaces";

export const wheelChecklistDataGrader: ChecklistSection[] = [
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
          "Check for oil, coolant, and gas leaks in the upper engine compartment area",
        type: "select",
      },
      {
        field: "engineFuelLine",
        label: "Check all fuel lines for tightness, wear, and leaks",
        type: "select",
      },
      {
        field: "engineOilLevel",
        label: "Check engine oil level (top up if needed)",
        type: "select",
      },
      {
        field: "engineCoolantLevel",
        label: "Check Coolant level (top up if needed)",
        type: "select",
      },
      {
        field: "engineHydraulicPump",
        label: "Check Hydraulic Pump & Lines Condition",
        type: "select",
      },
      {
        field: "engineElectricalHarness",
        label: "Check electrical wiring harness for damage and position",
        type: "select",
      },
      {
        field: "engineBatteryElectrolyte",
        label: "Check battery electrolyte level",
        type: "select",
      },
      {
        field: "engineBelts",
        label: "Check all belts for tension and wear",
        type: "select",
      },
      {
        field: "engineCoverHandRail",
        label: "Check all covers and hand rail",
        type: "select",
      },
      {
        field: "engineAlternator",
        label: "Check Alternator mounting and connector",
        type: "select",
      },
      {
        field: "engineTransmissionLeaks",
        label: "Check transmission for leaks",
        type: "select",
      },
    ],
  },
  {
    title: "Cooling System",
    fields: [
      {
        field: "coolingRadiator",
        label: "Check Radiator, Aftercooler, Hyd oil cooler & connections",
        type: "select",
      },
      {
        field: "coolingFanGuard",
        label: "Check Fan guard condition",
        type: "select",
      },
      {
        field: "coolingBeltTension",
        label: "Check Belt Tension",
        type: "select",
      },
    ],
  },
  {
    title: "Hydraulic System",
    fields: [
      {
        field: "hydraulicWheelLeanCylinder",
        label: "Check wheel lean cylinder and its mounting",
        type: "select",
      },
      {
        field: "hydraulicSteeringCylinder",
        label: "Check steering cylinder and its mounting",
        type: "select",
      },
      {
        field: "hydraulicBladeLiftCylinder",
        label: "Check blade lift cylinder and its mounting",
        type: "select",
      },
      {
        field: "hydraulicSideShiftCylinder",
        label: "Check side shift cylinder and its mounting",
        type: "select",
      },
      {
        field: "hydraulicCenterShiftCylinder",
        label: "Check center shift cylinder and its mounting",
        type: "select",
      },
      {
        field: "hydraulicRipperCylinder",
        label: "Check ripper cylinder and its mounting",
        type: "select",
      },
      {
        field: "hydraulicArticulationCylinder",
        label: "Check articulation cylinder and its mounting",
        type: "select",
      },
      {
        field: "hydraulicOilLevel",
        label: "Check hydraulic oil level (top up if needed)",
        type: "select",
      },
    ],
  },
  {
    title: "Cabin, Electrical & Safety Devices",
    fields: [
      {
        field: "cabinGlass",
        label: "Check Cabin Glass Condition",
        type: "select",
      },
      {
        field: "cabinRops",
        label: "Check Cabin & ROPS Condition",
        type: "select",
      },
      {
        field: "cabinSeatBelt",
        label: "Check Seat & Safety Belt condition",
        type: "select",
      },
      {
        field: "cabinDoorLock",
        label: "Check Door & Lock",
        type: "select",
      },
      {
        field: "cabinTransmissionSteeringLever",
        label: "Check Transmission & Steering Control Lever Function",
        type: "select",
      },
      {
        field: "cabinAttachmentLever",
        label: "Check Attachment Control Lever",
        type: "select",
      },
      {
        field: "cabinReverseCamera",
        label: "Check Reverse Camera function",
        type: "select",
      },
      {
        field: "cabinMdvr",
        label: "Check MDVR",
        type: "select",
      },
      {
        field: "cabinAcBlower",
        label: "Check AC / Blower",
        type: "select",
      },
      {
        field: "cabinMirror",
        label: "Check Mirror condition",
        type: "select",
      },
      {
        field: "cabinWiper",
        label: "Check wiper condition & function",
        type: "select",
      },
      {
        field: "cabinHorn",
        label: "Check horn function",
        type: "select",
      },
      {
        field: "cabinMonitoringSystem",
        label: "Check monitoring system condition",
        type: "select",
      },
      {
        field: "cabinSwitch",
        label: "Check all switch functions",
        type: "select",
      },
      {
        field: "cabinLamps",
        label: "Check all lamp functions & Rotary lamp",
        type: "select",
      },
      {
        field: "cabinEmergencyStop",
        label: "Check Emergency Stop Button Function",
        type: "select",
      },
      {
        field: "cabinBattery",
        label: "Check Battery & connection condition",
        type: "select",
      },
      {
        field: "cabinRadio",
        label: "Check Radio Communication",
        type: "select",
      },
      {
        field: "cabinBrake",
        label: "Check all Brake functions",
        type: "select",
      },
      {
        field: "cabinParkingBrake",
        label: "Check Parking Brake Control",
        type: "select",
      },
      {
        field: "cabinFireExtinguisher",
        label: "Check Fire Extinguisher (APAR)",
        type: "select",
      },
    ],
  },
  {
    title: "Rear Axle",
    fields: [
      {
        field: "structureFrameCracks",
        label: "Check entire Machine frame, chassis, and body for cracks",
        type: "select",
      },
      {
        field: "structureBladeGETCondition",
        label: "Check condition of blade & G.E.T for missing bolts and wear",
        type: "select",
      },
      {
        field: "structureStepLadderCondition",
        label: "Check Step Ladder & hand hold condition",
        type: "select",
      },
      {
        field: "structureTandemHousingLeaks",
        label: "Check LH/RH Tandem housing for leaks",
        type: "select",
      },
      {
        field: "structureCoverGuards",
        label: "Check Cover & Guards condition",
        type: "select",
      },
      {
        field: "structureWheelSpindleLeaks",
        label: "Check all wheel spindle bearings for leaks",
        type: "select",
      },
      {
        field: "fuelTankDamageLeaks",
        label: "Check Fuel tank for damage & leaks",
        type: "select",
      },
      {
        field: "structureCircleDriveLeaks",
        label: "Check circle drive for leaks",
        type: "select",
      },
      {
        field: "structureArticulationCleanliness",
        label: "Check articulation area for dirt build-up",
        type: "select",
      },
      {
        field: "hydraulicTankDamageLeaks",
        label: "Check hydraulic oil tank for damage & leaks",
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
        label: "Engine Oil (SAE 15W-40)",
        type: "topup",
      },
      {
        field: "topUpTransmission",
        label: "Transmission (SAE-30)",
        type: "topup",
      },
      {
        field: "topUpTandem",
        label: "Tandem (SAE-30)",
        type: "topup",
      },
      {
        field: "topUpFinalDrive",
        label: "Final Drive (SAE-30)",
        type: "topup",
      },
      {
        field: "topUpBreak",
        label: "Brake (HD-30)",
        type: "topup",
      },
      {
        field: "topUpCircle",
        label: "Circle (TURALIK 46)",
        type: "topup",
      },
      {
        field: "topUpHydraulic",
        label: "Hydraulic (TURALIK 46)",
        type: "topup",
      },
    ],
  },
];
// export const wheelChecklistDataGrader: ChecklistSection[] = [
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
//           "Periksa kebocoran oli, kebocoran coolant, dan kebocoran gas di area kompartemen mesin atas",
//         type: "result",
//       },
//       {
//         field: "engineFuelLine",
//         label:
//           "Periksa semua saluran bahan bakar dari kekencangan, keausan, dan kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineOilLevel",
//         label: "Periksa level oli mesin (tambahkan jika perlu)",
//         type: "result",
//       },
//       {
//         field: "engineCoolantLevel",
//         label: "Periksa level Coolant (tambahkan jika perlu)",
//         type: "result",
//       },
//       {
//         field: "engineHydraulicPump",
//         label: "Periksa kondisi Pompa Hidraulik & Saluran",
//         type: "result",
//       },
//       {
//         field: "engineElectricalHarness",
//         label: "Periksa wiring harness listrik dari kerusakan dan posisi",
//         type: "result",
//       },
//       {
//         field: "engineBatteryElectrolyte",
//         label: "Periksa level elektrolit baterai",
//         type: "result",
//       },
//       {
//         field: "engineBelts",
//         label: "Periksa semua belt dari kekencangan dan keausan",
//         type: "result",
//       },
//       {
//         field: "engineCoverHandRail",
//         label: "Periksa semua cover dan pegangan tangan (hand rail)",
//         type: "result",
//       },
//       {
//         field: "engineAlternator",
//         label: "Periksa dudukan dan konektor Alternator",
//         type: "result",
//       },
//       {
//         field: "engineTransmissionLeaks",
//         label: "Periksa transmisi dari kebocoran",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "B. Sistem Pendingin (Cooling System)",
//     fields: [
//       {
//         field: "coolingRadiator",
//         label: "Periksa Radiator, Aftercooler, Hyd oil cooler & koneksi",
//         type: "result",
//       },
//       {
//         field: "coolingFanGuard",
//         label: "Periksa kondisi pelindung Kipas (Fan guard)",
//         type: "result",
//       },
//       {
//         field: "coolingBeltTension",
//         label: "Periksa Ketegangan Belt",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "C. Sistem Hidraulik",
//     fields: [
//       {
//         field: "hydraulicWheelLeanCylinder",
//         label:
//           "Periksa silinder kemiringan roda (wheel lean cylinder) dan dudukannya",
//         type: "result",
//       },
//       {
//         field: "hydraulicSteeringCylinder",
//         label: "Periksa silinder kemudi (steering cylinder) dan dudukannya",
//         type: "result",
//       },
//       {
//         field: "hydraulicBladeLiftCylinder",
//         label: "Periksa silinder pengangkat blade dan dudukannya",
//         type: "result",
//       },
//       {
//         field: "hydraulicSideShiftCylinder",
//         label:
//           "Periksa silinder pergeseran samping (side shift cylinder) dan dudukannya",
//         type: "result",
//       },
//       {
//         field: "hydraulicCenterShiftCylinder",
//         label:
//           "Periksa silinder pergeseran tengah (center shift cylinder) dan dudukannya",
//         type: "result",
//       },
//       {
//         field: "hydraulicRipperCylinder",
//         label: "Periksa silinder ripper dan dudukannya",
//         type: "result",
//       },
//       {
//         field: "hydraulicArticulationCylinder",
//         label: "Periksa silinder artikulasi dan dudukannya",
//         type: "result",
//       },
//       {
//         field: "hydraulicOilLevel",
//         label: "Periksa level oli hidraulik (tambahkan jika perlu)",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "D. Kabin - Kelistrikan - & Perangkat Keselamatan",
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
//         field: "cabinSeatBelt",
//         label: "Periksa kondisi Kursi & Sabuk Pengaman",
//         type: "result",
//       },
//       {
//         field: "cabinDoorLock",
//         label: "Periksa Pintu & Kunci",
//         type: "result",
//       },
//       {
//         field: "cabinTransmissionSteeringLever",
//         label: "Periksa Fungsi Tuas Transmisi & Kontrol Kemudi",
//         type: "result",
//       },
//       {
//         field: "cabinAttachmentLever",
//         label: "Periksa Tuas Kontrol Attachment",
//         type: "result",
//       },
//       {
//         field: "cabinReverseCamera",
//         label: "Periksa fungsi Kamera Mundur",
//         type: "result",
//       },
//       { field: "cabinMdvr", label: "Periksa MDVR", type: "result" },
//       { field: "cabinAcBlower", label: "Periksa AC / Blower", type: "result" },
//       {
//         field: "cabinMirror",
//         label: "Periksa kondisi Kaca Spion",
//         type: "result",
//       },
//       {
//         field: "cabinWiper",
//         label: "Periksa kondisi & fungsi wiper",
//         type: "result",
//       },
//       { field: "cabinHorn", label: "Periksa fungsi klakson", type: "result" },
//       {
//         field: "cabinMonitoringSystem",
//         label: "Periksa kondisi sistem pemantauan",
//         type: "result",
//       },
//       {
//         field: "cabinSwitch",
//         label: "Periksa semua fungsi saklar",
//         type: "result",
//       },
//       {
//         field: "cabinLamps",
//         label: "Periksa semua fungsi lampu & Rotary lamp",
//         type: "result",
//       },
//       {
//         field: "cabinEmergencyStop",
//         label: "Periksa Fungsi Tombol Emergency Stop",
//         type: "result",
//       },
//       {
//         field: "cabinBattery",
//         label: "Periksa Baterai & kondisi sambungan",
//         type: "result",
//       },
//       {
//         field: "cabinRadio",
//         label: "Periksa Komunikasi Radio",
//         type: "result",
//       },
//       {
//         field: "cabinBrake",
//         label: "Periksa semua fungsi Rem",
//         type: "result",
//       },
//       {
//         field: "cabinParkingBrake",
//         label: "Periksa Kontrol Rem Parkir",
//         type: "result",
//       },
//       {
//         field: "cabinFireExtinguisher",
//         label: "Periksa Alat Pemadam Api Ringan (APAR)",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "E. Rear Axle & Structure Details",
//     fields: [
//       {
//         field: "structureFrameCracks",
//         label:
//           "Check entire Machine frame, chasis body for cracks (Periksa frame engine, chasis dan body)",
//         type: "result",
//       },
//       {
//         field: "structureBladeGETCondition", // Field baru untuk Blade & GET
//         label:
//           "Check condition of blade & G.E.T for missing bolts dan wear (Periksa kondisi blade, dan G.E.T terhadap keausan)",
//         type: "result",
//       },
//       {
//         field: "structureStepLadderCondition", // Field baru untuk Step Ladder
//         label:
//           "Check Stape Ladder & hands hold condition (Periksa kondisi Step Ladder)",
//         type: "result",
//       },
//       {
//         field: "structureTandemHousingLeaks",
//         label:
//           "Check LH/RH Tandem housing for leaks (Periksa kebocoran pada Tandem LH/RH)",
//         type: "result",
//       },
//       {
//         field: "structureCoverGuards",
//         label: "Check Cover & Guards condition (Periksa kondisi cover & Guard)",
//         type: "result",
//       },
//       {
//         field: "structureWheelSpindleLeaks",
//         label:
//           "Check all wheel spindle bearing for leaks (periksa kebocoran pada Spindle bearing)",
//         type: "result",
//       },
//       {
//         field: "fuelTankDamageLeaks",
//         label:
//           "Check Fuel tank for damage & leak (Periksa kerusakan & kebocoran pada fuel tank)",
//         type: "result",
//       },
//       {
//         field: "structureCircleDriveLeaks",
//         label:
//           "Check circle drive for leaks (Periksa kebocoran pada circle drive)",
//         type: "result",
//       },
//       {
//         field: "structureArticulationCleanliness",
//         label:
//           "Check articulation area for dirt buld up (Periksa kebersihan pada ariculation)",
//         type: "result",
//       },
//       {
//         field: "hydraulicTankDamageLeaks",
//         label:
//           "Check hydraulic oil tank for damage & leaks (Perikisa kerusakan pada tanki hydrauic)",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "F. Penambahan Pelumas & Coolant",
//     fields: [
//       { field: "topUpCoolant", label: "Coolant", type: "topup" },

//       {
//         field: "topUpEngineOil",
//         label: "Oli Mesin (SAE 15W-40)",
//         type: "topup",
//       },

//       {
//         field: "topUpTransmission",
//         label: "Transmisi (SAE-30)",
//         type: "topup",
//       },
//       { field: "topUpTandem", label: "Tandem (SAE-30)", type: "topup" },
//       {
//         field: "topUpFinalDrive",
//         label: "Final Drive (SAE-30)",
//         type: "topup",
//       },
//       {
//         field: "topUpBreak",
//         label: "Break (HD-30)",
//         type: "topup",
//       },
//       { field: "topUpCircle", label: "Circle (TURALIK 46)", type: "topup" },

//       {
//         field: "topUpHydraulic",
//         label: "Hidraulik (TURALIK 46)",
//         type: "topup",
//       },
//     ],
//   },
// ];
