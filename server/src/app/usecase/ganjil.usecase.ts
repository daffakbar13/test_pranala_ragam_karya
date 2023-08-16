import { HttpStatusCode } from "axios";
import { Response } from "../response";

export namespace GanjilUsecase {
  export function GenerateGanjil(value: number) {
    const result: number[] = [];
    for (let i = 1; i <= value; i++) {
      if (i % 2 !== 0) {
        result.push(i);
      }
    }

    return Response.BaseResponse(HttpStatusCode.Ok, result);
  }
}
