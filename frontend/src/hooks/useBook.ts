import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import type { ApiError } from "../types/error";
import { getBook } from "../api/booksApi";
import ApiException from "../exceptions/ApiException";

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
        if (err instanceof ApiException) {
          setError(err.apiError);
        } else {
          setError({
            title: "Unknown Error",
            statusCode: 500,
            message: "Something went wrong",
          });
        }
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id]);
  return { book, loading, error };
}
