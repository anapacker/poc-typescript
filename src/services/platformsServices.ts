import { platformsRepository } from "../repositories/platformsRepository"

async function createPlatforms(name: string){
  await platformsRepository.insert(name)
  
}
export const platformsServices = { 
  createPlatforms
}