import { prisma } from "../lib/prisma";
import type { WheelInspection } from "../schemas/inspection.schema";

// Helper untuk memisahkan data header dari detail pemeriksaan Wheel
const separateWheelData = (data: WheelInspection) => {
  // Note: Karena Anda tidak menyediakan tipe penuh WheelInspection,
  // kita asumsikan semua field yang bukan 'base' adalah 'wheelDetails'.

  // Field yang HANYA ADA di Inspection (base model)
  const baseFields = [
    "equipmentId",
    "modelUnit",
    "location",
    "operatorName",
    "mechanicName",
    "inspectionDate",
    "inspectionTime",
    "workingHours",
    "smr",
    "timeDown",
    "timeOut",
    "shift",
    "notes",
    "groupLeaderName",
    "equipmentType",
    "wheelGeneralType",
    "status",
    "approverId",
    "approvalDate",
    "mechanicId",
  ];

  const baseData: any = {};
  const wheelDetails: any = {};

  for (const key in data) {
    if (baseFields.includes(key)) {
      baseData[key] = data[key as keyof WheelInspection];
    } else {
      wheelDetails[key] = data[key as keyof WheelInspection];
    }
  }

  // Membersihkan nilai undefined/null (opsional, tergantung pada FE/Zod Anda)
  // const cleanedBaseData = removeUndefined(baseData);

  return { baseData: baseData, wheelDetails: wheelDetails };
};
const approverSelection = {
  select: {
    id: true,
    username: true,
    email: true,
  },
};
class WheelService {
  async getAll(params: {
    page?: number;
    limit?: number;
    q?: string;
    modelUnit?: string;
  }) {
    const { page = 1, limit = 10, modelUnit, q } = params;
    const skip = (page - 1) * limit;

    const where: any = {
      equipmentType: "wheel",
    };

    if (modelUnit) where.modelUnit = modelUnit;
    if (q) {
      where.OR = [
        { equipmentId: { contains: q, mode: "insensitive" } },
        { location: { contains: q, mode: "insensitive" } },
      ];
    }

    const [inspections, count] = await prisma.$transaction([
      prisma.inspection.findMany({
        where,
        skip,
        take: limit,
        include: {
          wheelDetails: true,
          approver: approverSelection, // Now correctly included
        },
      }),
      prisma.inspection.count({ where }),
    ]);
    return { inspections, count };
  }
  async create(data: WheelInspection) {
    const { baseData, wheelDetails } = separateWheelData(data);

    const mechanicId = baseData.mechanicId;
    delete baseData.mechanicId; // Hapus dari baseData agar tidak bentrok saat spread

    if (!mechanicId) {
      throw new Error("Mechanic ID is required for inspection creation.");
    }

    // Pastikan field EquipmentType disetel ke 'wheel'
    baseData.equipmentType = "wheel";

    return prisma.inspection.create({
      data: {
        ...(baseData as any),

        // Hubungkan (Connect) ke model User
        mechanic: {
          connect: {
            id: mechanicId,
          },
        },

        // Buat Wheel Details
        wheelDetails: {
          create: wheelDetails,
        },
      },
      include: {
        wheelDetails: true,
        approver: { select: { id: true, username: true, email: true } },
        mechanic: true,
      },
    });
  }

  // Note: Anda bisa menambahkan getAll, getById, update, delete di sini
}

export const wheelService = new WheelService();
