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

  return response.json();
}
