import { Router } from "express";
import { GanjilController } from "../controllers/ganjil.controller";

const router = Router();
const baseUrl = "/ganjil";

router.post("/generate", GanjilController.GenerateGanjil);

export const GanjilRouter = Router().use(baseUrl, router);
