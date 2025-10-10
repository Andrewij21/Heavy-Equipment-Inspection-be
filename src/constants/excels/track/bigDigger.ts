import type { ChecklistSection } from "../../../types/interfaces";

export const trackChecklistDataBigDigger: ChecklistSection[] = [
  {
    title: "Pemeriksaan Area Rangka Bawah",
    fields: [
      {
        field: "lowerLockOutSwitch",
        label: "Periksa Saklar Lock Out",
        type: "result",
      },
      {
        field: "lowerTrackLinkTension",
        label: "Periksa Ketegangan Track Link Kanan & Kiri",
        type: "result",
      },
      {
        field: "lowerTrackShoeBolt",
        label: "Periksa Baut Track Shoe Kanan & Kiri",
        type: "result",
      },
      {
        field: "lowerIdlerRollerGuard",
        label: "Periksa Kondisi Idler, Roller & Wear Guard",
        type: "result",
      },
      {
        field: "lowerUnderGuard",
        label: "Periksa kondisi under guard, cover & counter weight",
        type: "result",
      },
      {
        field: "lowerFinalDriveSprocket",
        label: "Periksa Kondisi Final Drive & Gigi Sprocket",
        type: "result",
      },
      {
        field: "lowerSwingCircle",
        label: "Periksa Kondisi Swing Circle",
        type: "result",
      },
      {
        field: "lowerAttachmentCondition",
        label: "Periksa Boom, Arm Stick, Link Bucket & Bucket",
        type: "result",
      },
      {
        field: "lowerDrainWaterSediment",
        label: "Kuras endapan air dari tangki bahan bakar & water separator",
        type: "result",
      },
      {
        field: "lowerHydraulicOilLevel",
        label: "Periksa level oli Hidraulik (tambahkan jika perlu)",
        type: "result",
      },
    ],
  },
  {
    title: "Pemeriksaan Area Rangka Atas",
    fields: [
      {
        field: "upperEngineOilLevel",
        label: "Periksa level oli mesin (Tambahkan jika perlu)",
        type: "result",
      },
      {
        field: "upperEngineVisual",
        label:
          "Pemeriksaan Visual kondisi mesin dari kebocoran, baut hilang, dll",
        type: "result",
      },
      {
        field: "upperCoolantLevel",
        label: "Periksa Level Coolant",
        type: "result",
      },
      {
        field: "upperRadiatorEtc",
        label: "Periksa Radiator, Aftercooler, Hdy oil cooler & koneksi",
        type: "result",
      },
      {
        field: "upperTurboInlet",
        label: "Periksa Kondisi siku inlet turbo",
        type: "result",
      },
      {
        field: "upperAirCleaner",
        label: "Periksa Air Cleaner (Tambahkan jika perlu)",
        type: "result",
      },
      {
        field: "upperCompartmentLeaks",
        label:
          "Periksa Kebocoran Oli, Kebocoran Coolant & Kebocoran Gas pada area kompartemen mesin atas",
        type: "result",
      },
      {
        field: "upperHydraulicPump",
        label: "Periksa Kondisi Pompa Hidraulik & Saluran",
        type: "result",
      },
      {
        field: "upperControlValve",
        label: "Periksa Kondisi Control Valve & Saluran",
        type: "result",
      },
      {
        field: "upperSwingMachineOil",
        label: "Periksa level oli Swing Machine",
        type: "result",
      },
      {
        field: "upperElectricWiring",
        label: "Periksa Pengkabelan Listrik",
        type: "result",
      },
      {
        field: "upperBatteryElectrolyte",
        label: "Periksa level Elektrolit Baterai",
        type: "result",
      },
      {
        field: "upperFanBelts",
        label: "Periksa Fan Belt, & AC Compresor Belt",
        type: "result",
      },
      {
        field: "upperCylinderLeaks",
        label: "Periksa Semua Silinder dari Kebocoran Oli",
        type: "result",
      },
      {
        field: "upperCoverHandRail",
        label: "Periksa Semua Cover & Hand Rail",
        type: "result",
      },
    ],
  },
  {
    title: "Pengukuran Temperatur Silinder",
    fields: [
      {
        type: "temperatureGroup",
        label: "Cylinder Boom",
        // Kelompokkan semua nama field yang berhubungan di sini
        fieldNames: {
          result: "tempCylBoom",
          rh: "tempCylBoomRh",
          lh: "tempCylBoomLh",
          deltaT: "deltaTCylBoom",
        },
      },
      {
        type: "temperatureGroup",
        label: "Cylinder Arm",
        fieldNames: {
          result: "tempCylArm",
          rh: "tempCylArmRh",
          lh: "tempCylArmLh",
          deltaT: "deltaTCylArm",
        },
      },
      {
        type: "temperatureGroup",
        label: "Cylinder Bucket",
        fieldNames: {
          result: "tempCylBucket",
          rh: "tempCylBucketRh",
          lh: "tempCylBucketLh",
          deltaT: "deltaTCylBucket",
        },
      },
    ],
  },
  {
    title: "Periksa Kondisi Grease Pada",
    fields: [
      {
        field: "greaseBoomCylFoot",
        label: "Pin Kaki Silinder Boom (2 Titik)",
        type: "result",
      },
      {
        field: "greaseBoomFootPin",
        label: "Pin Kaki Boom (2 Titik)",
        type: "result",
      },
      {
        field: "greaseBoomCylRod",
        label: "Ujung Rod Silinder Boom (2 Titik)",
        type: "result",
      },
      {
        field: "greaseArmCylFoot",
        label: "Pin Kaki Silinder Arm (1 Titik)",
        type: "result",
      },
      {
        field: "greaseBoomArmCoupling",
        label: "Pin Kopling Boom Arm (1 Titik)",
        type: "result",
      },
      {
        field: "greaseArmCylRod",
        label: "Ujung Rod Silinder Arm (1 Titik)",
        type: "result",
      },
      {
        field: "greaseBucketCylFoot",
        label: "Pin Kaki Silinder Bucket (1 Titik)",
        type: "result",
      },
      {
        field: "greaseArmLinkCoupling",
        label: "Pin Kopling Arm & Link (1 Titik)",
        type: "result",
      },
      {
        field: "greaseArmBucketCoupling",
        label: "Pin Kopling Arm & Bucket (1 Titik)",
        type: "result",
      },
      {
        field: "greaseLinkCoupling",
        label: "Pin Kopling Link (2 Titik)",
        type: "result",
      },
      {
        field: "greaseBucketCylRod",
        label: "Ujung Rod Silinder Bucket (1 Titik)",
        type: "result",
      },
      {
        field: "greaseBucketLinkCoupling",
        label: "Pin Kopling Bucket & Link (1 Titik)",
        type: "result",
      },
    ],
  },
  {
    title: "Pemeriksaan Cabin",
    fields: [
      { field: "cabinMonitorPanel", label: "Monitor Panel", type: "result" },
      { field: "cabinSwitches", label: "Saklar", type: "result" },
      { field: "cabinGauge", label: "Gauge (Pengukur)", type: "result" },
      {
        field: "cabinControlLever",
        label: "Tuas Kontrol & Pedal Kontrol",
        type: "result",
      },
      { field: "cabinRadioComm", label: "Radio Komunikasi", type: "result" },
      { field: "cabinFmRadio", label: "Radio FM", type: "result" },
      { field: "cabinWorkLamp", label: "Lampu Kerja", type: "result" },
      { field: "cabinTravelAlarm", label: "Travel Alarm", type: "result" },
      { field: "cabinHorn", label: "Klakson", type: "result" },
      { field: "cabinMirror", label: "Cermin & Braket", type: "result" },
      {
        field: "cabinRotaryLamp",
        label: "Lampu Putar (Rotary Lamp)",
        type: "result",
      },
      { field: "cabinWiper", label: "Wiper & Bilah Kaca", type: "result" },
      { field: "cabinWindowWasher", label: "Pencuci Jendela", type: "result" },
      {
        field: "cabinAcFunction",
        label: "Fungsi AC & Level Gas",
        type: "result",
      },
      {
        field: "cabinFuseRelay",
        label: "Periksa Sekering, Relay & Level Gas",
        type: "result",
      },
      {
        field: "cabinOperatorSeat",
        label: "Periksa Kondisi Kursi Operator",
        type: "result",
      },
    ],
  },
  {
    title: "Pemeriksaan Alat Keselamatan",
    fields: [
      {
        field: "safetyFireExtinguisher",
        label: "Periksa Alat Pemadam Api Ringan (APAR)",
        type: "result",
      },
      {
        field: "safetyEmergencyStop",
        label: "Periksa Fungsi Tombol Emergency Stop",
        type: "result",
      },
      {
        field: "safetyCabinRops",
        label: "Periksa Kondisi Cabin & ROPS",
        type: "result",
      },
      {
        field: "safetyBelt",
        label: "Periksa Kondisi Safety Belt",
        type: "result",
      },
    ],
  },
  {
    title: "Penambahan Oli",
    fields: [
      {
        field: "topUpCoolant",
        label: "Coolant",
        type: "topup",
      },
      {
        field: "topUpEngine",
        label: "Mesin (15W-40)",
        type: "topup",
      },
      {
        field: "topUpHydraulic",
        label: "Hidraulik (TURALIX 46)",
        type: "topup",
      },
      {
        field: "topUpSwingMachinery",
        label: "Mekanisme Putar (Swing Machinary) (HD 50 / HD 30)",
        type: "topup",
      },
      {
        field: "topUpFinalDrive",
        label: "Final Drive (HD 50 / HD 30)",
        type: "topup",
      },
    ],
  },
];
