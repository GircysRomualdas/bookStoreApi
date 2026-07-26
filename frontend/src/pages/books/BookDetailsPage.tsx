import { Link, useParams } from "react-router-dom";
import useBook from "../../hooks/useBook";
import Error from "../../components/Error";

export default function BookDetailsPage() {
  const { id } = useParams();
  const { book, loading, error } = useBook(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <Error error={error} />;
  if (!book) return <p>Book not found</p>;

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
    </>
  );
}
