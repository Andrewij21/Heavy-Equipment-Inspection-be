import type { ChecklistSection } from "../../../types/interfaces";

export const wheelChecklistDataMobile: ChecklistSection[] = [
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
        label: "Check all belt tension & related components",
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
        label: "Check oil level & leakage",
        type: "select",
      },
      {
        field: "transmissionClutch",
        label: "Check clutch function & clutch pad wear",
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
        label: "Check transmission & steering lever function",
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
    title: "Attachment",
    fields: [
      {
        field: "attachmentTankLeakage",
        label: "Check body & tank leakage WT - LT - FT",
        type: "select",
      },
      {
        field: "attachmentBallValve",
        label: "Check ball valve, hose, pipe & gun WT - LT - FT",
        type: "select",
      },
      {
        field: "attachmentAirCompressor",
        label: "Check air compressor LT",
        type: "select",
      },
      {
        field: "attachmentAirPump",
        label: "Check all air pumps & pressure gauge LT",
        type: "select",
      },
      {
        field: "attachmentWaterSprayer",
        label: "Check water sprayer & water cannon WT",
        type: "select",
      },
      {
        field: "attachmentDriveCoupling",
        label: "Check drive coupling WT",
        type: "select",
      },
      {
        field: "attachmentWaterPump",
        label: "Check water pump & pressure gauge WT",
        type: "select",
      },
      {
        field: "attachmentFuelPump",
        label: "Check fuel pump & pressure gauge FT",
        type: "select",
      },
      {
        field: "attachmentCouplingJointer",
        label: "Check coupling jointer FT & LT",
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
        label: "Engine Oil (5W-40)",
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
// export const wheelChecklistDataMobile: ChecklistSection[] = [
//   {
//     title: "A. Mesin",
//     fields: [
//       {
//         field: "engineOilLevel",
//         label: "Periksa level oli mesin & kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineMounting",
//         label: "Periksa dudukan mesin",
//         type: "result",
//       },
//       {
//         field: "engineCoolantLevel",
//         label: "Periksa level air coolant & kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineFuelSystem",
//         label: "Periksa sistem bahan bakar & kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineBeltTension",
//         label: "Periksa ketegangan semua belt & komponen terkait",
//         type: "result",
//       },
//       {
//         field: "engineAirIntake",
//         label: "Periksa saluran udara & sambungan knalpot",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "B. Transmisi & Kopling",
//     fields: [
//       {
//         field: "transmissionOilLevel",
//         label: "Periksa level oli & kebocoran",
//         type: "result",
//       },
//       {
//         field: "transmissionClutch",
//         label: "Periksa fungsi kopling & keausan kampas kopling",
//         type: "result",
//       },
//       {
//         field: "transmissionUniversalJoint",
//         label: "Periksa universal joint",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "C. Hidrolik",
//     fields: [
//       {
//         field: "hydraulicOilLevel",
//         label: "Periksa level oli hidrolik",
//         type: "result",
//       },
//       {
//         field: "hydraulicPumpLeakage",
//         label: "Periksa kebocoran pada pompa, motor, PTO, selang/pipa",
//         type: "result",
//       },
//       {
//         field: "hydraulicValveLeakage",
//         label: "Periksa kebocoran pada control valve",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "D. Kabin & Kelistrikan",
//     fields: [
//       {
//         field: "cabinCleaning",
//         label: "Bersihkan kabin & periksa fungsi panel",
//         type: "result",
//       },
//       {
//         field: "cabinLock",
//         label: "Periksa kunci kabin & pengunci kemiringan kabin",
//         type: "result",
//       },
//       {
//         field: "cabinSteeringLever",
//         label: "Periksa fungsi tuas transmisi & kemudi",
//         type: "result",
//       },
//       {
//         field: "cabinAttachmentLever",
//         label: "Periksa tuas kontrol attachment",
//         type: "result",
//       },
//       {
//         field: "cabinBallJointTieRod",
//         label: "Periksa ball joint tie rod",
//         type: "result",
//       },
//       {
//         field: "cabinBallJointDrakLink",
//         label: "Periksa ball joint drag link",
//         type: "result",
//       },
//       { field: "cabinAcBlower", label: "Periksa AC / Blower", type: "result" },
//       {
//         field: "cabinSwitchFunction",
//         label: "Periksa fungsi switch",
//         type: "result",
//       },
//       {
//         field: "cabinLampFunction",
//         label: "Periksa semua lampu & lampu rotary",
//         type: "result",
//       },
//       {
//         field: "cabinBattery",
//         label: "Periksa aki & kondisi koneksi",
//         type: "result",
//       },
//       {
//         field: "cabinSafetyBelt",
//         label: "Periksa sabuk pengaman",
//         type: "result",
//       },
//       { field: "cabinApar", label: "Periksa APAR", type: "result" },
//     ],
//   },
//   {
//     title: "E. As Roda Depan, Belakang & Rem",
//     fields: [
//       {
//         field: "axleDifferentialOil",
//         label: "Periksa level oli diferensial & kebocoran",
//         type: "result",
//       },
//       {
//         field: "axleLockCabin",
//         label: "Periksa kunci kabin & pengunci kemiringan kabin",
//         type: "result",
//       },
//       {
//         field: "axlePinSpring",
//         label: "Periksa & lumasi pin per, linkage kemudi & trunion",
//         type: "result",
//       },
//       {
//         field: "axleTorqueRod",
//         label: "Periksa dudukan & karet torque rod",
//         type: "result",
//       },
//       {
//         field: "axleTyreBrake",
//         label: "Periksa ban & fungsi rem",
//         type: "result",
//       },
//       {
//         field: "axleSpringUBolt",
//         label: "Periksa per & U-Bolt",
//         type: "result",
//       },
//       {
//         field: "axleBallJointTieRod",
//         label: "Periksa ball joint tie rod",
//         type: "result",
//       },
//       {
//         field: "axleBallJointDrakLink",
//         label: "Periksa ball joint drag link",
//         type: "result",
//       },
//       {
//         field: "axleShockAbsorber",
//         label: "Periksa shock absorber",
//         type: "result",
//       },
//       { field: "axleBoltTyre", label: "Periksa baut roda", type: "result" },
//       {
//         field: "axleHollowSpring",
//         label: "Periksa karet hollow spring",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "F. Attachment",
//     fields: [
//       {
//         field: "attachmentTankLeakage",
//         label: "Periksa bodi & kebocoran tangki WT - LT - FT",
//         type: "result",
//       },
//       {
//         field: "attachmentBallValve",
//         label: "Periksa ball valve, selang, pipa & gun WT - LT - FT",
//         type: "result",
//       },
//       {
//         field: "attachmentAirCompressor",
//         label: "Periksa kompresor udara LT",
//         type: "result",
//       },
//       {
//         field: "attachmentAirPump",
//         label: "Periksa semua pompa udara & tekanan manometer LT",
//         type: "result",
//       },
//       {
//         field: "attachmentWaterSprayer",
//         label: "Periksa sprayer air & water canon WT",
//         type: "result",
//       },
//       {
//         field: "attachmentDriveCoupling",
//         label: "Periksa drive coupling WT",
//         type: "result",
//       },
//       {
//         field: "attachmentWaterPump",
//         label: "Periksa pompa air & tekanan manometer WT",
//         type: "result",
//       },
//       {
//         field: "attachmentFuelPump",
//         label: "Periksa pompa bahan bakar & tekanan manometer FT",
//         type: "result",
//       },
//       {
//         field: "attachmentCouplingJointer",
//         label: "Periksa coupling jointer FT & LT",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "G. Penambahan Pelumas & Pendingin",
//     fields: [
//       {
//         field: "topUpEngineOil",
//         label: "Oli Mesin (SAE 15W-40)",
//         type: "topup",
//       },
//       {
//         field: "topUpTransmission",
//         label: "Oli Transmisi (80W-90)",
//         type: "topup",
//       },
//       {
//         field: "topUpHydraulic",
//         label: "Oli Hidrolik (TELLUS 46)",
//         type: "topup",
//       },
//       {
//         field: "topUpDifferential",
//         label: "Oli Diferensial (85W-140)",
//         type: "topup",
//       },
//       {
//         field: "topUpSteering",
//         label: "Oli Power Steering (ATF 220)",
//         type: "topup",
//       },
//       {
//         field: "topUpClutchFluid",
//         label: "Minyak Kopling (DOT 3)",
//         type: "topup",
//       },
//       { field: "topUpGrease", label: "Grease (EP NLGI-2)", type: "topup" },
//       { field: "topUpCoolant", label: "Coolant (VCS)", type: "topup" },
//     ],
//   },
// ];
