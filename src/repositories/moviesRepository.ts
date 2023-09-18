import { db } from "../database"
import { Count, CreateMovie, Movie } from "protocols"

async function insert(movie: CreateMovie){
  return await db.query<CreateMovie>(
    `INSERT INTO 
        movies (name, year, "platformId", genre, watched)
     VALUES ($1,$2,$3,$4,$5)
    `, [movie.name, movie.year,movie.platformId, movie.genre,movie.watched]
  )
}

async function getAllMovies(): Promise<Movie[]> {
  const movies = await db.query<Movie>(`SELECT * FROM movies`)
  return movies.rows
}
async function countByPlatform(): Promise<number[]> {
  const movie = await db.query(`
  SELECT p.name AS platform, 
  COUNT(m.id) AS quantidade 
  FROM platforms p 
  LEFT JOIN movies AS M ON p.id = m."platformId" 
  GROUP BY p.name
  `)

  return movie.rows
  
}

async function update(movie:Movie) {
  return await db.query(`
  UPDATE movies 
  SET watched = $2, note = $3
  WHERE id=$1`, [movie.id, movie.watched, movie.note])
}
async function deleteMovie(id:number) {
  return await db.query(`
  DELETE FROM movies WHERE id =$1`, [id])
}

export const moviesRepository ={
  insert,
  getAllMovies,
  update,
  deleteMovie,
  countByPlatform
  
}