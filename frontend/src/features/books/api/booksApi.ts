import type { Book, CreateBook } from "../types/book";
import { ApiClient } from "../../../shared/api/client";

const baseUrl = "http://localhost:5025/api/v1/books";

export async function getBooks(): Promise<Book[]> {
  return ApiClient<Book[]>(baseUrl);
}

export async function getBook(id: string): Promise<Book> {
  const url = `${baseUrl}/${id}`;
  return ApiClient<Book>(url);
}

export async function createBook(book: CreateBook): Promise<Book> {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  };
  return ApiClient<Book>(baseUrl, options);
}

export async function updateBook(id: string, book: CreateBook): Promise<Book> {
  const url = `${baseUrl}/${id}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  };
  return ApiClient<Book>(url, options);
}

export async function deleteBook(id: string): Promise<void> {
  const url = `${baseUrl}/${id}`;
  const options = {
    method: "DELETE",
  };
  return ApiClient<void>(url, options);
}
