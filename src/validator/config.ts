import { createTaskSchema, deleteTaskSchema } from "../schema";

const requestValidationConfig = {
  "/tasks/": {
    requestSchema: createTaskSchema,
    method: "POST",
  },
  "/tasks/:id": {
    requestSchema: deleteTaskSchema,
    method: "DELETE",
  },
};

export default requestValidationConfig;
