// src/controllers/profile.controller.ts

import { Request, Response } from "express";
import { profileService } from "../services/profile.service";
import { sendApiResponse } from "../utils/sendApiResponse";
import { NotFoundError } from "../utils/customeErrors";
import type { ProfileFormData } from "../schemas/profile.schema";

export class ProfileController {
  /**
   * Mendapatkan profil pengguna yang sedang login.
   */
  getProfile = async (req: Request, res: Response) => {
    // Asumsi req.user.id disetel oleh middleware requireAuth
    if (!req.user) throw new NotFoundError("No user found in request");

    const userId = req.user.id;

    const user = await profileService.getProfileById(userId);

    sendApiResponse(res, 200, {
      message: "User profile fetched successfully",
      data: user,
    });
  };

  /**
   * Memperbarui profil pengguna yang sedang login.
   */
  updateProfile = async (req: Request, res: Response) => {
    if (!req.user) throw new NotFoundError("No user found in request");

    const userId = req.user.id;
    const data: ProfileFormData = req.body;

    const updatedUser = await profileService.updateProfile(userId, data);

    sendApiResponse(res, 200, {
      message: "User profile updated successfully",
      data: updatedUser,
    });
  };
}

export const profileController = new ProfileController();
