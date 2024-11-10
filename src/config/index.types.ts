export type Env = {
  SERVER_PORT: string;
  BASE_URL: string | undefined;
  ALLOWED_ORIGINS: string[] | undefined;
};

export type DB = { DIRECTORY_SOURCE: string };
