import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export function getEnv(variable: string) {
  return process.env[variable];
}
