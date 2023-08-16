import { Request, Response as ExpressResult } from "express";
import { SegitigaUsecase } from "../usecase/segitiga.usecase";
import { Response } from "../response";

export namespace SegitigaController {
  export function GenerateSegitiga(req: Request, res: ExpressResult) {
    const result = SegitigaUsecase.GenerateSegitiga(req.body.value);
    Response.SendResponse(res, result);
  }
}
