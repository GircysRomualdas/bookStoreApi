import type { ApiError } from "../types/error";

export default function Error({ error }: { error: ApiError }) {
  return (
    <div>
      <h2>{error.title}</h2>
      <p>{error.message}</p>
      <p>Status: {error.statusCode}</p>
    </div>
  );
}
