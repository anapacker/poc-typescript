import Joi from "joi"

const platformSchema = Joi.object({
  name: Joi.string().max(99).min(3).required()
})
export default platformSchema