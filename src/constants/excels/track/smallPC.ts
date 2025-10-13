import type { ChecklistSection } from "../../../types/interfaces";

export const trackChecklistDataSmallPC: ChecklistSection[] = [
  {
    title: "Lower Frame Area Inspection",
    fields: [
      {
        field: "lowerLockOutSwitch",
        label: "Check Lock Out Switch",
        type: "select",
      },
      {
        field: "lowerTrackLinkTension",
        label: "Check Track Link Tension (RH & LH)",
        type: "select",
      },
      {
        field: "lowerTrackShoeBolt",
        label: "Check Track Shoe Bolt (RH & LH)",
        type: "select",
      },
      {
        field: "lowerIdlerRollerGuard",
        label: "Check Condition of Idler, Roller & Wear Guard",
        type: "select",
      },
      {
        field: "lowerUnderGuard",
        label: "Check condition of under guard, cover & counter weight",
        type: "select",
      },
      {
        field: "lowerFinalDriveSprocket",
        label: "Check Condition of Final Drive & Sprocket",
        type: "select",
      },
      {
        field: "lowerSwingCircle",
        label: "Check Swing Circle Condition",
        type: "select",
      },
      {
        field: "lowerAttachmentCondition",
        label: "Check Boom, Arm Stick, Link Bucket & Bucket",
        type: "select",
      },
      {
        field: "lowerDrainWaterSediment",
        label: "Drain water sediment from fuel tank & water separator",
        type: "select",
      },
      {
        field: "lowerHydraulicOilLevel",
        label: "Check Hydraulic oil level (top up if needed)",
        type: "select",
      },
    ],
  },
  {
    title: "Upper Frame Area Inspection",
    fields: [
      {
        field: "upperEngineOilLevel",
        label: "Check engine oil level (Top up if needed)",
        type: "select",
      },
      {
        field: "upperEngineVisual",
        label:
          "Visual inspection of engine condition for leaks, missing bolts, etc.",
        type: "select",
      },
      {
        field: "upperCoolantLevel",
        label: "Check Coolant Level",
        type: "select",
      },
      {
        field: "upperRadiator",
        label: "Check Radiator, Aftercooler, Hyd oil cooler & connections",
        type: "select",
      },
      {
        field: "upperTurboInlet",
        label: "Check Turbo inlet elbow condition",
        type: "select",
      },
      {
        field: "upperAirCleaner",
        label: "Check Air Cleaner (Top up if needed)",
        type: "select",
      },
      {
        field: "upperCompartmentLeaks",
        label:
          "Check for Oil Leaks, Coolant Leaks & Gas Leaks in the upper engine compartment area",
        type: "select",
      },
      {
        field: "upperHydraulicPump",
        label: "Check Hydraulic Pump & Lines Condition",
        type: "select",
      },
      {
        field: "upperControlValve",
        label: "Check Control Valve & Lines Condition",
        type: "select",
      },
      {
        field: "upperSwingMachineOil",
        label: "Check Swing Machine oil level",
        type: "select",
      },
      {
        field: "upperElectricWiring",
        label: "Check Electrical Wiring",
        type: "select",
      },
      {
        field: "upperBatteryElectrolyte",
        label: "Check Battery Electrolyte level",
        type: "select",
      },
      {
        field: "upperFanBelts",
        label: "Check Fan Belt & AC Compressor Belt",
        type: "select",
      },
      {
        field: "upperCylinderLeaks",
        label: "Check All Cylinders for Oil Leaks",
        type: "select",
      },
      {
        field: "upperCoverHandRail",
        label: "Check All Covers & Hand Rail",
        type: "select",
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
    ],
  },
  // {
  //   title: "Cylinder Temperature Measurement",
  //   fields: [
  //     {
  //       field: "tempCylBoom",
  //       label: "Cylinder Boom",
  //       type: "select",
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
  //   ],
  // },
  {
    title: "Check Grease Condition On",
    fields: [
      {
        field: "greaseBoomCylFoot",
        label: "Boom Cylinder Foot Pin (2 Points)",
        type: "select",
      },
      {
        field: "greaseBoomFootPin",
        label: "Boom Foot Pin (2 Points)",
        type: "select",
      },
      {
        field: "greaseBoomCylRod",
        label: "Boom Cylinder Rod End (2 Points)",
        type: "select",
      },
      {
        field: "greaseArmCylFoot",
        label: "Arm Cylinder Foot Pin (1 Point)",
        type: "select",
      },
      {
        field: "greaseBoomArmCoupling",
        label: "Boom Arm Coupling Pin (1 Point)",
        type: "select",
      },
      {
        field: "greaseArmCylRod",
        label: "Arm Cylinder Rod End (1 Point)",
        type: "select",
      },
      {
        field: "greaseBucketCylFoot",
        label: "Bucket Cylinder Foot Pin (1 Point)",
        type: "select",
      },
      {
        field: "greaseArmLinkCoupling",
        label: "Arm & Link Coupling Pin (1 Point)",
        type: "select",
      },
      {
        field: "greaseArmBucketCoupling",
        label: "Arm & Bucket Coupling Pin (1 Point)",
        type: "select",
      },
      {
        field: "greaseLinkCoupling",
        label: "Link Coupling Pin (2 Points)",
        type: "select",
      },
      {
        field: "greaseBucketCylRod",
        label: "Bucket Cylinder Rod End (1 Point)",
        type: "select",
      },
      {
        field: "greaseBucketLinkCoupling",
        label: "Bucket & Link Coupling Pin (1 Point)",
        type: "select",
      },
    ],
  },
  {
    title: "Cabin Inspection",
    fields: [
      {
        field: "cabinMonitorPanel",
        label: "Monitor Panel",
        type: "select",
      },
      {
        field: "cabinSwitches",
        label: "Switches",
        type: "select",
      },
      {
        field: "cabinGauge",
        label: "Gauge",
        type: "select",
      },
      {
        field: "cabinControlLever",
        label: "Control Lever & Control Pedal",
        type: "select",
      },
      {
        field: "cabinRadioComm",
        label: "Radio Communication",
        type: "select",
      },
      {
        field: "cabinFmRadio",
        label: "FM Radio",
        type: "select",
      },
      {
        field: "cabinWorkLamp",
        label: "Work Lamp",
        type: "select",
      },
      {
        field: "cabinTravelAlarm",
        label: "Travel Alarm",
        type: "select",
      },
      {
        field: "cabinHorn",
        label: "Horn",
        type: "select",
      },
      {
        field: "cabinMirror",
        label: "Mirror & Bracket",
        type: "select",
      },
      {
        field: "cabinRotaryLamp",
        label: "Rotary Lamp",
        type: "select",
      },
      {
        field: "cabinWiper",
        label: "Wiper & Wiper Blade",
        type: "select",
      },
      {
        field: "cabinWindowWasher",
        label: "Window Washer",
        type: "select",
      },
      {
        field: "cabinAcFunction",
        label: "AC Function & Gas Level",
        type: "select",
      },
      {
        field: "cabinFuseRelay",
        label: "Check Fuse, Relay & Gas Level",
        type: "select",
      },
      {
        field: "cabinOperatorSeat",
        label: "Check Operator Seat Condition",
        type: "select",
      },
    ],
  },
  {
    title: "Safety Function",
    fields: [
      {
        field: "safetyFireExtinguisher",
        label: "Check Fire Extinguisher",
        type: "select",
      },
      {
        field: "safetyEmergencyStop",
        label: "Check Emergency Stop Button Function",
        type: "select",
      },
      {
        field: "safetyCabinRops",
        label: "Check Cabin & ROPS Condition",
        type: "select",
      },
      {
        field: "safetyBelt",
        label: "Check Safety Belt Condition",
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
        label: "Swing Machinery (HD 30)",
        type: "topup",
      },
      {
        field: "topUpFinalDrive",
        label: "Final Drive (HD 30)",
        type: "topup",
      },
    ],
  },
];
// export const trackChecklistDataSmallPC: ChecklistSection[] = [
//   {
//     title: "Lower Frame Area Check (Pemeriksaan Area Rangka Bawah)",
//     fields: [
//       {
//         label: "Check Lock Out Switch",
//         field: "lowerLockOutSwitch",
//         type: "result",
//       },
//       {
//         label: "Check RH & LH Track Link Tension",
//         field: "lowerTrackLinkTension",
//         type: "result",
//       },
//       {
//         label: "Check RH & LH Track Shoe Bolt",
//         field: "lowerTrackShoeBolt",
//         type: "result",
//       },
//       {
//         label: "Check Condition of idler, Roller & Wear Guard",
//         field: "lowerIdlerRollerGuard",
//         type: "result",
//       },
//       {
//         label: "Check condition under guard, cover & counter weight",
//         field: "lowerUnderGuard",
//         type: "result",
//       },
//       {
//         label: "Check Final Drive & Teeth Sprocket condition",
//         field: "lowerFinalDriveSprocket",
//         type: "result",
//       },
//       {
//         label: "Check Swing Circle condition",
//         field: "lowerSwingCircle",
//         type: "result",
//       },
//       {
//         label: "Check Boom, Arm Stick, Link Bucket & Bucket",
//         field: "lowerAttachmentCondition",
//         type: "result",
//       },
//       {
//         label: "Drain water sediment from fuel tank & water separator",
//         field: "lowerDrainWaterSediment",
//         type: "result",
//       },
//       {
//         label: "Check Hydraulic oil level",
//         field: "lowerHydraulicOilLevel",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "Upper Structure Area Check (Pemeriksaan Area Rangka Atas)",
//     fields: [
//       {
//         label: "Check engine oil level",
//         field: "upperEngineOilLevel",
//         type: "result",
//       },
//       {
//         label: "Visual Check engine condition from: leak, Lost bolt, etc",
//         field: "upperEngineVisual",
//         type: "result",
//       },
//       {
//         label: "Check Coolant Level",
//         field: "upperCoolantLevel",
//         type: "result",
//       },
//       {
//         label: "Check Radiator, Aftercooler, Hdy oil cooler & connection",
//         field: "upperRadiatorEtc",
//         type: "result",
//       },
//       {
//         label: "Check Condition of turbo inlet elbow",
//         field: "upperTurboInlet",
//         type: "result",
//       },
//       {
//         label: "Check Air Cleaner (add if necessary)",
//         field: "upperAirCleaner",
//         type: "result",
//       },
//       {
//         label:
//           "Check Oil Leaks, Coolant Leak & Gas leak at upper engine compartment area",
//         field: "upperCompartmentLeaks",
//         type: "result",
//       },
//       {
//         label: "Check Hydraulic Pump & Line Condition",
//         field: "upperHydraulicPump",
//         type: "result",
//       },
//       {
//         label: "Check Control Valve & Line Condition",
//         field: "upperControlValve",
//         type: "result",
//       },
//       {
//         label: "Check Swing Machine oil level",
//         field: "upperSwingMachineOil",
//         type: "result",
//       },
//       {
//         label: "Check Elektrik Wiring",
//         field: "upperElectricWiring",
//         type: "result",
//       },
//       {
//         label: "Check Battery Electrolit level",
//         field: "upperBatteryElectrolyte",
//         type: "result",
//       },
//       {
//         label: "Check fan Belt, & AC Compresor Belt",
//         field: "upperFanBelts",
//         type: "result",
//       },
//       {
//         label: "Check All Cylinder For Oil Leaks",
//         field: "upperCylinderLeaks",
//         type: "result",
//       },
//       {
//         label: "Check All Cover & Hand Rail",
//         field: "upperCoverHandRail",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "Measure Cylinder Temperature",
//     // Field pengukuran suhu akan dihandle secara khusus di loop
//     fields: [
//       {
//         type: "temperatureGroup",
//         label: "Cylinder Boom",
//         // Kelompokkan semua nama field yang berhubungan di sini
//         fieldfields: {
//           result: "tempCylBoom",
//           rh: "tempCylBoomRh",
//           lh: "tempCylBoomLh",
//           deltaT: "deltaTCylBoom",
//         },
//       },
//     ],
//   },
//   {
//     title: "Check Grease Condition at (Periksa Kondisi Grease Pada)",
//     fields: [
//       {
//         label: "Boom Cylinder Foot Pin (2 Point)",
//         field: "greaseBoomCylFoot",
//         type: "result",
//       },
//       {
//         label: "Boom Foot Pin (2 Point)",
//         field: "greaseBoomFootPin",
//         type: "result",
//       },
//       {
//         label: "Boom Cylinder Rod End (2 Point)",
//         field: "greaseBoomCylRod",
//         type: "result",
//       },
//       {
//         label: "Arm Cylinder Foot Pin (1 Point)",
//         field: "greaseArmCylFoot",
//         type: "result",
//       },
//       {
//         label: "Boom Arm Coupling Pin (1 Point)",
//         field: "greaseBoomArmCoupling",
//         type: "result",
//       },
//       {
//         label: "Arm Cylinder Rod End (1 Point)",
//         field: "greaseArmCylRod",
//         type: "result",
//       },
//       {
//         label: "Bucket Cylinder Foot Pin (1 Point)",
//         field: "greaseBucketCylFoot",
//         type: "result",
//       },
//       {
//         label: "Arm & Link Coupling Pin (1 Point)",
//         field: "greaseArmLinkCoupling",
//         type: "result",
//       },
//       {
//         label: "Arm & Bucket Coupling Pin (1 Point)",
//         field: "greaseArmBucketCoupling",
//         type: "result",
//       },
//       {
//         label: "Link Coupling Pin (2 Point)",
//         field: "greaseLinkCoupling",
//         type: "result",
//       },
//       {
//         label: "Bucket Cylinder Rod End (1 Point)",
//         field: "greaseBucketCylRod",
//         type: "result",
//       },
//       {
//         label: "Bucket & Link Copling Pin (1 Point)",
//         field: "greaseBucketLinkCoupling",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "Inside Cabin Check (Pemeriksaan Cabin)",
//     fields: [
//       { label: "Monitor Panel", field: "cabinMonitorPanel", type: "result" },
//       { label: "Switches", field: "cabinSwitches", type: "result" },
//       { label: "Gauge (Jarum Penunjuk)", field: "cabinGauge", type: "result" },
//       {
//         label: "Control Lever & Control Pedal",
//         field: "cabinControlLever",
//         type: "result",
//       },
//       { label: "Radio Communication", field: "cabinRadioComm", type: "result" },
//       { label: "FM Radio", field: "cabinFmRadio", type: "result" },
//       { label: "Work Lamp", field: "cabinWorkLamp", type: "result" },
//       { label: "Travel alarm", field: "cabinTravelAlarm", type: "result" },
//       { label: "Horn (Klakson)", field: "cabinHorn", type: "result" },
//       { label: "Mirror & Bracket", field: "cabinMirror", type: "result" },
//       { label: "Rotary Lamp", field: "cabinRotaryLamp", type: "result" },
//       { label: "Wiper & Blade", field: "cabinWiper", type: "result" },
//       { label: "Window Washer", field: "cabinWindowWasher", type: "result" },
//       {
//         label: "Air Conditoner Function & Gas Level",
//         field: "cabinAcFunction",
//         type: "result",
//       },
//       {
//         label: "Check Fuse, Relay & Gas Level",
//         field: "cabinFuseRelay",
//         type: "result",
//       },
//       {
//         label: "Check Operator Seat Condition",
//         field: "cabinOperatorSeat",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "Safety Function (Pemeriksaan Alat Keselamatan)",
//     fields: [
//       {
//         label: "Check Fire Extinghuiser",
//         field: "safetyFireExtinguisher",
//         type: "result",
//       },
//       {
//         label: "Check Function Emergancy Stop",
//         field: "safetyEmergencyStop",
//         type: "result",
//       },
//       {
//         label: "Check Condition of cabin & ROPS",
//         field: "safetyCabinRops",
//         type: "result",
//       },
//       {
//         label: "Check Safety Belt condition",
//         field: "safetyBelt",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "Add Oil",
//     fields: [
//       { label: "Coolant", field: "topUpCoolant", type: "topup" },
//       { label: "Engine (15W-40)", field: "topUpEngine", type: "topup" },
//       {
//         label: "Hydraulic (TURALIK 46)",
//         field: "topUpHydraulic",
//         type: "topup",
//       },
//       {
//         label: "Swing Machinary (HD 50 / HD 30)",
//         field: "topUpSwingMachinery",
//         type: "topup",
//       },
//       {
//         label: "Final Drive (HD 50 / HD 30)",
//         field: "topUpFinalDrive",
//         type: "topup",
//       },
//     ],
//   },
// ];
