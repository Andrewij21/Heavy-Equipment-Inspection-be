// src/controllers/inspection.controller.ts
import { Request, Response } from "express";
import { inspectionService } from "../services/inspection.service";
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
}

export const inspectionController = new InspectionController();
