// src/routes/report.route.ts
import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { reportController } from "../controllers/report.controller";
import { catchAsync } from "../utils/catchAsync";
import { requireRole } from "../middlewares/roles";
import { ROLES } from "../constants/roles";

const router = Router();

router.use(requireAuth);

// POST /api/v1/reports/export - Generates a file for download
// Only ADMIN or LEADER should typically be allowed to bulk export/generate reports.
router.get(
  "/export",
  requireRole(ROLES.ADMIN, ROLES.LEADER),
  catchAsync(reportController.exportData)
);
export default router;
