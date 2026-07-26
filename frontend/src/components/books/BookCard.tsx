import type { Book } from "../../types/book";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </div>
  );
}
