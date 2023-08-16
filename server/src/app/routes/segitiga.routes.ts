import { Router } from "express";
import { SegitigaController } from "../controllers/segitiga.controller";

const router = Router();
const baseUrl = "/segitiga";

router.post("/generate", SegitigaController.GenerateSegitiga);

export const SegitigaRouter = Router().use(baseUrl, router);
