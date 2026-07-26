import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import { getBooks } from "../api/booksApi";

export default function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getBooks();
        setBooks(data);
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);
  return { books, loading };
}
