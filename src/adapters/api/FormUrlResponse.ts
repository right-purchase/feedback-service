import { Form } from "../../domain/model/Form";
import { ServerError } from "../../error/ServerError";
import { TApiResponse } from "../../types/ApiResponse";
import { TErrorApiResponse } from "../../types/ErrorApiResponse";
import { TValueBody } from "../../types/ValueApiResponse";

export class FormUrlResponse {
  static from(form: Form): TApiResponse<TValueBody | TErrorApiResponse> {
    try {
      return {
        message: {
          value: form.getUrl(),
        },
        status: 200,
      };
    } catch (error) {
      const serverError = ServerError.from(error);
      return {
        message: {
          error: serverError.message,
          status: serverError.status,
        },
        status: serverError.status,
      };
    }
  }
}
