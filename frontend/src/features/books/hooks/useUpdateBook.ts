import { useState } from "react";
import type { ApiError } from "../../../shared/types/error";
import type { CreateBook } from "../types/book";
import { updateBook as updateBookApi } from "../api/booksApi";
import mapErrorToApiError from "../../../shared/mappers/mapErrorToApiError";

export default function useUpdatedBook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  async function updateBook(id: string, data: CreateBook) {
    try {
      setLoading(true);
      setError(null);

      const book = await updateBookApi(id, data);
      return book;
    } catch (err) {
      setError(mapErrorToApiError(err));
    } finally {
      setLoading(false);
    }
  }
  return { updateBook, loading, error };
}
