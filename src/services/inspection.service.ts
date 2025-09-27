// src/services/inspection.service.ts
import { prisma } from "../lib/prisma";
import { Inspection } from "@prisma/client"; // Import the base Inspection model type

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
  }) {
    const { page = 1, limit = 10, status, q } = params;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (status) where.status = status.toUpperCase();

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
}

export const inspectionService = new InspectionService();
