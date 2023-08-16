import { Request, Response as ExpressResponse } from "express";
import { GanjilUsecase } from "../usecase/ganjil.usecase";
import { Response } from "../response";

export namespace GanjilController {
  export function GenerateGanjil(req: Request, res: ExpressResponse) {
    const result = GanjilUsecase.GenerateGanjil(req.body.value);
    Response.SendResponse(res, result);
  }
}
