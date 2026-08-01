import { Link, useNavigate, useParams } from "react-router-dom";
import useBook from "../hooks/useBook";
import Error from "../../../shared/components/Error";
import useDeleteBook from "../hooks/useDeleteBook";

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
    <>
      <h1>Book</h1>
      <div>
        <h2>Title: {book.title} </h2>
        <h2>Author: {book.author} </h2>
        <h2>Category: {book.category} </h2>
        <h2>Language: {book.language} </h2>
        <h2>Total pages: {book.totalPages} </h2>
        <p>Description: {book.description} </p>
      </div>
      <Link to={`/books/${book.id}/edit`}>Edit</Link>
      <div>
        {deleteError && (
          <div>
            <p>{deleteError.message}</p>
          </div>
        )}
        <button onClick={handleDelete} disabled={deleteLoading}>
          {deleteLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </>
  );
}
