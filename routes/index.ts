import express from "express";
const router = express.Router();
// ^ Routes for api ^
import firstEdRoutes from "./1ed"
import secondEdRoutes from "./2ed"
// ^ route locations ^

router.use("/v1", firstEdRoutes);
router.use("/v2", secondEdRoutes);

export default router