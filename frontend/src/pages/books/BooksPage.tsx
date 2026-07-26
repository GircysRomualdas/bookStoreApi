import useBooks from "../../hooks/useBooks";
import BookCard from "../../components/books/BookCard";

export default function BooksPage() {
  const { books, loading } = useBooks();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
