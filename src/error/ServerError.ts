import { ErrorMap } from "../constants/ErrorMap";

export class ServerError<T extends Error | undefined> extends Error {
  public readonly source: T;

  constructor(
    public readonly message: string = ErrorMap.UNKOWN.message,
    public readonly status: number = ErrorMap.UNKOWN.status,
    source?: T | unknown
  ) {
    super(message);
    this.name = "ServerError";

    if (source instanceof Error) {
      this.source = source as T;
      if (source?.stack) {
        this.stack = source.stack;
      }
    } else {
      this.source = undefined as T;
    }
  }

  static from(source: unknown) {
    if (source instanceof ServerError) {
      return source;
    } else if (source instanceof Error) {
      return new ServerError(
        ErrorMap.UNKOWN.message,
        ErrorMap.UNKOWN.status,
        source
      );
    } else {
      return new ServerError(ErrorMap.UNKOWN.message, ErrorMap.UNKOWN.status);
    }
  }
}
