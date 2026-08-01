import { useState } from "react";
import type { ApiError } from "../types/error";
import type { Book, CreateBook } from "../types/book";
import { booksService } from "../services/booksService";
import mapError from "../services/mapErrorService";

export default function useCreateBook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  async function createBook(data: CreateBook): Promise<Book | null> {
    try {
      setLoading(true);
      setError(null);

      const book = await booksService.create(data);
      return book;
    } catch (err) {
      setError(mapError(err));
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { createBook, loading, error };
}
