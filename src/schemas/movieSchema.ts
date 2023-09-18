import Joi from "joi"
import { Movie } from "protocols"

const movieSchema = Joi.object<Movie>({
  name: Joi.string().max(99).min(3).required(),
  year:Joi.string().regex(/^\d{4}$/).required(),
  platformId:Joi.number().required(),
  genre:Joi.string().required(),
  watched:Joi.boolean(),
  note: Joi.string()

})
export default movieSchema