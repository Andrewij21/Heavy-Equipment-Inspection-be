// src/routes/inspection.route.ts
import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { inspectionController } from "../controllers/inspection.controller";
import { catchAsync } from "../utils/catchAsync";
import { requireRole } from "../middlewares/roles";
import { ROLES } from "../constants/roles";

const router = Router();

// Apply authentication to all routes
router.use(requireAuth);

// GET /api/v1/inspections (Fetch ALL inspections for Leader/Admin verification table)
router.get(
  "/",
  // CRITICAL: Only LEADER or ADMIN should view the master list
  requireRole(ROLES.LEADER, ROLES.ADMIN, ROLES.MECHANIC),
  catchAsync(inspectionController.getInspectionsList)
);
router.get("/:id", catchAsync(inspectionController.getInspection));
router.patch(
  "/:id/status",
  requireRole(ROLES.LEADER, ROLES.ADMIN),
  catchAsync(inspectionController.updateStatus)
);
// DELETE /api/v1/tracks/:id (Delete inspection)
// Deletion is usually restricted to higher authority (ADMIN or LEADER)
router.delete(
  "/:id",
  requireRole(ROLES.ADMIN, ROLES.LEADER),
  catchAsync(inspectionController.deleteInspection)
);

export default router;
