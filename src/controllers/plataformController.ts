import { platformsServices } from "../services/platformsServices";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function platformsPost(req: Request, res: Response){
  const {name} = req.body

  await platformsServices.createPlatforms(name)

  res.sendStatus(httpStatus.CREATED)
  
}

export const plataformsController = {
 platformsPost
}