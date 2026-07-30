import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import type { ApiError } from "../types/error";
import mapError from "../services/errorService";
import { booksService } from "../services/booksService";

export default function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await booksService.getAll();
        setBooks(data);
      } catch (err) {
        setError(mapError(err));
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);
  return { books, loading, error };
}
