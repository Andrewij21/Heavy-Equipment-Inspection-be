// src/services/inspection.service.ts
import { prisma } from "../lib/prisma";
import { Inspection, type Prisma } from "@prisma/client"; // Import the base Inspection model type

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
  async getSummary(params: { dateFrom?: string; dateTo?: string }) {
    const { dateFrom, dateTo } = params;

    // 1. Buat kondisi filter untuk Prisma
    const where: Prisma.InspectionWhereInput = {};
    if (dateFrom || dateTo) {
      where.createdAt = {};
      if (dateFrom) {
        where.createdAt.gte = new Date(dateFrom); // gte = greater than or equal
      }
      if (dateTo) {
        const endDate = new Date(dateTo);
        endDate.setHours(23, 59, 59, 999); // Set ke akhir hari
        where.createdAt.lte = endDate; // lte = less than or equal
      }
    }

    // 2. Ambil data yang relevan dari database dengan query yang efisien
    const inspections = await prisma.inspection.findMany({
      where,
      select: {
        status: true,
        mechanicName: true,
      },
    });

    // 3. Lakukan kalkulasi
    const total = inspections.length;
    let approved = 0;
    let rejected = 0;
    let pending = 0;

    inspections.forEach((inspection) => {
      if (inspection.status === "APPROVED") approved++;
      else if (inspection.status === "REJECTED") rejected++;
      else if (inspection.status === "PENDING") pending++;
    });

    // Hitung jumlah mekanik unik
    const uniqueMechanics = new Set(
      inspections.map((i) => i.mechanicName).filter(Boolean) // filter(Boolean) untuk menghapus nilai null/undefined
    );
    const user = uniqueMechanics.size;

    // Hitung tingkat persetujuan (hanya dari yang sudah diverifikasi)
    const totalVerified = approved + rejected;
    const approvalRate =
      totalVerified > 0 ? Math.round((approved / totalVerified) * 100) : 0;

    // 4. Kembalikan objek hasil
    return {
      total,
      approved,
      rejected,
      pending,
      user, // Jumlah mekanik unik
      approvalRate,
    };
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
