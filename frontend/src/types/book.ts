export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  language: string;
  totalPages: number;
};

export type CreateBook = Omit<Book, "id">;
