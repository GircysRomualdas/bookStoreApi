import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import type { CreateBook } from "../types/book";
import useUpdatedBook from "../hooks/useUpdateBook";
import Error from "../../../shared/components/Error";
import useBook from "../hooks/useBook";
import mapBookToCreateBook from "../mappers/mapBookToCreateBook";

export default function EditBookPage() {
  const { id } = useParams();
  const { book, loading: bookLoading, error: bookError } = useBook(id);
  const {
    updateBook,
    loading: updatingBook,
    error: updateBookError,
  } = useUpdatedBook();
  const navigate = useNavigate();

  if (!id) return <p>Book not found</p>;
  if (bookLoading) return <p>Loading...</p>;
  if (bookError) return <Error error={bookError} />;
  if (!book) return <p>Book not found</p>;

  async function handleSubmit(data: CreateBook) {
    if (!id) return;

    const updatedBook = await updateBook(id, data);
    if (updatedBook) navigate(`/books/${updatedBook.id}`);
  }

  return (
    <>
      <h1>Edit Book</h1>
      {updateBookError && <Error error={updateBookError} />}
      <BookForm
        onSubmit={handleSubmit}
        loading={updatingBook}
        initialValues={mapBookToCreateBook(book)}
      />
    </>
  );
}
