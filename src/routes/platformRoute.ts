import { validateSchemas } from "../middleware/validateSchemas";
import { plataformsController } from "../controllers/plataformController";
import { Router } from "express";
import platformSchema from "../schemas/platformSchema";

const platformRoute = Router()
platformRoute.post("/platforms", validateSchemas(platformSchema), plataformsController.platformsPost)
platformRoute.get("/platforms", plataformsController.getPlatforms)

export default platformRoute