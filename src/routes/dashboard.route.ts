// src/routes/inspection.route.ts
import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { inspectionController } from "../controllers/dashboard.controller";
import { catchAsync } from "../utils/catchAsync";
import { requireRole } from "../middlewares/roles";
import { ROLES } from "../constants/roles";

const router = Router();

router.use(requireAuth);

router.get("/stats", catchAsync(inspectionController.getDashboardStats));

router.get(
  "/",
  requireRole(ROLES.LEADER, ROLES.ADMIN),
  catchAsync(inspectionController.getInspectionsList)
);

export default router;
