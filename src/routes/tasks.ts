import { Router } from "express";
import RouteHandler from "../routeHandler/handler";
import { getAllTasks, createTask, deleteTask } from "../controllers/tasks";

const router = Router();

router.get("/", new RouteHandler(getAllTasks).handleRequest); // to get all tasks
router.post("/", new RouteHandler(createTask).handleRequest); // to create a task
router.delete("/:id", new RouteHandler(deleteTask).handleRequest); // to delete a task

export default router;
