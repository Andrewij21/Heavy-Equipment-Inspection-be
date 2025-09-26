import { Router, type Request, type Response } from "express";
import userRoutes from "@/routes/user.route";
import authRoutes from "@/routes/auth.route";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "API is healthy and running",
    timestamp: new Date().toISOString(),
  });
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

export default router;
