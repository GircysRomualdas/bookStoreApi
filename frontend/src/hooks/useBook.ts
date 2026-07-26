import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import type { ApiError } from "../types/error";
import { getBook } from "../api/booksApi";

export default function useBook(id?: string) {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    async function fetchBook() {
      if (!id) return;
      try {
        const data = await getBook(id);
        setBook(data);
      } catch (err) {
        setError(err as ApiError);
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id]);
  return { book, loading, error };
}
