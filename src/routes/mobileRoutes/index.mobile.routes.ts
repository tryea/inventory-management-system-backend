import express from "express";
// You would import the routes from each feature here. As an example, I'll show it for user.
// import userMobileRoutes from "./user.mobile.routes";

const router = express.Router();

// Again, this is just for the 'user' feature as an example. You would do this for all features.
// router.use('/user', userMobileRoutes);

export default router;