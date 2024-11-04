//import path from "path";
import { Task } from "../entity/task";

export default {
  typeorm: {
    dataSource: {
      default: {
        type: "sqljs",
        //database: path.join(__dirname, "../../tasks.sqlite"),
        //location: path.join(__dirname, "../../tasks.sqlite"),
        synchronize: true,
        logging: true,
        entities: [Task],
      },
    },
  },
};
