import express from "express";
import { getEnv } from "./src/configs/env";
import { AppRouter } from "./src/app/routes/routes";
import { Constant } from "./src/shared/constants";
import { format } from "util";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(AppRouter);

console.log(Constant.TRY_START_SERVER);
app.listen(getEnv("APP_PORT"), () => {
  console.log(
    format(Constant.SERVER_STARTED, getEnv("APP_HOST"), getEnv("APP_PORT"))
  );
});
