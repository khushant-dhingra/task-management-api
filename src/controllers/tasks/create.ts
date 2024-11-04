import { PartialResponse } from "../../types";
import { taskServiceInstance } from "../../services";
import { Task } from "../../database/entity/task";

type CreateTask = (req) => Promise<PartialResponse<Task>>;

export const createTask: CreateTask = async (req) => {
  const { body } = req;
  return await taskServiceInstance.createTask(body.description);
};
