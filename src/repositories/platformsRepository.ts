import { db } from "../database"

async function insert(name: string){
  return await db.query(
    `INSERT INTO plataforma (name) VALUES ($1)
    `, [name]
  )
}
async function getPlatforms() {
  const platform = await db.query(`SELECT * FROM plataforma`)
  return platform.rows[0]
}

export const platformsRepository ={
  insert,
  getPlatforms
}