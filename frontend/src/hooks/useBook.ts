import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import type { ApiError } from "../types/error";
import { getBook } from "../api/booksApi";
import mapError from "../services/errorService";

export default function useBook(id?: string) {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        if (!id) return;
        const data = await getBook(id);
        setBook(data);
      } catch (err) {
        setError(mapError(err));
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id]);
  return { book, loading, error };
}
