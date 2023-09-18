import { plataformsController } from "../controllers/plataformController";
import { Router } from "express";

const platformRoute = Router()
platformRoute.post("/platforms", plataformsController.platformsPost)

export default platformRoute