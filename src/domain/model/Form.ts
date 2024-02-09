import { ServerError } from "../../error/ServerError";
import { ErrorMap } from "../../constants/ErrorMap";

export class Form {
  public getUrl() {
    try {
      return new URL(String(process.env.FORM_URL)).toString();
    } catch (error) {
      throw new ServerError(
        ErrorMap.FORM_URL_UNDEFINED.message,
        ErrorMap.FORM_URL_UNDEFINED.status,
        error
      );
    }
  }
}
