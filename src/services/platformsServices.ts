import { platformsRepository } from "../repositories/platformsRepository"

async function createPlatforms(name: string){
  await platformsRepository.insert(name)
  
}

async function getAllPlatforms() {
  const platform = await platformsRepository.getPlatforms()
  return  platform
}
export const platformsServices = { 
  createPlatforms,
  getAllPlatforms
}