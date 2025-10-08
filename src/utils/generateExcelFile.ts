// src/lib/excel-layouts/excel-layout-generator.ts
import * as ExcelJS from "exceljs";
import { Buffer } from "buffer";

// src/lib/excel-layouts/track-checklist-data.ts

interface ChecklistItem {
  label: string;
  field: string; // Nama field di object trackDetails
  type: "result" | "temp" | "topup"; // Tipe item
}

interface ChecklistSection {
  title: string;
  fields: ChecklistItem[];
}

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
export const trackChecklistDataSmallPC: ChecklistSection[] = [
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
      { label: "Coolant", field: "topUpCoolant", type: "topup" },
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
export const trackChecklistDataBulldozer: ChecklistSection[] = [
  {
    // A. Engine System (No. 1-7 di gambar)
    title: "Mesin (Engine)",
    fields: [
      {
        field: "engineOilLevelLeakage",
        label: "Check Level & Kebocoran Oil Engine",
        type: "result",
      }, // 1
      {
        field: "engineCoolantLevelLeakage",
        label: "Check Kebocoran Cooling System",
        type: "result",
      }, // 2 (Menggunakan field serupa dari PC)
      {
        field: "engineFuelSystemLeakage",
        label: "Check Kebocoran Fuel System",
        type: "result",
      }, // 3
      {
        field: "engineBelts",
        label: "Check All Clamp Air Pipe & Fan Belt",
        type: "result",
      }, // 4 (Menggunakan field 'engineBelts' dari PC)
      {
        field: "engineIntakeClamps",
        label: "Check All Clamp Air Pipe (Check Clamp Kendor)",
        type: "result",
      }, // 5 (Menggunakan field 'engineIntakeClamps' dari PC)
      {
        field: "engineExhaustLeakage",
        label: "Check Kebocoran Exhaust Manifold dan Mufler",
        type: "result",
      }, // 6
      {
        field: "engineOperationalSound",
        label: "Check Operasional Engine dari Kelainan Bunyi, Low Power",
        type: "result",
      }, // 7
    ],
  },
  {
    // B. Power Train (No. 8-13 di gambar)
    title: "Power Train",
    fields: [
      {
        field: "powertrainTransmissionOil",
        label: "Check Level dan Kebocoran Oil Transmisi",
        type: "result",
      }, // 8
      {
        field: "powertrainTorqueConverterOil",
        label: "Check Level dan Kebocoran Oil Torque Converter",
        type: "result",
      }, // 9
      {
        field: "powertrainFinalDriveOil",
        label: "Check Level dan Kebocoran Oil Final Drive",
        type: "result",
      }, // 10
      {
        field: "powertrainDifferentialOil",
        label: "Check Level dan Kebocoran Oil Differensial",
        type: "result",
      }, // 11
      {
        field: "powertrainBrakeOperation",
        label: "Check Pengoperasian dan Brake Pressure",
        type: "result",
      }, // 12
      {
        field: "powertrainPropellerShaft",
        label: "Check Propeller Shaft Utama dan Tambahan",
        type: "result",
      }, // 13
    ],
  },
  {
    // C. Hydraulic System (No. 14-20 di gambar)
    title: "Sistem Hidraulik",
    fields: [
      {
        field: "hydraulicOilLevel",
        label: "Check Level Oil Hydraulic",
        type: "result",
      }, // 14
      {
        field: "hydraulicSystemLeakage",
        label: "Check Kebocoran Hydraulic System dan Control Valve",
        type: "result",
      }, // 15
      {
        field: "hydraulicHoseCondition",
        label: "Check All Condition Hose & Rubbing",
        type: "result",
      }, // 16
      {
        field: "hydraulicCylinderLiftBlade",
        label:
          "Check Condition Cylinder Lift Blade (Kebocoran, Kerusakan, Keausan Pin & Bearing)",
        type: "result",
      }, // 17
      {
        field: "hydraulicCylinderTiltBlade",
        label:
          "Check Condition Cylinder Tilt Blade (Kebocoran, Kerusakan, Keausan Pin & Bearing)",
        type: "result",
      }, // 18
      {
        field: "hydraulicCylinderLiftRipper",
        label:
          "Check Condition Cylinder Lift Ripper (Kebocoran, Kerusakan, Keausan Pin & Bearing)",
        type: "result",
      }, // 19
      {
        field: "hydraulicCylinderTiltRipper",
        label:
          "Check Condition Cylinder Tilt Ripper (Kebocoran, Kerusakan, Keausan Pin & Bearing)",
        type: "result",
      }, // 20
    ],
  },
  {
    // D. Structure/Frame/Autolube (No. 21-37 di gambar)
    title: "Struktur/Rangka/Autolube",
    fields: [
      {
        field: "structureAutolube",
        label: "Check All Condition Point Grease pada Sistem Autolube",
        type: "result",
      }, // 21
      {
        field: "structureEqualizerBarSeal",
        label: "Check Seal Equalizer Bar",
        type: "result",
      }, // 22
      {
        field: "structurePivotShaftLeakage",
        label: "Check Kebocoran Oil Pivot Shaft",
        type: "result",
      }, // 23
      {
        field: "structureFrameCracks",
        label: "Check All Bagian Frame dari Keretakan",
        type: "result",
      }, // 24
      {
        field: "structureTrackLinkBushing",
        label: "Check Bushing Track Link",
        type: "result",
      }, // 25
      {
        field: "structureUndercarriageBolt",
        label: "Check Bolt Undercarriage",
        type: "result",
      }, // 26
      {
        field: "structureTrackTension",
        label: "Check Kekencangan Track",
        type: "result",
      }, // 27
      {
        field: "structureRipperFrame",
        label: "Check Frame dan Tempat Dudukan Ripper",
        type: "result",
      }, // 28
      {
        field: "structureBogglePivot",
        label: "Check Boggle Pivot Pin dan Pads dari Kerusakan",
        type: "result",
      }, // 29
      {
        field: "structureMasterLinkBolt",
        label: "Check Periksa Bolt Master Link",
        type: "result",
      }, // 30
      {
        field: "structureIdlerMountingBolt",
        label: "Check Bolt Dudukan Idler",
        type: "result",
      }, // 31
      {
        field: "structureEqualizerBarBearing",
        label: "Check Equalizer Bar Bearing",
        type: "result",
      }, // 32
      {
        field: "structureBladeMountingPin",
        label: "Check Blade Mounting Pin dan Retainer",
        type: "result",
      }, // 33
      {
        field: "structureCuttingEdge",
        label: "Check Condition Cutting Edge",
        type: "result",
      }, // 34
      {
        field: "structureEndBit",
        label: "Check Condition End Bit",
        type: "result",
      }, // 35
      {
        field: "structureCarrieRoller",
        label: "Check Carrie Roller",
        type: "result",
      }, // 36
      {
        field: "structureRipperPoint",
        label: "Check Condition Point Ripper",
        type: "result",
      }, // 37
    ],
  },
  {
    // E. Electrical System (No. 38-45 di gambar)
    title: "Sistem Kelistrikan",
    fields: [
      {
        field: "electricalBatteryMounting",
        label: "Check Mounting Battery",
        type: "result",
      }, // 38
      {
        field: "electricalBatteryElectrolyte",
        label: "Check Level Air Elektrolit Battery",
        type: "result",
      }, // 39
      {
        field: "electricalTerminalCleaning",
        label: "Check & Cleaning Terminal Battery dengan Corrosion Remover",
        type: "result",
      }, // 40
      {
        field: "electricalConnectorCleaning",
        label:
          "Check & Cleaning Cable Connector Battery dengan Corrosion Remover",
        type: "result",
      }, // 41
      {
        field: "electricalLamps",
        label: "Check All Lamp Penerangan Berfungsi dengan Baik",
        type: "result",
      }, // 42
      {
        field: "electricalIsolationSwitch",
        label: "Check Isolation Switch & Emergency Stop",
        type: "result",
      }, // 43
      {
        field: "electricalGaugePanel",
        label: "Check All Gauge dan Control Panel Indicator",
        type: "result",
      }, // 44
      {
        field: "electricalBackupAlarm",
        label: "Check Back Up Alarm",
        type: "result",
      }, // 45
    ],
  },
  {
    // G. Add Oil (Bottom section di gambar)
    title: "Penambahan Oli",
    fields: [
      { field: "topUpCoolant", label: "Coolant", type: "topup" },
      { field: "topUpEngine", label: "Engine (15W-40)", type: "topup" },
      {
        field: "topUpHydraulic",
        label: "Hydraulic (TURALIK 46)",
        type: "topup",
      },
      {
        field: "topUpTransmission",
        label: "Transmisi (HD 30)",
        type: "topup",
      },
      { field: "topUpFinalDrive", label: "Final Drive (HD 30)", type: "topup" },
    ],
  },
];
export const wheelChecklistDataDumpTruck: ChecklistSection[] = [
  {
    title: "A. Engine System", // Item 1-6
    fields: [
      {
        field: "engineOilLevel",
        label: "Check engine oil level & any leakage",
        type: "result",
      },
      {
        field: "engineMounting",
        label: "Check engine mounting & fitting parts",
        type: "result",
      },
      {
        field: "engineCoolantLevel",
        label: "Check water coolant level & any lekage",
        type: "result",
      },
      {
        field: "engineFuelSystemLeakage",
        label: "Check fuel system & any leakage",
        type: "result",
      },
      {
        field: "engineBeltTension",
        label: "Check all -belt tension & related parts",
        type: "result",
      },
      {
        field: "engineAirIntake",
        label: "Check air intake & exhaust connection",
        type: "result",
      },
    ],
  },
  {
    title: "B. Transmission & Clutch", // Item 7-9
    fields: [
      {
        field: "powertrainTransmissionOilLevel",
        label: "Check transmission oil level and any leakage",
        type: "result",
      },
      {
        field: "powertrainClutchFunction",
        label: "Check Clutch Function & Wear Pad Clutch",
        type: "result",
      },
      {
        field: "powertrainUniversalJoint",
        label: "Check Universal Joint & Lubricate",
        type: "result",
      },
    ],
  },
  {
    title: "C. Hydraulic System", // Item 10-14
    fields: [
      {
        field: "hydraulicOilLevel",
        label: "Check hydraulic oil level",
        type: "result",
      },
      {
        field: "hydraulicSystemLeakage",
        label: "Check hydraulic cylinder & connection condition",
        type: "result",
      }, // Di sini diberi label umum
      {
        field: "hydraulicPumpLeakage",
        label:
          "Check any leakage from Pump, Motor, PTO, Hose/ piping connection",
        type: "result",
      },
      {
        field: "hydraulicControlValveLeakage",
        label: "Check leak's from control valve",
        type: "result",
      },
    ],
  },
  {
    title: "D. Cabin & Electric", // Item 15-28
    fields: [
      {
        field: "cabinCleaning",
        label: "Cleaning cabin & check panel Function",
        type: "result",
      }, // 15
      {
        field: "cabinLock",
        label: "Check lock cabin & lock tilt cabin",
        type: "result",
      }, // 16
      {
        field: "cabinSeatBelt",
        label: "Check Seat & Safety Belt",
        type: "result",
      }, // 17
      {
        field: "cabinControlLever",
        label: "Check Transmissi & Steering/Travel Control Lever Function",
        type: "result",
      }, // 18
      {
        field: "cabinAttachmentLever",
        label: "Check Attachment Control Lever",
        type: "result",
      }, // 19
      { field: "acBlower", label: "Check AC / Blower", type: "result" }, // 20
      { field: "cabinMirror", label: "Check mirror condition", type: "result" }, // 20
      {
        field: "cabinSwitchFunction",
        label: "Check switch function",
        type: "result",
      }, // 21
      { field: "cabinWiper", label: "Check wiper function", type: "result" }, // 22
      { field: "cabinHorn", label: "Check horn function", type: "result" }, // 23
      {
        field: "cabinLamps",
        label: "Check all lamp function & Rotary lamp",
        type: "result",
      }, // 24
      {
        field: "cabinBatteryConnection",
        label: "Check Battery & connection condition",
        type: "result",
      }, // 25
      {
        field: "cabinRadioComm",
        label: "Check Radio Communication",
        type: "result",
      }, // 26
      {
        field: "cabinBrakeFunction",
        label: "Check all brake function",
        type: "result",
      }, // 27
      {
        field: "cabinEmergencyStop",
        label: "Check Emergency Stop function",
        type: "result",
      }, // 28
      {
        field: "reverseCamera",
        label: "Check Reverse Camera",
        type: "result",
      }, // 28
      {
        field: "checkMDVR",
        label: "Check MDVR",
        type: "result",
      }, // 28
      {
        field: "apar",
        label: "Check APAR",
        type: "result",
      }, // 28
    ],
  },
  {
    title: "E. Front Axle, Rear Axle & Brakes", // Item 29-37
    fields: [
      {
        field: "structureDriveAxleOilLevel",
        label: "Check oil level in the drive axle and any leak",
        type: "result",
      }, // 29
      {
        field: "structurePinSpringSteeringTrunion", // Diambil dari label: Pin Spring, Steering linkage & Trunion
        label: "Check & lubricate Pin Spring, Steering likage & Trunion",
        type: "result",
      }, // 30
      {
        field: "structureMountingRubberTorqueRod", // Diambil dari label: Mounting & Rubber Torque Rod
        label: "Check Mounting & Rubber Torque Rod",
        type: "result",
      }, // 31
      {
        field: "structureSpringUBolt", // Diambil dari label: Spring & U Bolt
        label: "Check Spring & U Bolt",
        type: "result",
      }, // 32
      {
        field: "structureVStayFrontRear",
        label: "Check V Stay Front & Rear",
        type: "result",
      }, // 33
      {
        field: "structureBallJointTieRod", // Diambil dari label: ball joint tie rod
        label: "Check ball joint tie rod",
        type: "result",
      }, // 34
      {
        field: "structureBallJointDragLink", // Diambil dari label: ball joint drag link
        label: "Check ball joint drag link",
        type: "result",
      }, // 35
      {
        field: "structureShockAbsorber", // Diambil dari label: Shock Absorber
        label: "Check Shock Absorber",
        type: "result",
      }, // 36
      {
        field: "structureTyreBoltPressure", // Diambil dari label: Tyre, Bolt Tyre & Tyre Pressure
        label: "Check Tyre, Bolt Tyre & Tyre Pressure",
        type: "result",
      }, // 37
      {
        field: "structureRubberHollowspring", // Diambil dari label: Rubber Hollowspring
        label: "Check Rubber Hollowspring",
        type: "result",
      },
      // NOTE: Item berikut adalah bagian dari Attachment, Cabin, atau Grease.
      // Field fields yang baru dibuat agar tidak tumpang tindih.
      {
        field: "electricalBackupAlarm", // Check Back Up Alarm (Lebih baik ada di Electrical)
        label: "Check Back Up Alarm",
        type: "result",
      },
      {
        field: "attachmentDumpBodyVessel", // Check Dump Body, Pin, Pad, Stabilizer, tail gate & vesel
        label: "Check Dump Body, Pin, Pad, Stabilizer, tail gate & vesel",
        type: "result",
      },
      {
        field: "attachmentSafetyDumpFunction", // Check Safety Dump Function
        label: "Check Safety Dump Function",
        type: "result",
      },
      {
        field: "greaseCentralGrease", // Check Cental Grease
        label: "Check Cental Grease",
        type: "result",
      },
      {
        field: "greaseAllPointsArea", // Check All Greasing Point Area
        label: "Check All Greasing Point Area",
        type: "result",
      },
    ],
  },
  {
    title: "F. Top-Up Lubricant & Coolant", // Item Add Oil
    fields: [
      { field: "coolant", label: "coolant", type: "topup" },
      { field: "topUpEngine", label: "Engine (15W-40)", type: "topup" },
      {
        field: "topUpHydraulic",
        label: "Hydraulic (TURALIX 46)",
        type: "topup",
      },
      {
        field: "topUpTransmission",
        label: "Transmission (85W-140)",
        type: "topup",
      },
      {
        field: "topUpDifferential",
        label: "Differential (85W-140)",
        type: "topup",
      },
      {
        field: "topUpFinalDrive",
        label: "Final Drive (85W-140)",
        type: "topup",
      },
      { field: "topUpCoolant", label: "Coolant", type: "topup" },
    ],
  },
];
const getTrackChecklistData = (type: string) => {
  switch (type) {
    case "BigDigger":
      return trackChecklistDataBigDigger;
    case "SmallPC":
      return trackChecklistDataSmallPC;
    case "Bulldozer":
      return trackChecklistDataBulldozer;
    case "DumpTruck":
      return wheelChecklistDataDumpTruck;
    default:
      return [];
  }
};
const getWheelChecklistData = (type: string) => {
  switch (type) {
    case "DumpTruck":
      return wheelChecklistDataDumpTruck;
    default:
      return [];
  }
};
// --- HELPER UNIVERSAL (Untuk semua layout) ---

// Style Definitions
const thinBorderStyle: ExcelJS.BorderStyle = "thin";
const allBorders: Partial<ExcelJS.Borders> = {
  top: { style: thinBorderStyle },
  bottom: { style: thinBorderStyle },
  left: { style: thinBorderStyle },
  right: { style: thinBorderStyle },
};
const sectionFill = {
  type: "pattern",
  pattern: "solid",
  fgColor: { argb: "DDEBF7" },
};

// --- TIPE FUNGSI LAYOUT ---
type ExcelLayoutFunction = (worksheet: ExcelJS.Worksheet, data: any) => number;

// --- STATE TEMPORARY (Untuk nomor baris dan item) ---
let globalRow = 1;
let globalItemNo = 0;
const N = () => ++globalItemNo;

// --- HELPER FUNCTION UNTUK MEMBUAT BARIS ---

// Helper untuk menambahkan item checklist non-suhu/topup (Condition di G)
const addItem = (
  worksheet: ExcelJS.Worksheet,
  label: string,
  value: string
) => {
  let row = worksheet.getRow(globalRow);
  worksheet.mergeCells(`B${globalRow}:F${globalRow}`);

  row.getCell("A").value = N();
  row.getCell("B").value = label;
  row.getCell("G").value = value;
  row.getCell("G").alignment = { horizontal: "left" };

  row.eachCell({ includeEmpty: true }, (cell) => {
    cell.border = allBorders;
  });
  globalRow++;
};

// Helper untuk menambahkan item suhu (RH/LH/Delta di E:F, Status di G)
const addTempItem = (
  worksheet: ExcelJS.Worksheet,
  label: string,
  rhValue: string,
  lhValue: string,
  deltaTValue: string,
  resultValue: string
) => {
  let row = worksheet.getRow(globalRow);

  // Label di B:D
  worksheet.mergeCells(`B${globalRow}:D${globalRow}`);

  // Nilai Suhu di E:F
  worksheet.mergeCells(`E${globalRow}:F${globalRow}`);

  row.getCell("A").value = N();
  row.getCell("B").value = label;

  row.getCell(
    "E"
  ).value = `RH: ${rhValue} °C | LH: ${lhValue} °C | ΔT: ${deltaTValue} °C`;

  // Status Hasil di G
  row.getCell("G").value = resultValue;

  row.eachCell({ includeEmpty: true }, (cell) => {
    cell.border = allBorders;
  });

  row.getCell("E").alignment = { horizontal: "left" };
  row.getCell("G").alignment = { horizontal: "left" };

  globalRow++;
};

// Helper untuk membuat header section
const addSectionHeader = (
  worksheet: ExcelJS.Worksheet,
  title: string,
  fill: any = sectionFill
) => {
  worksheet.mergeCells(`A${globalRow}:G${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = title;
  worksheet.getCell(`A${globalRow}`).font = { bold: true };
  worksheet.getCell(`A${globalRow}`).fill = fill;
  worksheet.getCell(`A${globalRow}`).border = allBorders;
  //   worksheet.getCell("A").alignment = { horizontal: "left" };

  globalRow++;
};

// =========================================================================
// IMPLEMENTASI LAYOUT SPESIFIK (Standard Track)
// =========================================================================

const generateStandardTrackLayout: ExcelLayoutFunction = (worksheet, data) => {
  // Reset nomor item untuk setiap layout
  globalRow = 1;
  globalItemNo = 0;
  const type = data.equipmentGeneralType;
  const td = data.trackDetails || {};

  // --- 2. HEADER TINGKAT ATAS & INFORMASI ---

  // Title
  worksheet.mergeCells(`A${globalRow}:G${globalRow}`);
  worksheet.getCell(
    `A${globalRow}`
  ).value = `DAILY INSPECTION CHECKSHEET (${data.equipmentGeneralType.toUpperCase()})`;
  worksheet.getCell(`A${globalRow}`).font = { bold: true, size: 14 };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "center" };
  globalRow += 2;

  // Info Rows (Header Informasi)
  worksheet.mergeCells(`A${globalRow}:B${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = "Date:";
  worksheet.getCell(`C${globalRow}`).value = data.inspectionDate;
  worksheet.mergeCells(`D${globalRow}:E${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = "SMR:";
  worksheet.getCell(`F${globalRow}`).value = data.smr;
  worksheet.getCell(`F${globalRow}`).alignment = { horizontal: "left" };
  globalRow++;

  worksheet.mergeCells(`A${globalRow}:B${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = "Unit No:";
  worksheet.getCell(`C${globalRow}`).value = data.equipmentId;
  worksheet.mergeCells(`D${globalRow}:E${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = "Mechanic:";
  worksheet.getCell(`F${globalRow}`).value = data.mechanicName;
  globalRow += 2;

  // --- 3. HEADER TABEL CHECKLIST UTAMA ---
  let currentHeaderRow = worksheet.getRow(globalRow);

  // Menggunakan merge B:F untuk label
  worksheet.mergeCells(`B${globalRow}:F${globalRow}`);

  currentHeaderRow.values = [
    "No.",
    "COMPONENT & ITEM CHECK/OBSERVE",
    "",
    "",
    "",
    "",
    "STATUS",
  ];

  currentHeaderRow.font = { bold: true };
  currentHeaderRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "D3D3D3" },
  };
  currentHeaderRow.eachCell({ includeEmpty: true }, (cell) => {
    cell.border = allBorders;
  });
  globalRow++;
  const trackChecklistData = getTrackChecklistData(type);
  // --- 4. LOOPING UNTUK CHECKLIST ---
  trackChecklistData.forEach((section) => {
    addSectionHeader(worksheet, section.title);

    section.fields.forEach((item) => {
      const resultValue = data.trackDetails[item.field];

      if (item.type === "temp") {
        // Logic khusus untuk item temperatur (hanya 3 item)
        if (item.field === "tempCylBoom") {
          addTempItem(
            worksheet,
            "Cylinder Boom",
            td.tempCylBoomRh,
            td.tempCylBoomLh,
            td.deltaTCylBoom,
            resultValue
          );
        } else if (item.field === "tempCylArm") {
          addTempItem(
            worksheet,
            "Cylinder Arm",
            td.tempCylArmRh,
            td.tempCylArmLh,
            td.deltaTCylArm,
            resultValue
          );
        } else if (item.field === "tempCylBucket") {
          addTempItem(
            worksheet,
            "Cylinder Bucket",
            td.tempCylBucketRh,
            td.tempCylBucketLh,
            td.deltaTCylBucket,
            resultValue
          );
        }
        // Catatan: Item resultEnum pada tempCylBoom/Arm/Bucket sekarang diabaikan di loop addItem biasa
      } else {
        // Logic untuk item result (OK/NG/NA) dan topup
        addItem(worksheet, item.label, resultValue);
      }
    });
  });

  // --- 5. Findings Section ---
  globalRow += 2;
  addSectionHeader(worksheet, "Finding Inspection Unit (Temuan Inspeksi)", {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFC000" },
  });

  let findingsHeaderRow = worksheet.getRow(globalRow);
  worksheet.mergeCells(`B${globalRow}:D${globalRow}`);
  worksheet.mergeCells(`E${globalRow}:F${globalRow}`);
  findingsHeaderRow.values = [
    "No.",
    "Finding Description",
    "",
    "",
    "Open (V)",
    "Close (V)",
    "", // Kolom G kosong di header findings
  ];
  findingsHeaderRow.font = { bold: true };
  globalRow++;

  // Findings Items
  (data.trackDetails?.findings || []).forEach((f: any, index: number) => {
    let row = worksheet.getRow(globalRow);
    worksheet.mergeCells(`B${globalRow}:D${globalRow}`);
    row.getCell("A").value = index + 1;
    row.getCell("B").value = f.description;
    row.getCell("E").value = f.status === "open" ? "✓" : "";
    row.getCell("F").value = f.status === "close" ? "✓" : "";
    row.eachCell({ includeEmpty: true }, (cell) => {
      cell.border = allBorders;
    });
    globalRow++;
  });

  // --- 6. Signature Block ---
  // Note: Signature block merge harus disesuaikan jika ingin sampai kolom G
  globalRow += 2;
  worksheet.mergeCells(`A${globalRow}:C${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = "Checked By (Mechanic)";
  worksheet.mergeCells(`D${globalRow}:F${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = "Approved By (Leader)";
  globalRow++;

  worksheet.mergeCells(`A${globalRow}:C${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = `Name: ${data.mechanicName}`;
  worksheet.mergeCells(`D${globalRow}:F${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = `Name: ${data.approverName}`;
  globalRow++;

  // Kembalikan baris terakhir setelah selesai
  return globalRow;
};
const generateStandardWheelLayout: ExcelLayoutFunction = (worksheet, data) => {
  // Reset nomor item untuk setiap layout
  globalRow = 1;
  globalItemNo = 0;
  const type = data.wheelGeneralType;
  const td = data.trackDetails || {};

  // --- 2. HEADER TINGKAT ATAS & INFORMASI ---

  // Title
  worksheet.mergeCells(`A${globalRow}:G${globalRow}`);
  worksheet.getCell(
    `A${globalRow}`
  ).value = `DAILY INSPECTION CHECKSHEET (${data.wheelGeneralType.toUpperCase()})`;
  worksheet.getCell(`A${globalRow}`).font = { bold: true, size: 14 };
  worksheet.getCell(`A${globalRow}`).alignment = { horizontal: "center" };
  globalRow += 2;

  // Info Rows (Header Informasi)
  worksheet.mergeCells(`A${globalRow}:B${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = "Date:";
  worksheet.getCell(`C${globalRow}`).value = data.inspectionDate;
  worksheet.mergeCells(`D${globalRow}:E${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = "SMR:";
  worksheet.getCell(`F${globalRow}`).value = data.smr;
  worksheet.getCell(`F${globalRow}`).alignment = { horizontal: "left" };
  globalRow++;

  worksheet.mergeCells(`A${globalRow}:B${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = "Unit No:";
  worksheet.getCell(`C${globalRow}`).value = data.equipmentId;
  worksheet.mergeCells(`D${globalRow}:E${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = "Mechanic:";
  worksheet.getCell(`F${globalRow}`).value = data.mechanicName;
  globalRow += 2;

  // --- 3. HEADER TABEL CHECKLIST UTAMA ---
  let currentHeaderRow = worksheet.getRow(globalRow);

  // Menggunakan merge B:F untuk label
  worksheet.mergeCells(`B${globalRow}:F${globalRow}`);

  currentHeaderRow.values = [
    "No.",
    "COMPONENT & ITEM CHECK/OBSERVE",
    "",
    "",
    "",
    "",
    "STATUS",
  ];

  currentHeaderRow.font = { bold: true };
  currentHeaderRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "D3D3D3" },
  };
  currentHeaderRow.eachCell({ includeEmpty: true }, (cell) => {
    cell.border = allBorders;
  });
  globalRow++;
  const wheelChecklistData = getWheelChecklistData(type);
  // --- 4. LOOPING UNTUK CHECKLIST ---
  wheelChecklistData.forEach((section) => {
    addSectionHeader(worksheet, section.title);

    section.fields.forEach((item) => {
      const resultValue = data.wheelDetails[item.field];

      if (item.type === "temp") {
        // Logic khusus untuk item temperatur (hanya 3 item)
        if (item.field === "tempCylBoom") {
          addTempItem(
            worksheet,
            "Cylinder Boom",
            td.tempCylBoomRh,
            td.tempCylBoomLh,
            td.deltaTCylBoom,
            resultValue
          );
        } else if (item.field === "tempCylArm") {
          addTempItem(
            worksheet,
            "Cylinder Arm",
            td.tempCylArmRh,
            td.tempCylArmLh,
            td.deltaTCylArm,
            resultValue
          );
        } else if (item.field === "tempCylBucket") {
          addTempItem(
            worksheet,
            "Cylinder Bucket",
            td.tempCylBucketRh,
            td.tempCylBucketLh,
            td.deltaTCylBucket,
            resultValue
          );
        }
        // Catatan: Item resultEnum pada tempCylBoom/Arm/Bucket sekarang diabaikan di loop addItem biasa
      } else {
        // Logic untuk item result (OK/NG/NA) dan topup
        addItem(worksheet, item.label, resultValue);
      }
    });
  });

  // --- 5. Findings Section ---
  globalRow += 2;
  addSectionHeader(worksheet, "Finding Inspection Unit (Temuan Inspeksi)", {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFC000" },
  });

  let findingsHeaderRow = worksheet.getRow(globalRow);
  worksheet.mergeCells(`B${globalRow}:D${globalRow}`);
  worksheet.mergeCells(`E${globalRow}:F${globalRow}`);
  findingsHeaderRow.values = [
    "No.",
    "Finding Description",
    "",
    "",
    "Open (V)",
    "Close (V)",
    "", // Kolom G kosong di header findings
  ];
  findingsHeaderRow.font = { bold: true };
  globalRow++;

  // Findings Items
  (data.trackDetails?.findings || []).forEach((f: any, index: number) => {
    let row = worksheet.getRow(globalRow);
    worksheet.mergeCells(`B${globalRow}:D${globalRow}`);
    row.getCell("A").value = index + 1;
    row.getCell("B").value = f.description;
    row.getCell("E").value = f.status === "open" ? "✓" : "";
    row.getCell("F").value = f.status === "close" ? "✓" : "";
    row.eachCell({ includeEmpty: true }, (cell) => {
      cell.border = allBorders;
    });
    globalRow++;
  });

  // --- 6. Signature Block ---
  // Note: Signature block merge harus disesuaikan jika ingin sampai kolom G
  globalRow += 2;
  worksheet.mergeCells(`A${globalRow}:C${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = "Checked By (Mechanic)";
  worksheet.mergeCells(`D${globalRow}:F${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = "Approved By (Leader)";
  globalRow++;

  worksheet.mergeCells(`A${globalRow}:C${globalRow}`);
  worksheet.getCell(`A${globalRow}`).value = `Name: ${data.mechanicName}`;
  worksheet.mergeCells(`D${globalRow}:F${globalRow}`);
  worksheet.getCell(`D${globalRow}`).value = `Name: ${data.approverName}`;
  globalRow++;

  // Kembalikan baris terakhir setelah selesai
  return globalRow;
};

// =========================================================================
// DISPATCHER UTAMA
// =========================================================================

// Peta (Mapping) Sub-tipe ke fungsi layout yang sesuai
const excelLayouts: Record<string, ExcelLayoutFunction> = {
  // TRACK
  BigDigger: generateStandardTrackLayout,
  SmallPC: generateStandardTrackLayout,
  Bulldozer: generateStandardTrackLayout,
  DumpTruck: generateStandardWheelLayout,
};

export const generateExcelFile = async (
  rawInspection: any
): Promise<Buffer> => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Inspection Checksheet");
  const data = rawInspection; // Asumsi rawInspection sudah diformat dengan prepareTemplateData

  const type = data.equipmentType;
  let generalType;

  if (type === "track") {
    generalType = data.equipmentGeneralType;
  } else if (type === "wheel") {
    generalType = data.wheelGeneralType;
  }
  // const generalType = data.equipmentGeneralType;

  const LayoutFunction = excelLayouts[generalType];

  if (!LayoutFunction) {
    throw new Error(
      `Excel layout not defined for equipment type: ${generalType}`
    );
  }

  // 1. Konfigurasi Kolom
  worksheet.columns = [
    { key: "A", width: 5 },
    { key: "B", width: 25 },
    { key: "C", width: 15 },
    { key: "D", width: 15 },
    { key: "E", width: 15 },
    { key: "F", width: 15 },
    { key: "G", width: 15 },
  ];

  // 2. Panggil fungsi layout yang spesifik
  LayoutFunction(worksheet, data);

  const buffer = await workbook.xlsx.writeBuffer();
  return buffer as unknown as Buffer;
};
