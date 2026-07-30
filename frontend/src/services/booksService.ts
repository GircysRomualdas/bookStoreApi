import {
  getBook,
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../api/booksApi";
import type { Book, CreateBook } from "../types/book";

export const booksService = {
  getAll(): Promise<Book[]> {
    return getBooks();
  },
  getOne(id: string): Promise<Book> {
    return getBook(id);
  },
  create(data: CreateBook): Promise<Book> {
    return createBook(data);
  },
  update(id: string, data: CreateBook): Promise<Book> {
    return updateBook(id, data);
  },
  delete(id: string): Promise<boolean> {
    return deleteBook(id);
  },
};
