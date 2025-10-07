// src/controllers/inspection.controller.ts
import { Request, Response } from "express";
import { inspectionService } from "../services/dashboard.service";
import { sendApiResponse } from "../utils/sendApiResponse";

export class InspectionController {
  getInspectionsList = async (req: Request, res: Response) => {
    const { page, limit, q, status } = req.query;

    const params = {
      page: Number(page) ? parseInt(page as string) : 1,
      limit: Number(limit) ? parseInt(limit as string) : 10,
      q: q as string,
      status: status as string,
    };

    const { inspections, count } = await inspectionService.getAllInspections(
      params
    );

    sendApiResponse(res, 200, {
      message: "All inspections fetched successfully",
      count: count,
      data: inspections,
    });
  };

  getDashboardStats = async (req: Request, res: Response) => {
    // ASUMSI: req.user.role dan req.user.id tersedia setelah requireAuth
    // Pastikan Anda menangani tipe data ini.
    const userRole = req?.user?.role;
    const userId = req?.user?.id;

    // Panggil service dengan menyertakan role dan id
    const stats = await inspectionService.getDashboardStats(
      userRole || "",
      userId || ""
    );

    sendApiResponse(res, 200, {
      message: "Dashboard statistics fetched successfully",
      data: stats,
    });
  };
}

export const inspectionController = new InspectionController();
