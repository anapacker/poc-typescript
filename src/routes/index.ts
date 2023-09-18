import { Router } from "express";
import moviesRoute from "./moviesRoute";
import platformRoute from "./platformRoute";

const router = Router()
router.use(moviesRoute)
router.use(platformRoute)

export default router