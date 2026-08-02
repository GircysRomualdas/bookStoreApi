import type { Book } from "../types/book";
import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link to={`/books/${book.id}`}>
      <div className={styles.card}>
        <h2 className={styles.title}>{book.title}</h2>
        <p className={styles.author}>{book.author}</p>
      </div>
    </Link>
  );
}
