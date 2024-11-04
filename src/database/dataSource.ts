import { DataSource } from "typeorm";
import { Task } from "./entity/task";
import path from "path";
import { config } from "../config";

// Create a new instance of DataSource to connect to the database
export const AppDataSource = new DataSource({
  type: "sqljs",
  location: path.join(__dirname, config.db.DIRECTORY_SOURCE),
  autoSave: true,
  entities: [Task],
  synchronize: true,
  subscribers: [],
  migrations: [],
});

// Initialize the DataSource
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
