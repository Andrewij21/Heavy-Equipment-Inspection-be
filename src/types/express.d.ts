// src/types/express.d.ts
import { User } from "@prisma/client";

// Define the UserPayload interface outside of the Express module augmentation
// so it can be easily imported and used elsewhere (like in auth.ts).
export interface UserPayload {
  id: string;
  email: string;
  role: User["role"];
}

// Augment the 'express' module to add the 'user' property to Request
declare module "express" {
  // Augment the Request interface
  interface Request {
    user?: UserPayload;
  }
}

// NOTE: You no longer need `namespace Express` or `declare global`
// when using module augmentation as shown above.
