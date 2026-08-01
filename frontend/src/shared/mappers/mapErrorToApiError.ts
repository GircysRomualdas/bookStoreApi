import ApiException from "../exceptions/ApiException";
import type { ApiError } from "../types/error";

export default function mapErrorToApiError(err: unknown): ApiError {
  if (err instanceof ApiException) return err.apiError;
  return {
    title: "Unknown Error",
    statusCode: 500,
    message: "Something went wrong",
  };
}
