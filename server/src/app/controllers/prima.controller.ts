import { Request, Response as ExpressResponse } from "express";
import { PrimaUsecase } from "../usecase/prima.usecase";
import { Response } from "../response";

export namespace PrimaController {
  export function GeneratePrima(req: Request, res: ExpressResponse) {
    const result = PrimaUsecase.GeneratePrima(req.body.value);
    Response.SendResponse(res, result);
  }
}
