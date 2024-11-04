import { PartialResponse } from "../types";
import { AppDataSource } from "../database/dataSource";
import { Task } from "../database/entity/task";

type GetAllTasks = () => Promise<PartialResponse<Task[]>>;
type CreateTask = (description: string) => Promise<PartialResponse<Task>>;
type DeleteTask = (taskId: number) => Promise<PartialResponse<Task>>;

class TaskService {
  private static instance: TaskService;

  static getInstance(): TaskService {
    return TaskService.instance ?? new TaskService();
  }

  getAllTasks: GetAllTasks = async () => {
    // Get all tasks from the database
    const tasks = await AppDataSource.getRepository(Task).find();

    const output = {
      data: tasks,
    } as PartialResponse<Task[]>;

    return output;
  };

  createTask: CreateTask = async (description: string) => {
    // Create a new task
    const task = new Task();
    task.description = description;
    task.created_at = new Date().toISOString(); //store the current date

    // Save the task to the database
    const addedTask = await AppDataSource.getRepository(Task).save(task);

    const output = {
      data: addedTask,
    } as PartialResponse<Task>;

    return output;
  };

  deleteTask: DeleteTask = async (taskId: number) => {
    // Get the task from the database to validate if it exists
    const task = await AppDataSource.getRepository(Task).findOne({
      where: {
        id: taskId,
      },
    });

    // If the task does not exist, throw an error
    if (!task) {
      throw { code: 404, message: "Task not found" };
    }

    // Delete the task from the database
    await AppDataSource.getRepository(Task).delete(taskId);

    return { data: task };
  };
}

export default TaskService.getInstance();
