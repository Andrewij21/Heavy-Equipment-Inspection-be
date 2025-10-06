// src/schemas/todo.ts
import { z } from "zod";

export const createUserSchema = z.object({
  email: z.email(),
  password: z.string(),
  contact: z.string().optional(),
  role: z.string().min(1),
  username: z.string().min(1),
  employeeId: z.string(),
  department: z.string().optional().nullable(),
});

export const updateUserSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().optional(),
  contact: z.string().min(1).optional(),
  role: z.string().optional(),
  username: z.string().min(1),
  employeeId: z.string(),
  department: z.string().optional().nullable(),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
