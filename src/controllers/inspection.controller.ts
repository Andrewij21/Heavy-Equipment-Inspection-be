// src/controllers/inspection.controller.ts
import { Request, Response } from "express";
import { inspectionService } from "../services/inspection.service";
import { sendApiResponse } from "../utils/sendApiResponse";
import { InspectionStatus } from "@prisma/client";

export class InspectionController {
  getInspection = async (req: Request, res: Response) => {
    const inspection = await inspectionService.getById(req.params.id);

    sendApiResponse(res, 200, {
      message: "Inspection fetched successfully",
      data: inspection,
    });
  };
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
  deleteInspection = async (req: Request, res: Response) => {
    await inspectionService.delete(req.params.id);

    sendApiResponse(res, 200, {
      message: "Inspection deleted successfully",
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
    const updated = await inspectionService.updateStatus(
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

export const inspectionController = new InspectionController();
