import { validateSchemas } from "../middleware/validateSchemas";
import { moviesController } from "../controllers/moviesController";
import { Router } from "express";
import movieSchema from "../schemas/movieSchema";

const moviesRoute = Router()
moviesRoute.post("/movies",validateSchemas(movieSchema), moviesController.moviesPost)
moviesRoute.get("/movies", moviesController.getMovies)
moviesRoute.put("/movies/:id",validateSchemas(movieSchema), moviesController.updateMovie)

export default moviesRoute