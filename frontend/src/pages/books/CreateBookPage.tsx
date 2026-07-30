import BookForm from "../../components/books/BookForm";
import useCreateBook from "../../hooks/useCreateBook";
import type { CreateBook } from "../../types/book";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error";

export default function CreateBookPage() {
  const { createBook, loading, error } = useCreateBook();
  const navigate = useNavigate();

  async function handleSubmit(data: CreateBook) {
    const book = await createBook(data);
    if (book) navigate(`/books/${book.id}`);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <Error error={error} />;

  return (
    <>
      <h1>Create book page</h1>
      <BookForm onSubmit={handleSubmit} />
    </>
  );
}
