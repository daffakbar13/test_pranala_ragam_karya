import { HttpStatusCode } from "axios";
import { Response } from "../response";

export namespace PrimaUsecase {
  export function GeneratePrima(value: number) {
    const primas: number[] = [];
    for (let i = 1; i <= value; i++) {
      const isPrima = CheckIsPrima(i);
      if (isPrima) {
        primas.push(i);
      }
    }
    return Response.BaseResponse(HttpStatusCode.Ok, primas);
  }

  const CheckIsPrima = (value: number) => {
    let pembagi = 0;
    for (let i = 1; i <= value; i++) {
      if (value % i === 0) {
        pembagi += 1;
      }
    }
    return pembagi === 2;
  };
}
