import { db } from "../database"

async function insert(name: string){
  return await db.query(
    `INSERT INTO plataforma (name) VALUES ($1)
    `, [name]
  )
}

export const platformsRepository ={
  insert
}