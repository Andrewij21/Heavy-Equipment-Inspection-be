import { Router, type Request, type Response } from "express";
import userRoutes from "./user.route";
import trackRoutes from "./track.route";
import authRoutes from "./auth.route";
import inspectionRoutes from "./inspection.route";

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
router.use("/tracks", trackRoutes);
router.use("/inspections", inspectionRoutes);

export default router;
