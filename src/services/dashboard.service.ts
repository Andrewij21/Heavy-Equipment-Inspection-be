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
    const { page = 1, limit = 100, status, q } = params;
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

  /**
   * Calculates aggregated statistics for the dashboard (Total, Pending, Approved, Rejected).
   * Note: This is currently global; you can add userId filtering for mechanic/leader stats.
   */
  async getDashboardStats(userRole: string, userId: string) {
    let baseWhere: any = {};

    // 1. Tentukan filter dasar berdasarkan peran
    if (userRole === "mechanic") {
      // Mekanik hanya melihat inspeksi yang dibuat oleh mereka sendiri
      baseWhere.mechanicId = userId; // Asumsi: model Inspection memiliki field mechanicId
    }
    // Admin dan Leader melihat statistik Global, jadi baseWhere tetap kosong

    // 2. Hitung statistik menggunakan filter dasar
    const totalCount = await prisma.inspection.count({ where: baseWhere });

    const [pending, approved, rejected] = await prisma.$transaction([
      prisma.inspection.count({
        where: { ...baseWhere, status: "PENDING" },
      }),
      prisma.inspection.count({
        where: { ...baseWhere, status: "APPROVED" },
      }),
      prisma.inspection.count({
        where: { ...baseWhere, status: "REJECTED" },
      }),
    ]);

    // 3. Leader Stats Tambahan (opsional, contoh: reviewedToday)
    let reviewedToday = 0;
    if (userRole === "leader") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      reviewedToday = await prisma.inspection.count({
        where: {
          approverId: userId, // Inspeksi yang disetujui/ditolak oleh leader ini
          approvalDate: {
            gte: today,
          },
          status: {
            in: ["APPROVED", "REJECTED"], // Status sudah final
          },
        },
      });
    }

    // 4. Mengembalikan struktur yang diharapkan oleh frontend
    return {
      total: totalCount,
      pending,
      approved,
      rejected,
      // Field tambahan untuk Leader
      reviewedToday,
    };
  }
}

export const inspectionService = new InspectionService();
