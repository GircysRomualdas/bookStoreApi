import { Link, useNavigate, useParams } from "react-router-dom";
import useBook from "../hooks/useBook";
import Error from "../../../shared/components/Error";
import useDeleteBook from "../hooks/useDeleteBook";
import styles from "./BookDetailsPage.module.css";

export default function BookDetailsPage() {
  const { id } = useParams();
  const { book, loading: bookLoading, error: bookError } = useBook(id);
  const {
    deleteBook,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteBook();
  const navigate = useNavigate();

  if (!id) return <p>Book not found</p>;
  if (bookLoading) return <p>Loading...</p>;
  if (bookError) return <Error error={bookError} />;
  if (!book) return <p>Book not found</p>;

  async function handleDelete() {
    if (!id) return;
    const success = await deleteBook(id);
    if (success) navigate("/");
  }
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Book</h1>
      <div className={styles.details}>
        <div className={styles.row}>
          <span className={styles.label}>Title:</span>
          <span className={styles.value}>{book.title}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Author:</span>
          <span className={styles.value}>{book.author}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Category:</span>
          <span className={styles.value}>{book.category}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Language:</span>
          <span className={styles.value}>{book.language}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Total pages:</span>
          <span className={styles.value}>{book.totalPages}</span>
        </div>
        <div>
          <span className={styles.label}>Description</span>

          <p className={styles.description}>{book.description}</p>
        </div>
      </div>
      {deleteError && (
        <div className={styles.error}>
          <Error error={deleteError} />
        </div>
      )}
      <div className={styles.actions}>
        <Link className={styles.editButton} to={`/books/${book.id}/edit`}>
          Edit
        </Link>

        <button
          className={styles.deleteButton}
          onClick={handleDelete}
          disabled={deleteLoading}
        >
          {deleteLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
