import type { ChecklistSection } from "../../../types/interfaces";

export const supoortChecklistDataCrane: ChecklistSection[] = [
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
    title: "Transmission & Clutch",
    fields: [
      {
        field: "transmissionOilLevel",
        label: "Check transmission oil level & leakage",
        type: "select",
      },
      {
        field: "transmissionClutch",
        label: "Check clutch function & clutch plate wear",
        type: "select",
      },
      {
        field: "transmissionUniversalJoint",
        label: "Check universal joint",
        type: "select",
      },
    ],
  },
  {
    title: "Hydraulic System",
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
    ],
  },
  {
    title: "Cabin & Electric",
    fields: [
      {
        field: "cabinCleaning",
        label: "Clean cabin & check panel function",
        type: "select",
      },
      {
        field: "cabinLock",
        label: "Check cabin lock & cabin tilt lock",
        type: "select",
      },
      {
        field: "cabinSteeringLever",
        label: "Check transmission & steering lever",
        type: "select",
      },
      {
        field: "cabinAttachmentLever",
        label: "Check attachment control lever",
        type: "select",
      },
      {
        field: "cabinBallJointTieRod",
        label: "Check ball joint tie rod",
        type: "select",
      },
      {
        field: "cabinBallJointDrakLink",
        label: "Check ball joint drag link",
        type: "select",
      },
      {
        field: "cabinAcBlower",
        label: "Check AC / Blower",
        type: "select",
      },
      {
        field: "cabinSwitchFunction",
        label: "Check switch function",
        type: "select",
      },
      {
        field: "cabinLampFunction",
        label: "Check all lamps & rotary lamp",
        type: "select",
      },
      {
        field: "cabinBattery",
        label: "Check battery & connection condition",
        type: "select",
      },
      {
        field: "cabinSafetyBelt",
        label: "Check safety belt",
        type: "select",
      },
      {
        field: "cabinApar",
        label: "Check Fire Extinguisher (APAR)",
        type: "select",
      },
    ],
  },
  {
    title: "Front Axle, Rear Axle & Brakes",
    fields: [
      {
        field: "axleDifferentialOil",
        label: "Check differential oil level & leakage",
        type: "select",
      },
      {
        field: "axleLockCabin",
        label: "Check cabin lock & cabin tilt lock",
        type: "select",
      },
      {
        field: "axlePinSpring",
        label: "Check & lubricate spring pin, steering linkage & trunnion",
        type: "select",
      },
      {
        field: "axleTorqueRod",
        label: "Check mounting & rubber torque rod",
        type: "select",
      },
      {
        field: "axleTyreBrake",
        label: "Check tires & brake function",
        type: "select",
      },
      {
        field: "axleSpringUBolt",
        label: "Check spring & U-Bolt",
        type: "select",
      },
      {
        field: "axleBallJointTieRod",
        label: "Check ball joint tie rod",
        type: "select",
      },
      {
        field: "axleBallJointDrakLink",
        label: "Check ball joint drag link",
        type: "select",
      },
      {
        field: "axleShockAbsorber",
        label: "Check shock absorber",
        type: "select",
      },
      {
        field: "axleBoltTyre",
        label: "Check wheel bolts",
        type: "select",
      },
      {
        field: "axleHollowSpring",
        label: "Check rubber hollow spring",
        type: "select",
      },
    ],
  },
  {
    title: "Crane Compartment",
    fields: [
      {
        field: "craneShackleRope",
        label: "Check shackle rope wear",
        type: "select",
      },
      {
        field: "craneRopeWire",
        label: "Check wire rope",
        type: "select",
      },
      {
        field: "craneSafetyDevice",
        label: "Check wire rope safety device",
        type: "select",
      },
      {
        field: "craneWireTerminal",
        label: "Check wire rope terminal fitting",
        type: "select",
      },
      {
        field: "craneRopeStretch",
        label: "Check for stretched wire rope",
        type: "select",
      },
      {
        field: "craneHookBlock",
        label: "Check hook & block",
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
        label: "Transmission Oil (80W-90)",
        type: "topup",
      },
      {
        field: "topUpDifferential",
        label: "Differential Oil (85W-140)",
        type: "topup",
      },
      {
        field: "topUpSteering",
        label: "Power Steering Oil (ATF 220)",
        type: "topup",
      },
      {
        field: "topUpHydraulic",
        label: "Hydraulic Oil (TELLUS 46)",
        type: "topup",
      },
    ],
  },
];
