import { useState } from "react";
import type { ApiError } from "../../../shared/types/error";
import mapErrorToApiError from "../../../shared/mappers/mapErrorToApiError";
import { deleteBook as deleteBookApi } from "../api/booksApi";

export default function useDeleteBook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  async function deleteBook(id: string) {
    try {
      setLoading(true);
      setError(null);
      await deleteBookApi(id);
      return true;
    } catch (err) {
      setError(mapErrorToApiError(err));
      return false;
    } finally {
      setLoading(false);
    }
  }
  return { deleteBook, loading, error };
}
