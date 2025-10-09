import { Request, Response } from "express";
import { supportService } from "../services/support.service";
import { sendApiResponse } from "../utils/sendApiResponse";

export class SupportController {
  getWheelInspections = async (req: Request, res: Response) => {
    const { page, limit, q, modelUnit } = req.query;
    const params = {
      page: Number(page) ? parseInt(page as string) : 1,
      limit: Number(limit) ? parseInt(limit as string) : 10,
      q: q as string,
      modelUnit: modelUnit as string,
    };
    const { inspections, count } = await supportService.getAll(params);
    sendApiResponse(res, 200, {
      message: "Wheel inspections fetched successfully",
      count: count,
      data: inspections,
    });
  };
  createWheelInspection = async (req: Request, res: Response) => {
    // ASUMSI: req.user.id disetel oleh middleware requireAuth
    const data = req.body;

    // Tambahkan mechanicId dari sesi pengguna
    const payload = {
      ...data,
      equipmentType: "support", // Pastikan tipe equipment benar
    };

    const newInspection = await supportService.create(payload);

    sendApiResponse(res, 201, {
      message: "Wheel inspection created successfully",
      data: newInspection,
    });
  };

  // Note: Anda bisa menambahkan getWheelInspection, updateWheelInspection, dll. di sini
}

export const supportController = new SupportController();
