import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { requireRole } from "../middlewares/roles";
import { ROLES } from "../constants/roles";
import { catchAsync } from "../utils/catchAsync";
import { supportController } from "../controllers/support.controller";

const router = Router();

router.use(requireAuth);
router.get(
  "/",
  // Allow MECHANIC (who creates) and ADMIN to view the list
  requireRole(ROLES.MECHANIC, ROLES.ADMIN),
  catchAsync(supportController.getWheelInspections)
);
router.post(
  "/",
  requireRole(ROLES.MECHANIC), // Hanya Mekanik yang boleh membuat
  catchAsync(supportController.createWheelInspection)
);

// Note: Tambahkan rute untuk GET, PATCH, DELETE /wheels/:id di sini

export default router;
