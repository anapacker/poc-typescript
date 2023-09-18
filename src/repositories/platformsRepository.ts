import { db } from "../database"

async function insert(name: string){
  return await db.query(
    `INSERT INTO plataforma (name) VALUES ($1)
    `, [name]
  )
}
async function getPlatforms() {
  const platform = await db.query(`SELECT * FROM plataforma`)
  return platform.rows
}
async function update(name: string, id:number) {
  return await db.query(`
  UPDATE plataforma 
  SET name = $2
  WHERE id=$1`, [id, name])
}

export const platformsRepository ={
  insert,
  getPlatforms,
  update
}