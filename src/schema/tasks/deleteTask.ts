import Joi from "joi";

export const deleteTask = Joi.object({
  id: Joi.number().required(),
});
