import type { ChecklistSection } from "../../../types/interfaces";

export const wheelChecklistDataCompactor: ChecklistSection[] = [
  {
    title: "A. Mesin (Engine)",
    fields: [
      {
        field: "engineOilLevel",
        label: "Periksa level & kebocoran oli mesin",
        type: "result",
      },
      {
        field: "engineMounting",
        label: "Periksa dudukan mesin & bagian fitting",
        type: "result",
      },
      {
        field: "engineCoolantLevel",
        label: "Periksa level air pendingin (coolant) & kebocoran",
        type: "result",
      },
      {
        field: "engineFuelSystem",
        label: "Periksa sistem bahan bakar & kebocoran",
        type: "result",
      },
      {
        field: "engineBeltTension",
        label: "Periksa semua ketegangan belt & bagian terkait",
        type: "result",
      },
      {
        field: "engineAirIntake",
        label: "Periksa koneksi saluran masuk udara (air intake) & knalpot",
        type: "result",
      },
    ],
  },
  {
    title: "B. Transmisi & Kopling (Clutch)",
    fields: [
      {
        field: "transmissionOilLevel",
        label: "Periksa level oli dan kebocoran",
        type: "result",
      },
      {
        field: "transmissionClutch",
        label: "Periksa Fungsi Kopling & Keausan Pad Kopling",
        type: "result",
      },
      {
        field: "transmissionUniversalJoint",
        label: "Periksa Universal Joint & Beri Pelumas (Lubricate)",
        type: "result",
      },
    ],
  },
  {
    title: "C. Hidraulik",
    fields: [
      {
        field: "hydraulicOilLevel",
        label: "Periksa level oli hidraulik",
        type: "result",
      },
      {
        field: "hydraulicCylinder",
        label: "Periksa kondisi silinder hidraulik & sambungan",
        type: "result",
      },
      {
        field: "hydraulicHoseLeakage",
        label: "Periksa kebocoran dari selang (hose) / perpipaan",
        type: "result",
      },
      {
        field: "hydraulicPumpLeakage",
        label:
          "Periksa kebocoran dari Pompa, Motor, PTO, Sambungan Selang/perpipaan",
        type: "result",
      },
      {
        field: "hydraulicValveLeakage",
        label: "Periksa kebocoran dari control valve",
        type: "result",
      },
    ],
  },
  {
    title: "D. Kabin & Kelistrikan",
    fields: [
      {
        field: "cabinCleaning",
        label: "Bersihkan kabin & periksa Fungsi panel",
        type: "result",
      },
      {
        field: "cabinLock",
        label: "Periksa kunci kabin & kunci kemiringan (tilt) kabin",
        type: "result",
      },
      {
        field: "cabinSeatBelt",
        label: "Periksa Kursi & Sabuk Pengaman",
        type: "result",
      },
      {
        field: "cabinSteeringLever",
        label: "Periksa Fungsi Tuas Transmisi & Kontrol Kemudi",
        type: "result",
      },
      {
        field: "cabinAttachmentLever",
        label: "Periksa Tuas Kontrol Attachment",
        type: "result",
      },
      {
        field: "cabinTravelControl",
        label: "Periksa Kontrol Gerak (Travel control)",
        type: "result",
      },
      { field: "cabinAcBlower", label: "Periksa AC / Blower", type: "result" },
      {
        field: "cabinMirror",
        label: "Periksa kondisi kaca spion",
        type: "result",
      },
      { field: "cabinSwitch", label: "Periksa fungsi saklar", type: "result" },
      { field: "cabinWiper", label: "Periksa fungsi wiper", type: "result" },
      { field: "cabinHorn", label: "Periksa fungsi klakson", type: "result" },
      {
        field: "cabinLamps",
        label: "Periksa fungsi semua lampu & Rotary lamp",
        type: "result",
      },
      {
        field: "cabinBattery",
        label: "Periksa Baterai & kondisi sambungan",
        type: "result",
      },
      {
        field: "cabinRadio",
        label: "Periksa Komunikasi Radio",
        type: "result",
      },
      {
        field: "cabinBrake",
        label: "Periksa semua fungsi rem",
        type: "result",
      },
      {
        field: "cabinEmergencyStop",
        label: "Periksa fungsi Emergency Stop",
        type: "result",
      },
      { field: "cabinApar", label: "Periksa APAR", type: "result" },
    ],
  },
  {
    title: "E. Axle",
    fields: [
      {
        field: "axleDriveOilLevel",
        label: "Periksa level oli di drive axle dan kebocoran",
        type: "result",
      },
      {
        field: "axleWheelHubLevel",
        label: "Periksa level di hub roda dan kebocoran",
        type: "result",
      },
      {
        field: "axleReducingGear",
        label: "Periksa di axle reducing gear dan kebocoran",
        type: "result",
      },
      {
        field: "axleNutWheel",
        label: "Periksa mur roda (550Nm) dan tekanan ban",
        type: "result",
      },
    ],
  },
  {
    title: "F. Attachment",
    fields: [
      {
        field: "axleDriveAxleOilLevel",
        label: "Check oil level in the drive axle and any leak",
        type: "result",
      },
      {
        field: "axleWheelHubLevel",
        label: "Check any level in the wheel hub and any leak",
        type: "result",
      },
      {
        field: "axleReducingGearLevel",
        label: "Check in the axle reducing gear and any leak",
        type: "result",
      },
      {
        field: "axleNutWheelTyrePressure",
        label: "Check nut wheel (550Nm) and tyre pressure",
        type: "result",
      },
    ],
  },
  {
    title: "G. Penambahan Pelumas & Coolant",
    fields: [
      { field: "topUpCoolant", label: "Coolant", type: "topup" },

      {
        field: "topUpEngineOil",
        label: "Oli Mesin (SAE 15W-40)",
        type: "topup",
      },

      {
        field: "topUpTransmission",
        label: "Transmisi (85W-140)",
        type: "topup",
      },
      {
        field: "topUpDifferential",
        label: "Differensial (85W-140)",
        type: "topup",
      },
      {
        field: "topUpFinalDrive",
        label: "Final Drive (85W-140)",
        type: "topup",
      },
      {
        field: "topUpWheelMotor",
        label: "Motor Roda (85W-140)",
        type: "topup",
      },
      { field: "topUpVibrator", label: "Vibrator (85W-140)", type: "topup" },
      {
        field: "topUpHydraulic",
        label: "Hidraulik (TURALIX 46)",
        type: "topup",
      },
    ],
  },
];
