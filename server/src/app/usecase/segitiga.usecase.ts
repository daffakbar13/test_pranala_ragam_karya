import { HttpStatusCode } from "axios";
import { Response } from "../response";

export namespace SegitigaUsecase {
  export function GenerateSegitiga(value: number) {
    const values = String(value).split("");
    const result = values.map((v, i) => {
      const end = new Array(i + 1).fill(0).join("");
      console.log(new Array(i + 1));

      return Number(v.concat(end));
    });

    return Response.BaseResponse(HttpStatusCode.Ok, result);
  }
}
