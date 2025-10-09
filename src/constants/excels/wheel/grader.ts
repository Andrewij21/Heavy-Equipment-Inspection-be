import type { ChecklistSection } from "../../../types/interfaces";

export const wheelChecklistDataGrader: ChecklistSection[] = [
  {
    title: "A. Mesin (Engine)",
    fields: [
      {
        field: "engineVisualCheck",
        label:
          "Pemeriksaan visual kondisi mesin dari: kebocoran, baut kendor & lain-lain",
        type: "result",
      },
      {
        field: "engineUpperLeaks",
        label:
          "Periksa kebocoran oli, kebocoran coolant, dan kebocoran gas di area kompartemen mesin atas",
        type: "result",
      },
      {
        field: "engineFuelLine",
        label:
          "Periksa semua saluran bahan bakar dari kekencangan, keausan, dan kebocoran",
        type: "result",
      },
      {
        field: "engineOilLevel",
        label: "Periksa level oli mesin (tambahkan jika perlu)",
        type: "result",
      },
      {
        field: "engineCoolantLevel",
        label: "Periksa level Coolant (tambahkan jika perlu)",
        type: "result",
      },
      {
        field: "engineHydraulicPump",
        label: "Periksa kondisi Pompa Hidraulik & Saluran",
        type: "result",
      },
      {
        field: "engineElectricalHarness",
        label: "Periksa wiring harness listrik dari kerusakan dan posisi",
        type: "result",
      },
      {
        field: "engineBatteryElectrolyte",
        label: "Periksa level elektrolit baterai",
        type: "result",
      },
      {
        field: "engineBelts",
        label: "Periksa semua belt dari kekencangan dan keausan",
        type: "result",
      },
      {
        field: "engineCoverHandRail",
        label: "Periksa semua cover dan pegangan tangan (hand rail)",
        type: "result",
      },
      {
        field: "engineAlternator",
        label: "Periksa dudukan dan konektor Alternator",
        type: "result",
      },
      {
        field: "engineTransmissionLeaks",
        label: "Periksa transmisi dari kebocoran",
        type: "result",
      },
    ],
  },
  {
    title: "B. Sistem Pendingin (Cooling System)",
    fields: [
      {
        field: "coolingRadiator",
        label: "Periksa Radiator, Aftercooler, Hyd oil cooler & koneksi",
        type: "result",
      },
      {
        field: "coolingFanGuard",
        label: "Periksa kondisi pelindung Kipas (Fan guard)",
        type: "result",
      },
      {
        field: "coolingBeltTension",
        label: "Periksa Ketegangan Belt",
        type: "result",
      },
    ],
  },
  {
    title: "C. Sistem Hidraulik",
    fields: [
      {
        field: "hydraulicWheelLeanCylinder",
        label:
          "Periksa silinder kemiringan roda (wheel lean cylinder) dan dudukannya",
        type: "result",
      },
      {
        field: "hydraulicSteeringCylinder",
        label: "Periksa silinder kemudi (steering cylinder) dan dudukannya",
        type: "result",
      },
      {
        field: "hydraulicBladeLiftCylinder",
        label: "Periksa silinder pengangkat blade dan dudukannya",
        type: "result",
      },
      {
        field: "hydraulicSideShiftCylinder",
        label:
          "Periksa silinder pergeseran samping (side shift cylinder) dan dudukannya",
        type: "result",
      },
      {
        field: "hydraulicCenterShiftCylinder",
        label:
          "Periksa silinder pergeseran tengah (center shift cylinder) dan dudukannya",
        type: "result",
      },
      {
        field: "hydraulicRipperCylinder",
        label: "Periksa silinder ripper dan dudukannya",
        type: "result",
      },
      {
        field: "hydraulicArticulationCylinder",
        label: "Periksa silinder artikulasi dan dudukannya",
        type: "result",
      },
      {
        field: "hydraulicOilLevel",
        label: "Periksa level oli hidraulik (tambahkan jika perlu)",
        type: "result",
      },
    ],
  },
  {
    title: "D. Kabin - Kelistrikan - & Perangkat Keselamatan",
    fields: [
      {
        field: "cabinGlass",
        label: "Periksa Kondisi Kaca Kabin",
        type: "result",
      },
      {
        field: "cabinRops",
        label: "Periksa Kondisi kabin & ROPS",
        type: "result",
      },
      {
        field: "cabinSeatBelt",
        label: "Periksa kondisi Kursi & Sabuk Pengaman",
        type: "result",
      },
      {
        field: "cabinDoorLock",
        label: "Periksa Pintu & Kunci",
        type: "result",
      },
      {
        field: "cabinTransmissionSteeringLever",
        label: "Periksa Fungsi Tuas Transmisi & Kontrol Kemudi",
        type: "result",
      },
      {
        field: "cabinAttachmentLever",
        label: "Periksa Tuas Kontrol Attachment",
        type: "result",
      },
      {
        field: "cabinReverseCamera",
        label: "Periksa fungsi Kamera Mundur",
        type: "result",
      },
      { field: "cabinMdvr", label: "Periksa MDVR", type: "result" },
      { field: "cabinAcBlower", label: "Periksa AC / Blower", type: "result" },
      {
        field: "cabinMirror",
        label: "Periksa kondisi Kaca Spion",
        type: "result",
      },
      {
        field: "cabinWiper",
        label: "Periksa kondisi & fungsi wiper",
        type: "result",
      },
      { field: "cabinHorn", label: "Periksa fungsi klakson", type: "result" },
      {
        field: "cabinMonitoringSystem",
        label: "Periksa kondisi sistem pemantauan",
        type: "result",
      },
      {
        field: "cabinSwitch",
        label: "Periksa semua fungsi saklar",
        type: "result",
      },
      {
        field: "cabinLamps",
        label: "Periksa semua fungsi lampu & Rotary lamp",
        type: "result",
      },
      {
        field: "cabinEmergencyStop",
        label: "Periksa Fungsi Tombol Emergency Stop",
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
        label: "Periksa semua fungsi Rem",
        type: "result",
      },
      {
        field: "cabinParkingBrake",
        label: "Periksa Kontrol Rem Parkir",
        type: "result",
      },
      {
        field: "cabinFireExtinguisher",
        label: "Periksa Alat Pemadam Api Ringan (APAR)",
        type: "result",
      },
    ],
  },
  {
    title: "E. Rear Axle & Structure Details",
    fields: [
      {
        field: "structureFrameCracks",
        label:
          "Check entire Machine frame, chasis body for cracks (Periksa frame engine, chasis dan body)",
        type: "result",
      },
      {
        field: "structureBladeGETCondition", // Field baru untuk Blade & GET
        label:
          "Check condition of blade & G.E.T for missing bolts dan wear (Periksa kondisi blade, dan G.E.T terhadap keausan)",
        type: "result",
      },
      {
        field: "structureStepLadderCondition", // Field baru untuk Step Ladder
        label:
          "Check Stape Ladder & hands hold condition (Periksa kondisi Step Ladder)",
        type: "result",
      },
      {
        field: "structureTandemHousingLeaks",
        label:
          "Check LH/RH Tandem housing for leaks (Periksa kebocoran pada Tandem LH/RH)",
        type: "result",
      },
      {
        field: "structureCoverGuards",
        label: "Check Cover & Guards condition (Periksa kondisi cover & Guard)",
        type: "result",
      },
      {
        field: "structureWheelSpindleLeaks",
        label:
          "Check all wheel spindle bearing for leaks (periksa kebocoran pada Spindle bearing)",
        type: "result",
      },
      {
        field: "fuelTankDamageLeaks",
        label:
          "Check Fuel tank for damage & leak (Periksa kerusakan & kebocoran pada fuel tank)",
        type: "result",
      },
      {
        field: "structureCircleDriveLeaks",
        label:
          "Check circle drive for leaks (Periksa kebocoran pada circle drive)",
        type: "result",
      },
      {
        field: "structureArticulationCleanliness",
        label:
          "Check articulation area for dirt buld up (Periksa kebersihan pada ariculation)",
        type: "result",
      },
      {
        field: "hydraulicTankDamageLeaks",
        label:
          "Check hydraulic oil tank for damage & leaks (Perikisa kerusakan pada tanki hydrauic)",
        type: "result",
      },
    ],
  },
  {
    title: "F. Penambahan Pelumas & Coolant",
    fields: [
      { field: "topUpCoolant", label: "Coolant", type: "topup" },

      {
        field: "topUpEngineOil",
        label: "Oli Mesin (SAE 15W-40)",
        type: "topup",
      },

      {
        field: "topUpTransmission",
        label: "Transmisi (SAE-30)",
        type: "topup",
      },
      { field: "topUpTandem", label: "Tandem (SAE-30)", type: "topup" },
      {
        field: "topUpFinalDrive",
        label: "Final Drive (SAE-30)",
        type: "topup",
      },
      {
        field: "topUpBreak",
        label: "Break (HD-30)",
        type: "topup",
      },
      { field: "topUpCircle", label: "Circle (TURALIK 46)", type: "topup" },

      {
        field: "topUpHydraulic",
        label: "Hidraulik (TURALIK 46)",
        type: "topup",
      },
    ],
  },
];
