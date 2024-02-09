import { JsonObject } from "type-fest";

export type TApiResponse<T extends JsonObject> = {
  message: T;
  status: number;
};
