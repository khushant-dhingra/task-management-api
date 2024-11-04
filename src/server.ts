import express from "express";
import { config } from "./config";
import routes from "./routes";

(async () => {
  try {
    const server = express();

    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());

    server.use(routes);

    const port = config.env.SERVER_PORT || 3000;

    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (e) {
    console.log("error", { message: e }, `on starting the server`);
    process.exit(1);
  }
})();
