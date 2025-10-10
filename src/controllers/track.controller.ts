// src/controllers/track.controller.ts
import { Request, Response } from "express";
import { trackService } from "../services/track.service";
import { trackInspectionSchema } from "../schemas/inspection.schema";
import { sendApiResponse } from "../utils/sendApiResponse";
import { logger } from "../lib/logger";
import { Prisma, InspectionStatus } from "@prisma/client"; // Import Prisma types

export class TrackController {
  getInspections = async (req: Request, res: Response) => {
    const { page, limit, q, modelUnit } = req.query;
    const params = {
      page: Number(page) ? parseInt(page as string) : 1,
      limit: Number(limit) ? parseInt(limit as string) : 10,
      q: q as string,
      modelUnit: modelUnit as string,
    };
    const { inspections, count } = await trackService.getAll(params);
    sendApiResponse(res, 200, {
      message: "Track inspections fetched successfully",
      count: count,
      data: inspections,
    });
  };

  getInspection = async (req: Request, res: Response) => {
    const inspection = await trackService.getById(req.params.id);

    sendApiResponse(res, 200, {
      message: "Track inspection fetched successfully",
      data: inspection,
    });
  };

  createInspection = async (req: Request, res: Response) => {
    // ASUMSI: req.user.id disetel oleh middleware requireAuth
    const data = req.body;

    // Tambahkan mechanicId dari sesi pengguna
    const payload = {
      ...data,
      equipmentType: "track", // Pastikan tipe equipment benar
    };
    const inspection = await trackService.create(payload);

    sendApiResponse(res, 201, {
      message: "Track inspection created successfully",
      data: inspection,
    });
  };

  updateInspection = async (req: Request, res: Response) => {
    // Use .partial() to allow users to update only a subset of fields
    const parsed = trackInspectionSchema.partial().parse(req.body);

    const updated = await trackService.update(req.params.id, parsed);
    logger.info({ updated });

    sendApiResponse(res, 200, {
      message: "Track inspection updated successfully",
      data: updated,
    });
  };

  deleteInspection = async (req: Request, res: Response) => {
    await trackService.delete(req.params.id);

    sendApiResponse(res, 200, {
      message: "Track inspection deleted successfully",
    });
  };

  // NEW METHOD: Handles status update (Approval/Rejection)
  updateStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;

    // CRITICAL: Get approver ID from the auth middleware payload (req.user)
    const approverId = req.user?.id;
    if (!approverId) {
      // This should theoretically be caught by requireAuth/requireRole,
      // but included for type safety and robustness.
      return res.status(401).json({
        success: false,
        error: "Authentication failed. Approver ID missing.",
      });
    }

    // Validation to ensure the status is a valid enum value
    const newStatus = status.toUpperCase();
    const validStatuses = Object.values(InspectionStatus); // Use the imported Enum

    if (!validStatuses.includes(newStatus)) {
      return res.status(400).json({
        success: false,
        error: `Invalid status value. Must be one of: ${validStatuses.join(
          ", "
        )}`,
      });
    }

    // Pass the inspection ID, new status, and the approver's ID to the service
    const updated = await trackService.updateStatus(
      id,
      newStatus as InspectionStatus,
      approverId
    );

    sendApiResponse(res, 200, {
      message: `Inspection ${id} status updated to ${newStatus}`,
      data: updated,
    });
  };
}

// Export instance
export const trackController = new TrackController();
