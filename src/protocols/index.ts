export type Movie = {
  id: number
  name:string 
  year:string 
  platformId:number 
  genre:string 
  watched:boolean
  note: string
}

export type CreateMovie = Omit<Movie, "id">

export type Count = {
  plataform:string
  quantidade:number
}