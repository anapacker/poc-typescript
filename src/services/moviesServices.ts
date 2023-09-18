import { moviesRepository } from "../repositories/moviesRepository"
import { CreateMovie, Movie } from "protocols"

async function createMovies(movie: CreateMovie){
  await moviesRepository.insert(movie)
  
}

async function getAllMovies(): Promise<Movie[]>{
  const movies = await moviesRepository.getAllMovies()
  return movies
}
async function updateMovieById(movie: Movie) {
  await moviesRepository.update(movie)
}
async function deleteMovieById(id: number) {
  await moviesRepository.deleteMovie(id)
  
}
export const moviesServices = { 
  createMovies,
  getAllMovies,
  updateMovieById,
  deleteMovieById
}