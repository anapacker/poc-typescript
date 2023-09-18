import Joi from "joi"
import { Movie } from "protocols"

const movieSchema = Joi.object<Movie>({
  name: Joi.string().max(99).min(3).required(),
  ano:Joi.string().regex(/^\d{4}$/).required(),
  plataformaId:Joi.number().required(),
  genero:Joi.string().required(),
  assistido:Joi.boolean()

})
export default movieSchema