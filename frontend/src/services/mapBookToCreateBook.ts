import type { Book, CreateBook } from "../types/book";

export default function mapBookToCreateBook(book: Book): CreateBook {
  return {
    title: book.title,
    author: book.author,
    description: book.description,
    category: book.category,
    language: book.language,
    totalPages: book.totalPages,
  };
}
