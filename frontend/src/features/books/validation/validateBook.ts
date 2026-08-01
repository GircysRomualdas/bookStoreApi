import type { CreateBook } from "../types/book";

export default function validateBook(book: CreateBook): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!book.title.trim()) errors.title = "Title is required";
  if (!book.author.trim()) errors.author = "Author is required";
  if (!book.description.trim()) errors.description = "Description is required";
  if (!book.category.trim()) errors.category = "Category is required";
  if (!book.language.trim()) errors.language = "Language is required";
  if (book.totalPages <= 0) errors.totalPages = "Pages must be greater than 0";

  return errors;
}
