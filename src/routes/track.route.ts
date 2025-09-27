// src/routes/track.route.ts
import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { trackController } from "../controllers/track.controller";
import { catchAsync } from "../utils/catchAsync";
import { requireRole } from "../middlewares/roles";
import { ROLES } from "../constants/roles"; // Assuming ROLES constant exists

const router = Router();

// Apply authentication to all inspection routes
router.use(requireAuth);

// GET /api/v1/tracks (Fetch all track inspections)
router.get(
  "/",
  // Allow MECHANIC (who creates) and ADMIN to view the list
  requireRole(ROLES.MECHANIC, ROLES.ADMIN),
  catchAsync(trackController.getInspections)
);

// GET /api/v1/tracks/:id (Fetch single inspection)
router.get("/:id", catchAsync(trackController.getInspection));

// POST /api/v1/tracks (Create new inspection)
// Only mechanics should typically create a new inspection record
router.post(
  "/",
  requireRole(ROLES.MECHANIC),
  catchAsync(trackController.createInspection)
);

// PATCH /api/v1/tracks/:id (Update existing inspection)
// Allow mechanics to update their own records, or Admin to fix/finalize
router.patch(
  "/:id",
  requireRole(ROLES.MECHANIC, ROLES.ADMIN),
  catchAsync(trackController.updateInspection)
);

router.patch(
  "/:id/status",
  requireRole(ROLES.LEADER, ROLES.ADMIN),
  catchAsync(trackController.updateStatus)
);
// DELETE /api/v1/tracks/:id (Delete inspection)
// Deletion is usually restricted to higher authority (ADMIN or LEADER)
router.delete(
  "/:id",
  requireRole(ROLES.ADMIN, ROLES.LEADER),
  catchAsync(trackController.deleteInspection)
);

export default router;
