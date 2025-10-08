import type { ChecklistSection } from "../../../types/interfaces";

export const trackChecklistDataBigDigger: ChecklistSection[] = [
  {
    title: "Lower Frame Area Check (Pemeriksaan Area Rangka Bawah)",
    fields: [
      {
        label: "Check Lock Out Switch",
        field: "lowerLockOutSwitch",
        type: "result",
      },
      {
        label: "Check RH & LH Track Link Tension",
        field: "lowerTrackLinkTension",
        type: "result",
      },
      {
        label: "Check RH & LH Track Shoe Bolt",
        field: "lowerTrackShoeBolt",
        type: "result",
      },
      {
        label: "Check Condition of idler, Roller & Wear Guard",
        field: "lowerIdlerRollerGuard",
        type: "result",
      },
      {
        label: "Check condition under guard, cover & counter weight",
        field: "lowerUnderGuard",
        type: "result",
      },
      {
        label: "Check Final Drive & Teeth Sprocket condition",
        field: "lowerFinalDriveSprocket",
        type: "result",
      },
      {
        label: "Check Swing Circle condition",
        field: "lowerSwingCircle",
        type: "result",
      },
      {
        label: "Check Boom, Arm Stick, Link Bucket & Bucket",
        field: "lowerAttachmentCondition",
        type: "result",
      },
      {
        label: "Drain water sediment from fuel tank & water separator",
        field: "lowerDrainWaterSediment",
        type: "result",
      },
      {
        label: "Check Hydraulic oil level",
        field: "lowerHydraulicOilLevel",
        type: "result",
      },
    ],
  },
  {
    title: "Upper Structure Area Check (Pemeriksaan Area Rangka Atas)",
    fields: [
      {
        label: "Check engine oil level",
        field: "upperEngineOilLevel",
        type: "result",
      },
      {
        label: "Visual Check engine condition from: leak, Lost bolt, etc",
        field: "upperEngineVisual",
        type: "result",
      },
      {
        label: "Check Coolant Level",
        field: "upperCoolantLevel",
        type: "result",
      },
      {
        label: "Check Radiator, Aftercooler, Hdy oil cooler & connection",
        field: "upperRadiatorEtc",
        type: "result",
      },
      {
        label: "Check Condition of turbo inlet elbow",
        field: "upperTurboInlet",
        type: "result",
      },
      {
        label: "Check Air Cleaner (add if necessary)",
        field: "upperAirCleaner",
        type: "result",
      },
      {
        label:
          "Check Oil Leaks, Coolant Leak & Gas leak at upper engine compartment area",
        field: "upperCompartmentLeaks",
        type: "result",
      },
      {
        label: "Check Hydraulic Pump & Line Condition",
        field: "upperHydraulicPump",
        type: "result",
      },
      {
        label: "Check Control Valve & Line Condition",
        field: "upperControlValve",
        type: "result",
      },
      {
        label: "Check Swing Machine oil level",
        field: "upperSwingMachineOil",
        type: "result",
      },
      {
        label: "Check Elektrik Wiring",
        field: "upperElectricWiring",
        type: "result",
      },
      {
        label: "Check Battery Electrolit level",
        field: "upperBatteryElectrolyte",
        type: "result",
      },
      {
        label: "Check fan Belt, & AC Compresor Belt",
        field: "upperFanBelts",
        type: "result",
      },
      {
        label: "Check All Cylinder For Oil Leaks",
        field: "upperCylinderLeaks",
        type: "result",
      },
      {
        label: "Check All Cover & Hand Rail",
        field: "upperCoverHandRail",
        type: "result",
      },
    ],
  },
  {
    title: "Measure Cylinder Temperature",
    // Field pengukuran suhu akan dihandle secara khusus di loop
    fields: [
      { label: "Cylinder Boom Status", field: "tempCylBoom", type: "temp" },
      { label: "Cylinder Arm Status", field: "tempCylArm", type: "temp" },
      { label: "Cylinder Bucket Status", field: "tempCylBucket", type: "temp" },
    ],
  },
  {
    title: "Check Grease Condition at (Periksa Kondisi Grease Pada)",
    fields: [
      {
        label: "Boom Cylinder Foot Pin (2 Point)",
        field: "greaseBoomCylFoot",
        type: "result",
      },
      {
        label: "Boom Foot Pin (2 Point)",
        field: "greaseBoomFootPin",
        type: "result",
      },
      {
        label: "Boom Cylinder Rod End (2 Point)",
        field: "greaseBoomCylRod",
        type: "result",
      },
      {
        label: "Arm Cylinder Foot Pin (1 Point)",
        field: "greaseArmCylFoot",
        type: "result",
      },
      {
        label: "Boom Arm Coupling Pin (1 Point)",
        field: "greaseBoomArmCoupling",
        type: "result",
      },
      {
        label: "Arm Cylinder Rod End (1 Point)",
        field: "greaseArmCylRod",
        type: "result",
      },
      {
        label: "Bucket Cylinder Foot Pin (1 Point)",
        field: "greaseBucketCylFoot",
        type: "result",
      },
      {
        label: "Arm & Link Coupling Pin (1 Point)",
        field: "greaseArmLinkCoupling",
        type: "result",
      },
      {
        label: "Arm & Bucket Coupling Pin (1 Point)",
        field: "greaseArmBucketCoupling",
        type: "result",
      },
      {
        label: "Link Coupling Pin (2 Point)",
        field: "greaseLinkCoupling",
        type: "result",
      },
      {
        label: "Bucket Cylinder Rod End (1 Point)",
        field: "greaseBucketCylRod",
        type: "result",
      },
      {
        label: "Bucket & Link Copling Pin (1 Point)",
        field: "greaseBucketLinkCoupling",
        type: "result",
      },
    ],
  },
  {
    title: "Inside Cabin Check (Pemeriksaan Cabin)",
    fields: [
      { label: "Monitor Panel", field: "cabinMonitorPanel", type: "result" },
      { label: "Switches", field: "cabinSwitches", type: "result" },
      { label: "Gauge (Jarum Penunjuk)", field: "cabinGauge", type: "result" },
      {
        label: "Control Lever & Control Pedal",
        field: "cabinControlLever",
        type: "result",
      },
      { label: "Radio Communication", field: "cabinRadioComm", type: "result" },
      { label: "FM Radio", field: "cabinFmRadio", type: "result" },
      { label: "Work Lamp", field: "cabinWorkLamp", type: "result" },
      { label: "Travel alarm", field: "cabinTravelAlarm", type: "result" },
      { label: "Horn (Klakson)", field: "cabinHorn", type: "result" },
      { label: "Mirror & Bracket", field: "cabinMirror", type: "result" },
      { label: "Rotary Lamp", field: "cabinRotaryLamp", type: "result" },
      { label: "Wiper & Blade", field: "cabinWiper", type: "result" },
      { label: "Window Washer", field: "cabinWindowWasher", type: "result" },
      {
        label: "Air Conditoner Function & Gas Level",
        field: "cabinAcFunction",
        type: "result",
      },
      {
        label: "Check Fuse, Relay & Gas Level",
        field: "cabinFuseRelay",
        type: "result",
      },
      {
        label: "Check Operator Seat Condition",
        field: "cabinOperatorSeat",
        type: "result",
      },
    ],
  },
  {
    title: "Safety Function (Pemeriksaan Alat Keselamatan)",
    fields: [
      {
        label: "Check Fire Extinghuiser",
        field: "safetyFireExtinguisher",
        type: "result",
      },
      {
        label: "Check Function Emergancy Stop",
        field: "safetyEmergencyStop",
        type: "result",
      },
      {
        label: "Check Condition of cabin & ROPS",
        field: "safetyCabinRops",
        type: "result",
      },
      {
        label: "Check Safety Belt condition",
        field: "safetyBelt",
        type: "result",
      },
    ],
  },
  {
    title: "Add Oil",
    fields: [
      { label: "Coolant (AF-NACDM)", field: "topUpCoolant", type: "topup" },
      { label: "Engine (15W-40)", field: "topUpEngine", type: "topup" },
      {
        label: "Hydraulic (TURALIK 46)",
        field: "topUpHydraulic",
        type: "topup",
      },
      {
        label: "Swing Machinary (HD 50 / HD 30)",
        field: "topUpSwingMachinery",
        type: "topup",
      },
      {
        label: "Final Drive (HD 50 / HD 30)",
        field: "topUpFinalDrive",
        type: "topup",
      },
    ],
  },
];
