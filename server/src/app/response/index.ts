import { Response as ExpressResponse } from "express";

export namespace Response {
  export function BaseResponse<T = null>(status: number, data: T) {
    let message: string;
    if (status < 400) {
      message = "Ok";
    } else if (status < 500) {
      message = "error";
    } else {
      message = "internal error";
    }
    return {
      data,
      status,
      message,
    };
  }

  export function SendResponse(
    res: ExpressResponse,
    payload: ReturnType<typeof BaseResponse>
  ) {
    res.status(payload.status).json(payload);
  }
}
