// src/services/profile.service.ts

import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";
import { ConflictError, NotFoundError } from "../utils/customeErrors";
import type { ProfileFormData } from "../schemas/profile.schema";
import type { Prisma } from "@prisma/client";

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
  async updateProfile(id: string, data: ProfileFormData) {
    // 1. Ambil data pengguna saat ini untuk perbandingan
    const existingUser = await prisma.user.findUnique({ where: { id } });

    // Jika pengguna tidak ditemukan, lempar error
    if (!existingUser) {
      throw new NotFoundError("User not found.");
    }

    // 2. Validasi Email (jika diubah)
    // Hanya jalankan jika email baru disediakan DAN berbeda dari email lama
    if (data.email && data.email !== existingUser.email) {
      const userWithSameEmail = await prisma.user.findUnique({
        where: { email: data.email },
      });
      if (userWithSameEmail) {
        throw new ConflictError(`Email '${data.email}' is already in use.`);
      }
    }

    // 3. Validasi Employee ID (jika diubah)
    // Hanya jalankan jika employeeId baru disediakan DAN berbeda dari yang lama
    if (data.employeeId && data.employeeId !== existingUser.employeeId) {
      const userWithSameEmployeeId = await prisma.user.findFirst({
        where: { employeeId: data.employeeId },
      });
      if (userWithSameEmployeeId) {
        throw new ConflictError(
          `Employee ID '${data.employeeId}' is already registered.`
        );
      }
    }

    // 4. Siapkan data untuk diupdate
    const { password, ...userData } = data;
    const updateData: Prisma.UserUpdateInput = { ...userData };

    // 5. Tangani pembaruan password (logika lama tetap sama)
    if (password) {
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long.");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    // 6. Lakukan pembaruan jika semua validasi lolos
    return prisma.user.update({
      where: { id },
      data: updateData,
    });
  }
}

export const profileService = new ProfileService();
