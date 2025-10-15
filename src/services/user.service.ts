// src/services/todo.service.ts
import { prisma } from "../lib/prisma";
import type {
  CreateUserSchema,
  UpdateUserSchema,
} from "../schemas/user.schema";
import { ConflictError, NotFoundError } from "../utils/customeErrors";
import bcrypt from "bcryptjs";
class UserService {
  async getAll(params: {
    page?: number;
    limit?: number;
    q?: string;
    role?: string;
  }) {
    const { page = 1, limit = 10, role, q } = params;
    const skip = (page - 1) * limit;

    const where: any = { status: "active" };

    if (role) where.role = role;
    if (q) {
      where.OR = [
        { email: { contains: q, mode: "insensitive" } },
        { contact: { contains: q, mode: "insensitive" } },
      ];
    }
    const [user, count] = await prisma.$transaction([
      prisma.user.findMany({ where, skip, take: limit }),
      prisma.user.count({ where }),
    ]);
    return { user, count };
  }

  async getById(id: string) {
    const user = await prisma.user.findFirst({
      where: { id, status: "active" },
    });
    if (!user) throw new NotFoundError("User not found");
    return user;
  }

  async create(data: CreateUserSchema) {
    const { email, password, employeeId, ...restOfData } = data;
    const user = await prisma.user.findFirst({ where: { email } });
    if (user) throw new ConflictError("Email already exists");
    const userId = await prisma.user.findFirst({ where: { employeeId } });
    if (userId) throw new ConflictError("Employee ID already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { password: hashedPassword, email, employeeId, ...restOfData },
    });

    return newUser;
  }

  async update(id: string, data: UpdateUserSchema) {
    const { password, ...userData } = data;

    const updateData: any = { ...userData };

    if (password) {
      if (password.length < 6) {
        throw new Error("Password harus memiliki minimal 6 karakter.");
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      updateData.password = hashedPassword;
    }
    return prisma.user.update({
      where: { id },
      data: updateData, // Gunakan updateData yang sekarang berisi password terenkripsi (jika ada)
    });
  }

  async delete(id: string) {
    // return prisma.user.delete({ where: { id } });
    return prisma.user.update({
      where: { id },
      data: {
        status: "inactive", // ✅ Tandai sebagai tidak aktif
      },
    });
  }
}
// Export a singleton (best in Node, no need `new` every time)
export const userService = new UserService();
