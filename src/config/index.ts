import { Env, DB } from "./index.types";
import dotenv from "dotenv";

dotenv.config({
  path: `${__dirname}/../../.env`,
});

type Config = {
  env: Env;
  db: DB;
};

const config: Config = {
  env: {
    SERVER_PORT: process?.env?.SERVER_PORT || "3000",
    BASE_URL: process?.env?.BASE_URL,
    ALLOWED_ORIGINS: process?.env?.ALLOWED_ORIGINS?.split(","),
  },
  db: {
    DIRECTORY_SOURCE: process?.env?.DATABASE_DIRECTORY_SRC || "",
  },
};

export { config };
