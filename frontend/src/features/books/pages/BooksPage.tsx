import useBooks from "../hooks/useBooks";
import BookCard from "../components/BookCard";
import Error from "../../../shared/components/Error";
import { Link } from "react-router-dom";
import styles from "./BooksPage.module.css";

export default function BooksPage() {
  const { books, loading, error } = useBooks();

  if (loading) return <p>Loading...</p>;
  if (error) return <Error error={error} />;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Books</h1>
        <Link className={styles.createButton} to="/books/create">
          Create
        </Link>
      </div>
      <div className={styles.booksGrid}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
