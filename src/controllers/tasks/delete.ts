import { PartialResponse } from "../../types";
import { taskServiceInstance } from "../../services";
import { Task } from "../../database/entity/task";

type DeleteTask = (req) => Promise<PartialResponse<Task>>;

export const deleteTask: DeleteTask = async (req) => {
  const { id } = req.params;
  return await taskServiceInstance.deleteTask(id);
};
