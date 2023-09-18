import { moviesController } from "../controllers/moviesController";
import { Router } from "express";

const moviesRoute = Router()
moviesRoute.post("/movies", moviesController.moviesPost)

export default moviesRoute