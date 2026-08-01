import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import type { ApiError } from "../../../shared/types/error";
import mapErrorToApiError from "../../../shared/mappers/mapErrorToApiError";
import { getBook } from "../api/booksApi";

export default function useBook(id?: string) {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    async function fetchBook() {
      if (!id) {
        setBook(null);
        setError(null);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const data = await getBook(id);
        setBook(data);
      } catch (err) {
        setError(mapErrorToApiError(err));
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id]);
  return { book, loading, error };
}
