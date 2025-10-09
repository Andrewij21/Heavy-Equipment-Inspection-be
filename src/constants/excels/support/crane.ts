import type { ChecklistSection } from "../../../types/interfaces";

export const supoortChecklistDataCrane: ChecklistSection[] = [
  {
    title: "A. Mesin",
    fields: [
      {
        field: "engineOilLevel",
        label: "Periksa level oli mesin & kebocoran",
        type: "result",
      },
      {
        field: "engineMounting",
        label: "Periksa dudukan mesin",
        type: "result",
      },
      {
        field: "engineCoolantLevel",
        label: "Periksa level air coolant & kebocoran",
        type: "result",
      },
      {
        field: "engineFuelSystem",
        label: "Periksa sistem bahan bakar & kebocoran",
        type: "result",
      },
      {
        field: "engineBeltTension",
        label: "Periksa ketegangan semua belt & komponen terkait",
        type: "result",
      },
      {
        field: "engineAirIntake",
        label: "Periksa saluran udara & sambungan knalpot",
        type: "result",
      },
    ],
  },
  {
    title: "B. Transmisi & Kopling",
    fields: [
      {
        field: "transmissionOilLevel",
        label: "Periksa level oli & kebocoran",
        type: "result",
      },
      {
        field: "transmissionClutch",
        label: "Periksa fungsi kopling & keausan kampas kopling",
        type: "result",
      },
      {
        field: "transmissionUniversalJoint",
        label: "Periksa universal joint",
        type: "result",
      },
    ],
  },
  {
    title: "C. Hidrolik",
    fields: [
      {
        field: "hydraulicOilLevel",
        label: "Periksa level oli hidrolik",
        type: "result",
      },
      {
        field: "hydraulicPumpLeakage",
        label: "Periksa kebocoran pada pompa, motor, PTO, selang/pipa",
        type: "result",
      },
      {
        field: "hydraulicValveLeakage",
        label: "Periksa kebocoran pada control valve",
        type: "result",
      },
    ],
  },
  {
    title: "D. Kabin & Kelistrikan",
    fields: [
      {
        field: "cabinCleaning",
        label: "Bersihkan kabin & periksa fungsi panel",
        type: "result",
      },
      {
        field: "cabinLock",
        label: "Periksa kunci kabin & pengunci kemiringan kabin",
        type: "result",
      },
      {
        field: "cabinSteeringLever",
        label: "Periksa fungsi tuas transmisi & kemudi",
        type: "result",
      },
      {
        field: "cabinAttachmentLever",
        label: "Periksa tuas kontrol attachment",
        type: "result",
      },
      {
        field: "cabinBallJointTieRod",
        label: "Periksa ball joint tie rod",
        type: "result",
      },
      {
        field: "cabinBallJointDrakLink",
        label: "Periksa ball joint drag link",
        type: "result",
      },
      { field: "cabinAcBlower", label: "Periksa AC / Blower", type: "result" },
      {
        field: "cabinSwitchFunction",
        label: "Periksa fungsi switch",
        type: "result",
      },
      {
        field: "cabinLampFunction",
        label: "Periksa semua lampu & lampu rotary",
        type: "result",
      },
      {
        field: "cabinBattery",
        label: "Periksa aki & kondisi koneksi",
        type: "result",
      },
      {
        field: "cabinSafetyBelt",
        label: "Periksa sabuk pengaman",
        type: "result",
      },
      { field: "cabinApar", label: "Periksa APAR", type: "result" },
    ],
  },
  {
    title: "E. As Roda Depan, Belakang & Rem",
    fields: [
      {
        field: "axleDifferentialOil",
        label: "Periksa level oli diferensial & kebocoran",
        type: "result",
      },
      {
        field: "axleLockCabin",
        label: "Periksa kunci kabin & pengunci kemiringan kabin",
        type: "result",
      },
      {
        field: "axlePinSpring",
        label: "Periksa & lumasi pin per, linkage kemudi & trunion",
        type: "result",
      },
      {
        field: "axleTorqueRod",
        label: "Periksa dudukan & karet torque rod",
        type: "result",
      },
      {
        field: "axleTyreBrake",
        label: "Periksa ban & fungsi rem",
        type: "result",
      },
      {
        field: "axleSpringUBolt",
        label: "Periksa per & U-Bolt",
        type: "result",
      },
      {
        field: "axleBallJointTieRod",
        label: "Periksa ball joint tie rod",
        type: "result",
      },
      {
        field: "axleBallJointDrakLink",
        label: "Periksa ball joint drag link",
        type: "result",
      },
      {
        field: "axleShockAbsorber",
        label: "Periksa shock absorber",
        type: "result",
      },
      { field: "axleBoltTyre", label: "Periksa baut roda", type: "result" },
      {
        field: "axleHollowSpring",
        label: "Periksa karet hollow spring",
        type: "result",
      },
    ],
  },
  {
    title: "F. Kompartemen Crane",
    fields: [
      {
        field: "craneShackleRope",
        label: "Periksa keausan shackle rope",
        type: "result",
      },
      { field: "craneRopeWire", label: "Periksa kawat sling", type: "result" },
      {
        field: "craneSafetyDevice",
        label: "Periksa safety device kawat sling",
        type: "result",
      },
      {
        field: "craneWireTerminal",
        label: "Periksa terminal fitting kawat sling",
        type: "result",
      },
      {
        field: "craneRopeStretch",
        label: "Periksa kawat sling yang melar",
        type: "result",
      },
      {
        field: "craneHookBlock",
        label: "Periksa hook & block",
        type: "result",
      },
    ],
  },
  {
    title: "G. Penambahan Pelumas & Pendingin",
    fields: [
      {
        field: "topUpEngineOil",
        label: "Oli Mesin (SAE 15W-40)",
        type: "topup",
      },
      {
        field: "topUpTransmission",
        label: "Oli Transmisi (80W-90)",
        type: "topup",
      },
      {
        field: "topUpHydraulic",
        label: "Oli Hidrolik (TELLUS 46)",
        type: "topup",
      },
      {
        field: "topUpDifferential",
        label: "Oli Diferensial (85W-140)",
        type: "topup",
      },
      {
        field: "topUpSteering",
        label: "Oli Power Steering (ATF 220)",
        type: "topup",
      },
      { field: "topUpCoolant", label: "Coolant (VCS)", type: "topup" },
    ],
  },
];
