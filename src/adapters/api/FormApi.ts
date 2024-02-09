import { FormService } from "../../domain/ports/FormService";
import { FormUrlResponse } from "./FormUrlResponse";

export class FormApi {
  _formService = new FormService();

  public getUrl() {
    return FormUrlResponse.from(this._formService.get());
  }
}
