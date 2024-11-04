import Joi from "joi";

export const createTask = Joi.object({
  description: Joi.string().required(),
});
