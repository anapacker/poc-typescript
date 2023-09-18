import { moviesServices } from "../services/moviesServices";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { CreateMovie, Movie } from "protocols"

async function moviesPost(req: Request, res: Response){
  const body = req.body as Movie;

  await moviesServices.createMovies(body)

  res.sendStatus(httpStatus.CREATED)
  
}

async function getMovies(req: Request, res: Response){
  const movie = await moviesServices.getAllMovies()
  res.send(movie)
}

async function countByPlatform(req: Request, res: Response) {
  const count = await moviesServices.countPlatform()
  res.send(count)
}

async function updateMovie(req:Request, res:Response) {
  const body = req.body as CreateMovie
  const id = parseInt(req.params.id)
  const objMovie = {...body, id}

  await moviesServices.updateMovieById(objMovie)

  res.sendStatus(httpStatus.OK)
}
async function deleteMovie(req:Request, res:Response) {
  const id = parseInt(req.params.id)

  await moviesServices.deleteMovieById(id)
  
  res.sendStatus(httpStatus.OK)
}

export const moviesController = {
  moviesPost,
  getMovies,
  updateMovie,
  deleteMovie,
  countByPlatform
}