import express from "express";
import dashboardRoutes from "./dashboardRoutes/index.dashboard.routes";
import mobileRoutes from "./mobileRoutes/index.mobile.routes";

const router = express.Router();

router.use('/dashboard', dashboardRoutes);
router.use('/mobile', mobileRoutes);

export default router;
