import type { Book } from "../../types/book";
import { Link } from "react-router-dom";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link to={`/books/${book.id}`}>
      <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
    </Link>
  );
}
