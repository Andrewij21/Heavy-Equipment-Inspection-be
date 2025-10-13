import type { ChecklistSection } from "../../../types/interfaces";

export const wheelChecklistDataCompactor: ChecklistSection[] = [
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
        label: "Check engine mounting & fitting parts",
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
        label: "Check all belt tension & related parts",
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
        label: "Check oil level and leakage",
        type: "select",
      },
      {
        field: "transmissionClutch",
        label: "Check Clutch Function & Wear Pad Clutch",
        type: "select",
      },
      {
        field: "transmissionUniversalJoint",
        label: "Check Universal Joint & Lubricate",
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
        field: "hydraulicCylinder",
        label: "Check hydraulic cylinder condition & connection",
        type: "select",
      },
      {
        field: "hydraulicHoseLeakage",
        label: "Check for leaks from hose / piping",
        type: "select",
      },
      {
        field: "hydraulicPumpLeakage",
        label: "Check for leaks from Pump, Motor, PTO, Hose/piping connection",
        type: "select",
      },
      {
        field: "hydraulicValveLeakage",
        label: "Check for leaks from control valve",
        type: "select",
      },
    ],
  },
  {
    title: "Cabin & Electric",
    fields: [
      {
        field: "cabinCleaning",
        label: "Clean cabin & check panel Function",
        type: "select",
      },
      {
        field: "cabinLock",
        label: "Check cabin lock & tilt cabin lock",
        type: "select",
      },
      {
        field: "cabinSeatBelt",
        label: "Check Seat & Safety Belt",
        type: "select",
      },
      {
        field: "cabinSteeringLever",
        label: "Check Transmission & Steering Control Lever Function",
        type: "select",
      },
      {
        field: "cabinAttachmentLever",
        label: "Check Attachment Control Lever",
        type: "select",
      },
      {
        field: "cabinTravelControl",
        label: "Check Travel control",
        type: "select",
      },
      {
        field: "cabinAcBlower",
        label: "Check AC / Blower",
        type: "select",
      },
      {
        field: "cabinMirror",
        label: "Check mirror condition",
        type: "select",
      },
      {
        field: "cabinSwitch",
        label: "Check switch function",
        type: "select",
      },
      {
        field: "cabinWiper",
        label: "Check wiper function",
        type: "select",
      },
      {
        field: "cabinHorn",
        label: "Check horn function",
        type: "select",
      },
      {
        field: "cabinLamps",
        label: "Check all lamp function & Rotary lamp",
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
        label: "Check all brake function",
        type: "select",
      },
      {
        field: "cabinEmergencyStop",
        label: "Check Emergency Stop function",
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
    title: "Axle",
    fields: [
      {
        field: "axleDriveOilLevel",
        label: "Check oil level in the drive axle and any leak",
        type: "select",
      },
      {
        field: "axleWheelHubLevel",
        label: "Check level in the wheel hub and any leak",
        type: "select",
      },
      {
        field: "axleReducingGear",
        label: "Check in the axle reducing gear and any leak",
        type: "select",
      },
      {
        field: "axleNutWheel",
        label: "Check nut wheel (550Nm) and tyre pressure",
        type: "select",
      },
    ],
  },
  {
    title: "Attachment",
    fields: [
      {
        field: "axleDriveAxleOilLevel",
        label: "Check oil level in the drive axle and any leak",
        type: "select",
      },
      {
        field: "axleWheelHubLevel",
        label: "Check any level in the wheel hub and any leak",
        type: "select",
      },
      {
        field: "axleReducingGearLevel",
        label: "Check in the axle reducing gear and any leak",
        type: "select",
      },
      {
        field: "axleNutWheelTyrePressure",
        label: "Check nut wheel (550Nm) and tyre pressure",
        type: "select",
      },
    ],
  },
  {
    title: "Lubricant & Coolant Top-Up",
    fields: [
      {
        field: "topUpCoolant",
        label: "Coolant",
        type: "topup",
      },
      {
        field: "topUpEngineOil",
        label: "Engine Oil (15W-40)",
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
      {
        field: "topUpWheelMotor",
        label: "Wheel Motor (85W-140)",
        type: "topup",
      },
      {
        field: "topUpVibrator",
        label: "Vibrator (85W-140)",
        type: "topup",
      },
      {
        field: "topUpHydraulic",
        label: "Hydraulic (TURALIX 46)",
        type: "topup",
      },
    ],
  },
];
// export const wheelChecklistDataCompactor: ChecklistSection[] = [
//   {
//     title: "A. Mesin (Engine)",
//     fields: [
//       {
//         field: "engineOilLevel",
//         label: "Periksa level & kebocoran oli mesin",
//         type: "result",
//       },
//       {
//         field: "engineMounting",
//         label: "Periksa dudukan mesin & bagian fitting",
//         type: "result",
//       },
//       {
//         field: "engineCoolantLevel",
//         label: "Periksa level air pendingin (coolant) & kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineFuelSystem",
//         label: "Periksa sistem bahan bakar & kebocoran",
//         type: "result",
//       },
//       {
//         field: "engineBeltTension",
//         label: "Periksa semua ketegangan belt & bagian terkait",
//         type: "result",
//       },
//       {
//         field: "engineAirIntake",
//         label: "Periksa koneksi saluran masuk udara (air intake) & knalpot",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "B. Transmisi & Kopling (Clutch)",
//     fields: [
//       {
//         field: "transmissionOilLevel",
//         label: "Periksa level oli dan kebocoran",
//         type: "result",
//       },
//       {
//         field: "transmissionClutch",
//         label: "Periksa Fungsi Kopling & Keausan Pad Kopling",
//         type: "result",
//       },
//       {
//         field: "transmissionUniversalJoint",
//         label: "Periksa Universal Joint & Beri Pelumas (Lubricate)",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "C. Hidraulik",
//     fields: [
//       {
//         field: "hydraulicOilLevel",
//         label: "Periksa level oli hidraulik",
//         type: "result",
//       },
//       {
//         field: "hydraulicCylinder",
//         label: "Periksa kondisi silinder hidraulik & sambungan",
//         type: "result",
//       },
//       {
//         field: "hydraulicHoseLeakage",
//         label: "Periksa kebocoran dari selang (hose) / perpipaan",
//         type: "result",
//       },
//       {
//         field: "hydraulicPumpLeakage",
//         label:
//           "Periksa kebocoran dari Pompa, Motor, PTO, Sambungan Selang/perpipaan",
//         type: "result",
//       },
//       {
//         field: "hydraulicValveLeakage",
//         label: "Periksa kebocoran dari control valve",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "D. Kabin & Kelistrikan",
//     fields: [
//       {
//         field: "cabinCleaning",
//         label: "Bersihkan kabin & periksa Fungsi panel",
//         type: "result",
//       },
//       {
//         field: "cabinLock",
//         label: "Periksa kunci kabin & kunci kemiringan (tilt) kabin",
//         type: "result",
//       },
//       {
//         field: "cabinSeatBelt",
//         label: "Periksa Kursi & Sabuk Pengaman",
//         type: "result",
//       },
//       {
//         field: "cabinSteeringLever",
//         label: "Periksa Fungsi Tuas Transmisi & Kontrol Kemudi",
//         type: "result",
//       },
//       {
//         field: "cabinAttachmentLever",
//         label: "Periksa Tuas Kontrol Attachment",
//         type: "result",
//       },
//       {
//         field: "cabinTravelControl",
//         label: "Periksa Kontrol Gerak (Travel control)",
//         type: "result",
//       },
//       { field: "cabinAcBlower", label: "Periksa AC / Blower", type: "result" },
//       {
//         field: "cabinMirror",
//         label: "Periksa kondisi kaca spion",
//         type: "result",
//       },
//       { field: "cabinSwitch", label: "Periksa fungsi saklar", type: "result" },
//       { field: "cabinWiper", label: "Periksa fungsi wiper", type: "result" },
//       { field: "cabinHorn", label: "Periksa fungsi klakson", type: "result" },
//       {
//         field: "cabinLamps",
//         label: "Periksa fungsi semua lampu & Rotary lamp",
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
//         label: "Periksa semua fungsi rem",
//         type: "result",
//       },
//       {
//         field: "cabinEmergencyStop",
//         label: "Periksa fungsi Emergency Stop",
//         type: "result",
//       },
//       { field: "cabinApar", label: "Periksa APAR", type: "result" },
//     ],
//   },
//   {
//     title: "E. Axle",
//     fields: [
//       {
//         field: "axleDriveOilLevel",
//         label: "Periksa level oli di drive axle dan kebocoran",
//         type: "result",
//       },
//       {
//         field: "axleWheelHubLevel",
//         label: "Periksa level di hub roda dan kebocoran",
//         type: "result",
//       },
//       {
//         field: "axleReducingGear",
//         label: "Periksa di axle reducing gear dan kebocoran",
//         type: "result",
//       },
//       {
//         field: "axleNutWheel",
//         label: "Periksa mur roda (550Nm) dan tekanan ban",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "F. Attachment",
//     fields: [
//       {
//         field: "axleDriveAxleOilLevel",
//         label: "Check oil level in the drive axle and any leak",
//         type: "result",
//       },
//       {
//         field: "axleWheelHubLevel",
//         label: "Check any level in the wheel hub and any leak",
//         type: "result",
//       },
//       {
//         field: "axleReducingGearLevel",
//         label: "Check in the axle reducing gear and any leak",
//         type: "result",
//       },
//       {
//         field: "axleNutWheelTyrePressure",
//         label: "Check nut wheel (550Nm) and tyre pressure",
//         type: "result",
//       },
//     ],
//   },
//   {
//     title: "G. Penambahan Pelumas & Coolant",
//     fields: [
//       { field: "topUpCoolant", label: "Coolant", type: "topup" },

//       {
//         field: "topUpEngineOil",
//         label: "Oli Mesin (SAE 15W-40)",
//         type: "topup",
//       },

//       {
//         field: "topUpTransmission",
//         label: "Transmisi (85W-140)",
//         type: "topup",
//       },
//       {
//         field: "topUpDifferential",
//         label: "Differensial (85W-140)",
//         type: "topup",
//       },
//       {
//         field: "topUpFinalDrive",
//         label: "Final Drive (85W-140)",
//         type: "topup",
//       },
//       {
//         field: "topUpWheelMotor",
//         label: "Motor Roda (85W-140)",
//         type: "topup",
//       },
//       { field: "topUpVibrator", label: "Vibrator (85W-140)", type: "topup" },
//       {
//         field: "topUpHydraulic",
//         label: "Hidraulik (TURALIX 46)",
//         type: "topup",
//       },
//     ],
//   },
// ];
