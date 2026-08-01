import { useState } from "react";
import type { ApiError } from "../types/error";
import type { CreateBook } from "../types/book";
import { booksService } from "../services/booksService";
import mapError from "../services/mapErrorToApiError";

export default function useUpdatedBook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  async function updateBook(id: string, data: CreateBook) {
    try {
      setLoading(true);
      setError(null);

      const book = await booksService.update(id, data);
      return book;
    } catch (err) {
      setError(mapError(err));
    } finally {
      setLoading(false);
    }
  }
  return { updateBook, loading, error };
}
