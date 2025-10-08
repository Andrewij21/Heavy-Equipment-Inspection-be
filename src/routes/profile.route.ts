// src/routes/profile.route.ts

import { Router } from "express";
import { requireAuth } from "../middlewares/auth";
import { profileController } from "../controllers/profile.controller";
import { catchAsync } from "../utils/catchAsync";

const router = Router();

// Semua rute di sini memerlukan otentikasi
router.use(requireAuth);

// GET /api/v1/profile
router.get("/", catchAsync(profileController.getProfile));

// PATCH /api/v1/profile
router.patch("/", catchAsync(profileController.updateProfile));

export default router;
