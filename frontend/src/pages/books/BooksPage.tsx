import useBooks from "../../hooks/useBooks";
import BookCard from "../../components/books/BookCard";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

export default function BooksPage() {
  const { books, loading, error } = useBooks();

  if (loading) return <p>Loading...</p>;
  if (error) return <Error error={error} />;

  return (
    <div>
      <Link to="/books/create">Create</Link>
      <h1>Books</h1>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
