import { moviesServices } from "../services/moviesServices";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { Movie } from "protocols"

async function moviesPost(req: Request, res: Response){
  const body = req.body as Movie;

  await moviesServices.createMovies(body)

  res.sendStatus(httpStatus.CREATED)
  
}

export const moviesController = {
  moviesPost
}