import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { requireRole } from "../middlewares/roles";
import { ROLES } from "../constants/roles";
import { catchAsync } from "../utils/catchAsync";
import { tyreController } from "../controllers/tyre.controller";

const router = Router();

router.use(requireAuth);
router.get(
  "/",
  requireRole(ROLES.MECHANIC, ROLES.ADMIN),
  catchAsync(tyreController.getTyreInspections)
);
router.post(
  "/",
  requireRole(ROLES.MECHANIC), // Hanya Mekanik yang boleh membuat
  catchAsync(tyreController.createTyreInspection)
);

export default router;
