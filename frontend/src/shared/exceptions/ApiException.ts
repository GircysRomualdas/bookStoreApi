import type { ApiError } from "../types/error";

export default class ApiException extends Error {
  public readonly apiError: ApiError;

  constructor(error: ApiError) {
    super(error.message);

    this.apiError = error;
    this.name = "ApiException";

    Object.setPrototypeOf(this, ApiException.prototype);
  }
}
