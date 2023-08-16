import { Router } from "express";
import { PrimaController } from "../controllers/prima.controller";

const router = Router();
const baseUrl = "/prima";

router.post("/generate", PrimaController.GeneratePrima);

export const PrimaRouter = Router().use(baseUrl, router);
