import type { ChecklistSection } from "../../../types/interfaces";

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
    ],
  },
  {
    title: "Attachment",
    fields: [
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
    ],
  },
];
