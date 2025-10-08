import type { ChecklistSection } from "../../../types/interfaces";

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
