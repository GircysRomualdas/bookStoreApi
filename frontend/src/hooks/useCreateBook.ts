import { useState } from "react";
import type { Book } from "../types/book";
import type { ApiError } from "../types/error";
import type { CreateBook } from "../types/book";

export default function useCreateBook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
}
