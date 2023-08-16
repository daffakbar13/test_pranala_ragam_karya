import { Router } from "express";
import { SegitigaRouter } from "./segitiga.routes";
import { PrimaRouter } from "./prima.routes";
import { GanjilRouter } from "./ganjil.routes";

const router = Router();

router.use(SegitigaRouter);

router.use(GanjilRouter);

router.use(PrimaRouter);

export const AppRouter = Router().use("/v1", router);
