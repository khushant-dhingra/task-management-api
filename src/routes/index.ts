import { Router } from "express";
import task from "./tasks";

const routes = Router();
routes.use("/tasks", task); //configure endpoint for tasks

export default routes;
