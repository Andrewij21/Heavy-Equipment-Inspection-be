import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { requireRole } from "../middlewares/roles";
import { ROLES } from "../constants/roles";
import { catchAsync } from "../utils/catchAsync";
import { wheelController } from "../controllers/wheel.controller";

const router = Router();

router.use(requireAuth);
router.get(
  "/",
  // Allow MECHANIC (who creates) and ADMIN to view the list
  requireRole(ROLES.MECHANIC, ROLES.ADMIN),
  catchAsync(wheelController.getWheelInspections)
);
router.post(
  "/",
  requireRole(ROLES.MECHANIC), // Hanya Mekanik yang boleh membuat
  catchAsync(wheelController.createWheelInspection)
);

// Note: Tambahkan rute untuk GET, PATCH, DELETE /wheels/:id di sini

export default router;
