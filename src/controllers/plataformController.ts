import { platformsServices } from "../services/platformsServices";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function platformsPost(req: Request, res: Response){
  const {name} = req.body

  await platformsServices.createPlatforms(name)

  res.sendStatus(httpStatus.CREATED)
  
}

async function getPlatforms(req: Request, res: Response) {
  const platform = await platformsServices.getAllPlatforms()
  res.send(platform)
}

async function updatePlatform(req:Request, res:Response) {
  const {name} = req.body
  const id = parseInt(req.params.id)

  await platformsServices.updatePlatformById(name, id)

  res.sendStatus(httpStatus.OK)
}
export const platformsController = {
 platformsPost,
 getPlatforms,
 updatePlatform
}