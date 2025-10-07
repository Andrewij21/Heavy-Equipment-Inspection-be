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

// Note: Specific CRUD (Create/Update/Delete) for each type should remain on their specific routes (e.g., /tracks, /wheels)

export default router;
