import { db } from "../database"

async function insert(name: string){
  return await db.query(
    `INSERT INTO platforms (name) VALUES ($1)
    `, [name]
  )
}
async function getPlatforms() {
  const platform = await db.query(`SELECT * FROM platforms`)
  return platform.rows
}
async function update(name: string, id:number) {
  return await db.query(`
  UPDATE platforms 
  SET name = $2
  WHERE id=$1`, [id, name])
}

export const platformsRepository ={
  insert,
  getPlatforms,
  update
}