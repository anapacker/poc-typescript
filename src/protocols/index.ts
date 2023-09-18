export type Movie = {
  id: number
  name:string 
  ano:string 
  plataformaId:number 
  genero:string 
  assistido:boolean
}

export type CreateMovie = Omit<Movie, "id">