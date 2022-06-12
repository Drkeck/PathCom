import express from "express"
const router = express.Router();
// ^ Router ^
import JobsRouter from "./Jobs/jobs"

router.use("/jobs", JobsRouter)

export default router