// src/services/profile.service.ts

import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";
import { NotFoundError } from "../utils/customeErrors";
import type { ProfileFormData } from "../schemas/profile.schema";

class ProfileService {
  /**
   * Mengambil detail profil pengguna berdasarkan ID.
   */
  async getProfileById(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        contact: true,
        employeeId: true,
        role: true,
        department: true,
        createdAt: true,
        // Jangan pernah mengambil password hash di sini
      },
    });

    if (!user) {
      throw new NotFoundError("User profile not found.");
    }
    return user;
  }

  /**
   * Memperbarui detail profil pengguna (username, email, contact, employeeId, password).
   */
  async updateProfile(userId: string, data: ProfileFormData) {
    const { password, ...userData } = data;
    const updatePayload: any = { ...userData };

    // 1. Logika Hashing Password (jika password baru dikirim)
    if (password) {
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long.");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      updatePayload.password = hashedPassword;
    }

    // 2. Logika Pembaruan Email (jika email diubah, cek duplikasi)
    if (userData.email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: userData.email,
          id: { not: userId }, // Pastikan itu bukan diri sendiri
        },
      });
      if (existingUser) {
        throw new Error("Email already registered by another user.");
      }
    }

    // 3. Menangani field nullable (contact): string kosong menjadi null
    if (updatePayload.contact === "") {
      updatePayload.contact = null;
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updatePayload,
      select: {
        id: true,
        username: true,
        email: true,
        contact: true,
        employeeId: true,
        role: true,
        department: true,
        createdAt: true,
      },
    });

    return updatedUser;
  }
}

export const profileService = new ProfileService();
