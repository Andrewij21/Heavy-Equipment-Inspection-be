import type { ChecklistSection } from "../../../types/interfaces";

export const trackChecklistDataBigDigger: ChecklistSection[] = [
  {
    title: "Lower Frame Area Inspection",
    fields: [
      {
        field: "lowerLockOutSwitch",
        label: "Check Lock Out Switch",
        type: "result",
      },
      {
        field: "lowerTrackLinkTension",
        label: "Check Track Link Tension (RH & LH)",
        type: "result",
      },
      {
        field: "lowerTrackShoeBolt",
        label: "Check Track Shoe Bolt (RH & LH)",
        type: "result",
      },
      {
        field: "lowerIdlerRollerGuard",
        label: "Check Condition of Idler, Roller & Wear Guard",
        type: "result",
      },
      {
        field: "lowerUnderGuard",
        label: "Check condition of under guard, cover & counter weight",
        type: "result",
      },
      {
        field: "lowerFinalDriveSprocket",
        label: "Check Condition of Final Drive & Sprocket",
        type: "result",
      },
      {
        field: "lowerSwingCircle",
        label: "Check Swing Circle Condition",
        type: "result",
      },
      {
        field: "lowerAttachmentCondition",
        label: "Check Boom, Arm Stick, Link Bucket & Bucket",
        type: "result",
      },
      {
        field: "lowerDrainWaterSediment",
        label: "Drain water sediment from fuel tank & water separator",
        type: "result",
      },
      {
        field: "lowerHydraulicOilLevel",
        label: "Check Hydraulic oil level (top up if needed)",
        type: "result",
      },
    ],
  },
  {
    title: "Upper Frame Area Inspection",
    fields: [
      {
        field: "upperEngineOilLevel",
        label: "Check engine oil level (Top up if needed)",
        type: "result",
      },
      {
        field: "upperEngineVisual",
        label:
          "Visual inspection of engine condition for leaks, missing bolts, etc.",
        type: "result",
      },
      {
        field: "upperCoolantLevel",
        label: "Check Coolant Level",
        type: "result",
      },
      {
        field: "upperRadiatorEtc",
        label: "Check Radiator, Aftercooler, Hyd oil cooler & connections",
        type: "result",
      },
      {
        field: "upperTurboInlet",
        label: "Check Turbo inlet elbow condition",
        type: "result",
      },
      {
        field: "upperAirCleaner",
        label: "Check Air Cleaner (Top up if needed)",
        type: "result",
      },
      {
        field: "upperCompartmentLeaks",
        label:
          "Check for Oil Leaks, Coolant Leaks & Gas Leaks in the upper engine compartment area",
        type: "result",
      },
      {
        field: "upperHydraulicPump",
        label: "Check Hydraulic Pump & Lines Condition",
        type: "result",
      },
      {
        field: "upperControlValve",
        label: "Check Control Valve & Lines Condition",
        type: "result",
      },
      {
        field: "upperSwingMachineOil",
        label: "Check Swing Machine oil level",
        type: "result",
      },
      {
        field: "upperElectricWiring",
        label: "Check Electrical Wiring",
        type: "result",
      },
      {
        field: "upperBatteryElectrolyte",
        label: "Check Battery Electrolyte level",
        type: "result",
      },
      {
        field: "upperFanBelts",
        label: "Check Fan Belt & AC Compressor Belt",
        type: "result",
      },
      {
        field: "upperCylinderLeaks",
        label: "Check All Cylinders for Oil Leaks",
        type: "result",
      },
      {
        field: "upperCoverHandRail",
        label: "Check All Covers & Hand Rail",
        type: "result",
      },
    ],
  },
  {
    title: "Cylinder Temperature Measurement",
    fields: [
      {
        type: "temperatureGroup",
        label: "Cylinder Boom",
        fieldNames: {
          result: "tempCylBoom",
          rh: "tempCylBoomRh",
          lh: "tempCylBoomLh",
          deltaT: "deltaTCylBoom",
        },
      },
      {
        type: "temperatureGroup",
        label: "Cylinder Arm",
        fieldNames: {
          result: "tempCylArm",
          rh: "tempCylArmRh",
          lh: "tempCylArmLh",
          deltaT: "deltaTCylArm",
        },
      },
      {
        type: "temperatureGroup",
        label: "Cylinder Bucket",
        fieldNames: {
          result: "tempCylBucket",
          rh: "tempCylBucketRh",
          lh: "tempCylBucketLh",
          deltaT: "deltaTCylBucket",
        },
      },
    ],
  },
  // {
  //   title: "Cylinder Temperature Measurement",
  //   fields: [
  //     {
  //       field: "tempCylBoom",
  //       label: "Cylinder Boom",
  //       type: "result",
  //     },
  //     {
  //       field: "tempCylBoomRh",
  //       label: "Cylinder Boom Right (RH)",
  //       type: "temp",
  //     },
  //     {
  //       field: "tempCylBoomLh",
  //       label: "Cylinder Boom Left (LH)",
  //       type: "temp",
  //     },
  //     {
  //       field: "deltaTCylBoom",
  //       label: "Cylinder Boom Temperature Difference (ΔT)",
  //       type: "temp",
  //     },
  //     {
  //       field: "tempCylArm",
  //       label: "Cylinder Arm",
  //       type: "result",
  //     },
  //     {
  //       field: "tempCylArmRh",
  //       label: "Cylinder Arm Right (RH)",
  //       type: "temp",
  //     },
  //     {
  //       field: "tempCylArmLh",
  //       label: "Cylinder Arm Left (LH)",
  //       type: "temp",
  //     },
  //     {
  //       field: "deltaTCylArm",
  //       label: "Cylinder Arm Temperature Difference (ΔT)",
  //       type: "temp",
  //     },
  //     {
  //       field: "tempCylBucket",
  //       label: "Cylinder Bucket",
  //       type: "result",
  //     },
  //     {
  //       field: "tempCylBucketRh",
  //       label: "Cylinder Bucket Right (RH)",
  //       type: "temp",
  //     },
  //     {
  //       field: "tempCylBucketLh",
  //       label: "Cylinder Bucket Left (LH)",
  //       type: "temp",
  //     },
  //     {
  //       field: "deltaTCylBucket",
  //       label: "Cylinder Bucket Temperature Difference (ΔT)",
  //       type: "temp",
  //     },
  //   ],
  // },
  {
    title: "Check Grease Condition On",
    fields: [
      {
        field: "greaseBoomCylFoot",
        label: "Boom Cylinder Foot Pin (2 Points)",
        type: "result",
      },
      {
        field: "greaseBoomFootPin",
        label: "Boom Foot Pin (2 Points)",
        type: "result",
      },
      {
        field: "greaseBoomCylRod",
        label: "Boom Cylinder Rod End (2 Points)",
        type: "result",
      },
      {
        field: "greaseArmCylFoot",
        label: "Arm Cylinder Foot Pin (1 Point)",
        type: "result",
      },
      {
        field: "greaseBoomArmCoupling",
        label: "Boom Arm Coupling Pin (1 Point)",
        type: "result",
      },
      {
        field: "greaseArmCylRod",
        label: "Arm Cylinder Rod End (1 Point)",
        type: "result",
      },
      {
        field: "greaseBucketCylFoot",
        label: "Bucket Cylinder Foot Pin (1 Point)",
        type: "result",
      },
      {
        field: "greaseArmLinkCoupling",
        label: "Arm & Link Coupling Pin (1 Point)",
        type: "result",
      },
      {
        field: "greaseArmBucketCoupling",
        label: "Arm & Bucket Coupling Pin (1 Point)",
        type: "result",
      },
      {
        field: "greaseLinkCoupling",
        label: "Link Coupling Pin (2 Points)",
        type: "result",
      },
      {
        field: "greaseBucketCylRod",
        label: "Bucket Cylinder Rod End (1 Point)",
        type: "result",
      },
      {
        field: "greaseBucketLinkCoupling",
        label: "Bucket & Link Coupling Pin (1 Point)",
        type: "result",
      },
    ],
  },
  {
    title: "Cabin Inspection",
    fields: [
      {
        field: "cabinMonitorPanel",
        label: "Monitor Panel",
        type: "result",
      },
      {
        field: "cabinSwitches",
        label: "Switches",
        type: "result",
      },
      {
        field: "cabinGauge",
        label: "Gauge",
        type: "result",
      },
      {
        field: "cabinControlLever",
        label: "Control Lever & Control Pedal",
        type: "result",
      },
      {
        field: "cabinRadioComm",
        label: "Radio Communication",
        type: "result",
      },
      {
        field: "cabinFmRadio",
        label: "FM Radio",
        type: "result",
      },
      {
        field: "cabinWorkLamp",
        label: "Work Lamp",
        type: "result",
      },
      {
        field: "cabinTravelAlarm",
        label: "Travel Alarm",
        type: "result",
      },
      {
        field: "cabinHorn",
        label: "Horn",
        type: "result",
      },
      {
        field: "cabinMirror",
        label: "Mirror & Bracket",
        type: "result",
      },
      {
        field: "cabinRotaryLamp",
        label: "Rotary Lamp",
        type: "result",
      },
      {
        field: "cabinWiper",
        label: "Wiper & Wiper Blade",
        type: "result",
      },
      {
        field: "cabinWindowWasher",
        label: "Window Washer",
        type: "result",
      },
      {
        field: "cabinAcFunction",
        label: "AC Function & Gas Level",
        type: "result",
      },
      {
        field: "cabinFuseRelay",
        label: "Check Fuse, Relay & Gas Level",
        type: "result",
      },
      {
        field: "cabinOperatorSeat",
        label: "Check Operator Seat Condition",
        type: "result",
      },
    ],
  },
  {
    title: "Safety Equipment Inspection",
    fields: [
      {
        field: "safetyFireExtinguisher",
        label: "Check Fire Extinguisher",
        type: "result",
      },
      {
        field: "safetyEmergencyStop",
        label: "Check Emergency Stop Button Function",
        type: "result",
      },
      {
        field: "safetyCabinRops",
        label: "Check Cabin & ROPS Condition",
        type: "result",
      },
      {
        field: "safetyBelt",
        label: "Check Safety Belt Condition",
        type: "result",
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
        field: "topUpEngine",
        label: "Engine (15W-40)",
        type: "topup",
      },
      {
        field: "topUpHydraulic",
        label: "Hydraulic (TURALIK 46)",
        type: "topup",
      },
      {
        field: "topUpSwingMachinery",
        label: "Swing Machinery (HD 50 / HD 30)",
        type: "topup",
      },
      {
        field: "topUpFinalDrive",
        label: "Final Drive (HD 50 / HD 30)",
        type: "topup",
      },
    ],
  },
];
// export const trackChecklistDataBigDigger: ChecklistSection[] = [
//   {
//     title: "Pemeriksaan Area Rangka Bawah",
//     fields: [
//       {
//         field: "lowerLockOutSwitch",
//         label: "Periksa Saklar Lock Out",
//         type: "result",
//       },
//       {
//         field: "lowerTrackLinkTension",
//         label: "Periksa Ketegangan Track Link Kanan & Kiri",
//         type: "result",
//       },
//       {
//         field: "lowerTrackShoeBolt",
//         label: "Periksa Baut Track Shoe Kanan & Kiri",
//         type: "result",
//       },
//       {
//         field: "lowerIdlerRollerGuard",
//         label: "Periksa Kondisi Idler, Roller & Wear Guard",
//         type: "result",
//       },
//       {
//         field: "lowerUnderGuard",
//         label: "Periksa kondisi under guard, cover & counter weight",
//         type: "result",
//       },
//       {
//         field: "lowerFinalDriveSprocket",
//         label: "Periksa Kondisi Final Drive & Gigi Sprocket",
//         type: "result",
//       },
//       {
//         field: "lowerSwingCircle",
//         label: "Periksa Kondisi Swing Circle",
//         type: "result",
//       },
//       {
//         field: "lowerAttachmentCondition",
//         label: "Periksa Boom, Arm Stick, Link Bucket & Bucket",
//         type: "result",
//       },
//       {
//         field: "lowerDrainWaterSediment",
//         label: "Kuras endapan air dari tangki bahan bakar & water separator",
//         type: "result",
//       },
//       {
//         field: "lowerHydraulicOilLevel",
//         label: "Periksa level oli Hidraulik (tambahkan jika perlu)",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "Pemeriksaan Area Rangka Atas",
//     fields: [
//       {
//         field: "upperEngineOilLevel",
//         label: "Periksa level oli mesin (Tambahkan jika perlu)",
//         type: "result",
//       },
//       {
//         field: "upperEngineVisual",
//         label:
//           "Pemeriksaan Visual kondisi mesin dari kebocoran, baut hilang, dll",
//         type: "result",
//       },
//       {
//         field: "upperCoolantLevel",
//         label: "Periksa Level Coolant",
//         type: "result",
//       },
//       {
//         field: "upperRadiatorEtc",
//         label: "Periksa Radiator, Aftercooler, Hdy oil cooler & koneksi",
//         type: "result",
//       },
//       {
//         field: "upperTurboInlet",
//         label: "Periksa Kondisi siku inlet turbo",
//         type: "result",
//       },
//       {
//         field: "upperAirCleaner",
//         label: "Periksa Air Cleaner (Tambahkan jika perlu)",
//         type: "result",
//       },
//       {
//         field: "upperCompartmentLeaks",
//         label:
//           "Periksa Kebocoran Oli, Kebocoran Coolant & Kebocoran Gas pada area kompartemen mesin atas",
//         type: "result",
//       },
//       {
//         field: "upperHydraulicPump",
//         label: "Periksa Kondisi Pompa Hidraulik & Saluran",
//         type: "result",
//       },
//       {
//         field: "upperControlValve",
//         label: "Periksa Kondisi Control Valve & Saluran",
//         type: "result",
//       },
//       {
//         field: "upperSwingMachineOil",
//         label: "Periksa level oli Swing Machine",
//         type: "result",
//       },
//       {
//         field: "upperElectricWiring",
//         label: "Periksa Pengkabelan Listrik",
//         type: "result",
//       },
//       {
//         field: "upperBatteryElectrolyte",
//         label: "Periksa level Elektrolit Baterai",
//         type: "result",
//       },
//       {
//         field: "upperFanBelts",
//         label: "Periksa Fan Belt, & AC Compresor Belt",
//         type: "result",
//       },
//       {
//         field: "upperCylinderLeaks",
//         label: "Periksa Semua Silinder dari Kebocoran Oli",
//         type: "result",
//       },
//       {
//         field: "upperCoverHandRail",
//         label: "Periksa Semua Cover & Hand Rail",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "Pengukuran Temperatur Silinder",
//     fields: [
//       {
//         type: "temperatureGroup",
//         label: "Cylinder Boom",
//         // Kelompokkan semua nama field yang berhubungan di sini
//         fieldNames: {
//           result: "tempCylBoom",
//           rh: "tempCylBoomRh",
//           lh: "tempCylBoomLh",
//           deltaT: "deltaTCylBoom",
//         },
//       },
//       {
//         type: "temperatureGroup",
//         label: "Cylinder Arm",
//         fieldNames: {
//           result: "tempCylArm",
//           rh: "tempCylArmRh",
//           lh: "tempCylArmLh",
//           deltaT: "deltaTCylArm",
//         },
//       },
//       {
//         type: "temperatureGroup",
//         label: "Cylinder Bucket",
//         fieldNames: {
//           result: "tempCylBucket",
//           rh: "tempCylBucketRh",
//           lh: "tempCylBucketLh",
//           deltaT: "deltaTCylBucket",
//         },
//       },
//     ],
//   },
//   {
//     title: "Periksa Kondisi Grease Pada",
//     fields: [
//       {
//         field: "greaseBoomCylFoot",
//         label: "Pin Kaki Silinder Boom (2 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseBoomFootPin",
//         label: "Pin Kaki Boom (2 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseBoomCylRod",
//         label: "Ujung Rod Silinder Boom (2 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseArmCylFoot",
//         label: "Pin Kaki Silinder Arm (1 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseBoomArmCoupling",
//         label: "Pin Kopling Boom Arm (1 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseArmCylRod",
//         label: "Ujung Rod Silinder Arm (1 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseBucketCylFoot",
//         label: "Pin Kaki Silinder Bucket (1 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseArmLinkCoupling",
//         label: "Pin Kopling Arm & Link (1 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseArmBucketCoupling",
//         label: "Pin Kopling Arm & Bucket (1 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseLinkCoupling",
//         label: "Pin Kopling Link (2 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseBucketCylRod",
//         label: "Ujung Rod Silinder Bucket (1 Titik)",
//         type: "result",
//       },
//       {
//         field: "greaseBucketLinkCoupling",
//         label: "Pin Kopling Bucket & Link (1 Titik)",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "Pemeriksaan Cabin",
//     fields: [
//       { field: "cabinMonitorPanel", label: "Monitor Panel", type: "result" },
//       { field: "cabinSwitches", label: "Saklar", type: "result" },
//       { field: "cabinGauge", label: "Gauge (Pengukur)", type: "result" },
//       {
//         field: "cabinControlLever",
//         label: "Tuas Kontrol & Pedal Kontrol",
//         type: "result",
//       },
//       { field: "cabinRadioComm", label: "Radio Komunikasi", type: "result" },
//       { field: "cabinFmRadio", label: "Radio FM", type: "result" },
//       { field: "cabinWorkLamp", label: "Lampu Kerja", type: "result" },
//       { field: "cabinTravelAlarm", label: "Travel Alarm", type: "result" },
//       { field: "cabinHorn", label: "Klakson", type: "result" },
//       { field: "cabinMirror", label: "Cermin & Braket", type: "result" },
//       {
//         field: "cabinRotaryLamp",
//         label: "Lampu Putar (Rotary Lamp)",
//         type: "result",
//       },
//       { field: "cabinWiper", label: "Wiper & Bilah Kaca", type: "result" },
//       { field: "cabinWindowWasher", label: "Pencuci Jendela", type: "result" },
//       {
//         field: "cabinAcFunction",
//         label: "Fungsi AC & Level Gas",
//         type: "result",
//       },
//       {
//         field: "cabinFuseRelay",
//         label: "Periksa Sekering, Relay & Level Gas",
//         type: "result",
//       },
//       {
//         field: "cabinOperatorSeat",
//         label: "Periksa Kondisi Kursi Operator",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "Pemeriksaan Alat Keselamatan",
//     fields: [
//       {
//         field: "safetyFireExtinguisher",
//         label: "Periksa Alat Pemadam Api Ringan (APAR)",
//         type: "result",
//       },
//       {
//         field: "safetyEmergencyStop",
//         label: "Periksa Fungsi Tombol Emergency Stop",
//         type: "result",
//       },
//       {
//         field: "safetyCabinRops",
//         label: "Periksa Kondisi Cabin & ROPS",
//         type: "result",
//       },
//       {
//         field: "safetyBelt",
//         label: "Periksa Kondisi Safety Belt",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "Penambahan Oli",
//     fields: [
//       {
//         field: "topUpCoolant",
//         label: "Coolant",
//         type: "topup",
//       },
//       {
//         field: "topUpEngine",
//         label: "Mesin (15W-40)",
//         type: "topup",
//       },
//       {
//         field: "topUpHydraulic",
//         label: "Hidraulik (TURALIX 46)",
//         type: "topup",
//       },
//       {
//         field: "topUpSwingMachinery",
//         label: "Mekanisme Putar (Swing Machinary) (HD 50 / HD 30)",
//         type: "topup",
//       },
//       {
//         field: "topUpFinalDrive",
//         label: "Final Drive (HD 50 / HD 30)",
//         type: "topup",
//       },
//     ],
//   },
// ];
