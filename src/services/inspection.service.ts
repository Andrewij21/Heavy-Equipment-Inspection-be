// src/services/inspection.service.ts
import { prisma } from "../lib/prisma";
import { Inspection, type InspectionStatus, type Prisma } from "@prisma/client"; // Import the base Inspection model type
import { NotFoundError } from "../utils/customeErrors";
const approverSelection = {
  select: {
    id: true,
    username: true,
    email: true,
  },
};
class InspectionService {
  /**
   * Fetches all Inspection records (Track, Wheel, Support) for high-level viewing (e.g., Leader dashboard).
   * Note: This method does NOT include the full details (TrackInspectionDetails, etc.) for performance.
   * Details are fetched via the specific GET /tracks/:id route.
   */
  async getAllInspections(params: {
    page?: number;
    limit?: number;
    q?: string;
    status?: string;
    equipmentType?: string;
  }) {
    const { page = 1, limit = 100, status, q, equipmentType } = params;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (status) where.status = status.toUpperCase();
    if (equipmentType) where.equipmentType = equipmentType;
    if (q) {
      where.OR = [
        { equipmentId: { contains: q, mode: "insensitive" } },
        { location: { contains: q, mode: "insensitive" } },
        { mechanicName: { contains: q, mode: "insensitive" } },
      ];
    }

    // Define the standard selection, including the approver link
    const include = {
      approver: {
        select: { username: true, id: true, email: true },
      },
    };

    const [inspections, count] = await prisma.$transaction([
      prisma.inspection.findMany({
        where,
        skip,
        take: limit,
        // Only include the essential fields for a list/table view
        include: include,
        orderBy: { createdAt: "desc" },
      }),
      prisma.inspection.count({ where }),
    ]);

    return { inspections, count };
  }
  async getById(id: string) {
    const inspection = await prisma.inspection.findFirst({
      where: { id },
      include: {
        trackDetails: true,
        wheelDetails: true,
        supportDetails: true,
        approver: approverSelection,
      },
    });
    if (!inspection) throw new NotFoundError("Inspection not found");
    return inspection;
  }
  async updateStatus(
    id: string,
    newStatus: InspectionStatus,
    approverId: string
  ) {
    // Explicitly declare the type for our dynamic data object
    const updateData: Prisma.InspectionUpdateInput = {
      status: newStatus,
    };

    if (newStatus === "APPROVED") {
      // ✅ CORRECT: Use the 'approver' relation field with 'connect'
      updateData.approver = {
        connect: { id: approverId },
      };
      updateData.approvalDate = new Date();
    } else if (newStatus === "REJECTED") {
      // ✅ CORRECT: Use 'disconnect' to remove the relation
      updateData.approver = {
        disconnect: true,
      };
      updateData.approvalDate = null;
    }

    // const updated = await prisma.inspection.update({
    //   where: { id },
    //   data: {
    //     status: newStatus,
    //     approverId: approverId,
    //     approvalDate: new Date(),
    //   },
    //   include: {
    //     trackDetails: true,
    //     wheelDetails: true,
    //     supportDetails: true,
    //     approver: approverSelection,
    //   },
    // });
    const updated = await prisma.inspection.update({
      where: { id },
      data: updateData, // <-- Menggunakan objek yang sudah disiapkan

      // data: {
      //   status: newStatus,
      //   approverId: approverId,
      //   approvalDate: new Date(),
      // },
      include: {
        trackDetails: true,
        wheelDetails: true,
        supportDetails: true,
        approver: approverSelection,
      },
    });

    if (!updated) {
      throw new NotFoundError("Inspection not found .");
    }

    return updated;
  }

  /**
   * Deletes the Inspection and cascades the deletion to the TrackInspectionDetails.
   */
  async delete(id: string) {
    return prisma.inspection.delete({ where: { id } });
  }
}

export const inspectionService = new InspectionService();
