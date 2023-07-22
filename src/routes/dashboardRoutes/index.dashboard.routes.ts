import express from "express";
// You would import the routes from each feature here. As an example, I'll show it for user.
// import userDashboardRoutes from "./user.dashboard.routes";

const router = express.Router();

// Again, this is just for the 'user' feature as an example. You would do this for all features.
// router.use('/user', userDashboardRoutes);

export default router;
