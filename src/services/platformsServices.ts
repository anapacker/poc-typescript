import { platformsRepository } from "../repositories/platformsRepository"

async function createPlatforms(name: string){
  await platformsRepository.insert(name)
  
}

async function getAllPlatforms() {
  const platform = await platformsRepository.getPlatforms()
  return  platform
}

async function updatePlatformById(name: string, id:number) {
  await platformsRepository.update(name, id)
}
export const platformsServices = { 
  createPlatforms,
  getAllPlatforms,
  updatePlatformById
}