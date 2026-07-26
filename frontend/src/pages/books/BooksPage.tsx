import { Link } from "react-router";

export default function BooksPage() {
  return (
    <>
      <div>
        <h1>Books Page</h1>
        <Link to="/books/create">Create Book</Link>
      </div>
      <div>
        <div>
          <Link to="/books/1">Book 1</Link>
        </div>
        <div>
          <Link to="/books/2">Book 2</Link>
        </div>
        <div>
          <Link to="/books/3">Book 3</Link>
        </div>
      </div>
    </>
  );
}
