import { prisma } from "../lib/prisma";

const approverSelection = {
  select: {
    id: true,
    username: true,
    email: true,
  },
};
class TyreService {
  async getAll(params: {
    page?: number;
    limit?: number;
    q?: string;
    modelUnit?: string;
  }) {
    const { page = 1, limit = 10, modelUnit, q } = params;
    const skip = (page - 1) * limit;

    const where: any = {
      equipmentType: "tyre",
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
          tyreDetails: true,
          approver: approverSelection, // Now correctly included
        },
      }),
      prisma.inspection.count({ where }),
    ]);
    return { inspections, count };
  }
  // src/services/wheel.service.ts (Di dalam async create(data))

  async create(data: any) {
    // 1. Definisikan secara KETAT SEMUA field header yang ada di model Inspection
    //    Ini adalah cara paling aman untuk memastikan detail tidak bocor.
    const {
      equipmentId,
      modelUnit,
      location,
      operatorName,
      mechanicName,
      inspectionDate,
      inspectionTime,
      workingHours,
      smr,
      timeDown,
      timeOut,
      shift,
      notes,
      groupLeaderName,
      equipmentType,
      supportGeneralType,
      mechanicId,
      approverId,
      approvalDate,
      status,
      formNumber,
      revision,
      hm,
      size,
      dateOfIssue,
      tyreDetails,
      timeStop,
      // Semua field yang TIDAK di-destructure di sini akan masuk ke 'wheelDetailsPayload'
      ...wheelDetailsPayload
    } = data;

    // 2. Kumpulkan field header yang aman
    const baseData = {
      equipmentId,
      modelUnit,
      location,
      operatorName,
      mechanicName,
      inspectionDate,
      inspectionTime,
      workingHours,
      smr,
      timeDown,
      timeOut,
      shift,
      notes,
      groupLeaderName,
      equipmentType,
      supportGeneralType,
      approverId,
      approvalDate,
      status,
      formNumber,
      revision,
      hm,
      size,
      dateOfIssue,
      timeStop,
    };

    if (!mechanicId) {
      throw new Error("Mechanic ID is required for inspection creation.");
    }

    baseData.equipmentType = "tyre";

    return prisma.inspection.create({
      data: {
        // Sebarkan data header yang aman
        ...(baseData as any),

        // Hubungkan (Connect) ke model User
        mechanic: {
          connect: {
            id: mechanicId,
          },
        },

        // Buat Wheel Details (Menggunakan detail yang sudah bersih)
        tyreDetails: {
          create: tyreDetails,
        },
      },
      include: {
        tyreDetails: true,
        approver: { select: { id: true, username: true, email: true } },
        mechanic: true,
      },
    });
  }

  // Note: Anda bisa menambahkan getAll, getById, update, delete di sini
}

export const tyreService = new TyreService();
