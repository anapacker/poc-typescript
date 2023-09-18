import { db } from "../database"
import { CreateMovie } from "protocols"

async function insert(movie: CreateMovie){
  return await db.query<CreateMovie>(
    `INSERT INTO 
        movies (name, ano, "plataformaId", genero, assistido)
     VALUES ($1,$2,$3,$4,$5)
    `, [movie.name, movie.ano,movie.plataformaId, movie.genero,movie.assistido]
  )
}

export const moviesRepository ={
  insert
}