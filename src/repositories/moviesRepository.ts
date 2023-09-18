import { db } from "../database"
import { CreateMovie, Movie } from "protocols"

async function insert(movie: CreateMovie){
  return await db.query<CreateMovie>(
    `INSERT INTO 
        movies (name, ano, "plataformaId", genero, assistido)
     VALUES ($1,$2,$3,$4,$5)
    `, [movie.name, movie.ano,movie.plataformaId, movie.genero,movie.assistido]
  )
}

async function getAllMovies(): Promise<Movie[]> {
  const movies = await db.query<Movie>(`SELECT * FROM movies`)
  return movies.rows
}
async function update(movie:Movie) {
  return await db.query(`
  UPDATE movies 
  SET name = $2, ano = $3, "plataformaId" = $4, genero = $5, assistido = $6 
  WHERE id=$1`, [movie.id, movie.name, movie.ano,movie.plataformaId, movie.genero,movie.assistido])
}

export const moviesRepository ={
  insert,
  getAllMovies,
  update
}