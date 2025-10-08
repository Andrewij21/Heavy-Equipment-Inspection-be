import { Request, Response } from "express";
import { wheelService } from "../services/wheel.service";
import { sendApiResponse } from "../utils/sendApiResponse";

export class WheelController {
  getWheelInspections = async (req: Request, res: Response) => {
    const { page, limit, q, modelUnit } = req.query;
    const params = {
      page: Number(page) ? parseInt(page as string) : 1,
      limit: Number(limit) ? parseInt(limit as string) : 10,
      q: q as string,
      modelUnit: modelUnit as string,
    };
    const { inspections, count } = await wheelService.getAll(params);
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
      equipmentType: "wheel", // Pastikan tipe equipment benar
    };

    const newInspection = await wheelService.create(payload);

    sendApiResponse(res, 201, {
      message: "Wheel inspection created successfully",
      data: newInspection,
    });
  };

  // Note: Anda bisa menambahkan getWheelInspection, updateWheelInspection, dll. di sini
}

export const wheelController = new WheelController();
