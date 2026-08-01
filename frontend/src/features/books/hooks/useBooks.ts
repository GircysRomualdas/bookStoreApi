import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import type { ApiError } from "../../../shared/types/error";
import mapErrorToApiError from "../../../shared/mappers/mapErrorToApiError";
import { getBooks } from "../api/booksApi";

export default function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setLoading(true);
        setError(null);
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        setError(mapErrorToApiError(err));
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);
  return { books, loading, error };
}
