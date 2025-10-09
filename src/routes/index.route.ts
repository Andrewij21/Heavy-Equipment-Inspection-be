import { Router, type Request, type Response } from "express";
import userRoutes from "./user.route";
import trackRoutes from "./track.route";
import authRoutes from "./auth.route";
import inspectionRoutes from "./inspection.route";
import dashboardRoutes from "./dashboard.route";
import reportRoutes from "./report.route";
import wheelRoutes from "./wheel.route";
import supportRoutes from "./support.route";
import profileRoutes from "./profile.route";

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
router.use("/wheels", wheelRoutes);
router.use("/supports", supportRoutes);
router.use("/inspections", inspectionRoutes);
router.use("/reports", reportRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/profile", profileRoutes);
export default router;
