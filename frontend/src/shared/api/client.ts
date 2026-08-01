import ApiException from "../exceptions/ApiException";

export async function ApiClient<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    const error = await response.json();
    throw new ApiException(error);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}
