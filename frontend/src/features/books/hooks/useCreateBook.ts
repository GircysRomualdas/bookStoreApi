import { useState } from "react";
import type { ApiError } from "../../../shared/types/error";
import type { Book, CreateBook } from "../types/book";
import { createBook as createBookApi } from "../api/booksApi";
import mapErrorToApiError from "../../../shared/mappers/mapErrorToApiError";

export default function useCreateBook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  async function createBook(data: CreateBook): Promise<Book | null> {
    try {
      setLoading(true);
      setError(null);

      const book = await createBookApi(data);
      return book;
    } catch (err) {
      setError(mapErrorToApiError(err));
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { createBook, loading, error };
}
