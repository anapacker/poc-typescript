import { validateSchemas } from "../middleware/validateSchemas";
import { platformsController } from "../controllers/plataformController";
import { Router } from "express";
import platformSchema from "../schemas/platformSchema";

const platformRoute = Router()
platformRoute.post("/platforms", validateSchemas(platformSchema), platformsController.platformsPost)
platformRoute.get("/platforms", platformsController.getPlatforms)
platformRoute.put("/platforms/:id", validateSchemas(platformSchema), platformsController.updatePlatform)

export default platformRoute