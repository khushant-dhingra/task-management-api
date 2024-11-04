import { PartialResponse } from "../../types";
import { taskServiceInstance } from "../../services";
import { Task } from "../../database/entity/task";

type GetAllTasks = () => Promise<PartialResponse<Task[]>>;

export const getAllTasks: GetAllTasks = async () => {
  // Call the getAllTasks method from the taskServiceInstance
  return await taskServiceInstance.getAllTasks();
};
