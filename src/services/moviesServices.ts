import { moviesRepository } from "../repositories/moviesRepository"
import { CreateMovie } from "protocols"

async function createMovies(movie: CreateMovie){
  await moviesRepository.insert(movie)
  
}
export const moviesServices = { 
  createMovies
}