import { Link, useParams } from "react-router-dom";

export default function BookDetailsPage() {
  const { id } = useParams();
  return (
    <>
      <h1>Book details</h1>
      <h1>Book ID: {id}</h1>
      <div>
        <h2>Title: </h2>
        <h2>Author: </h2>
        <h2>Category: </h2>
        <h2>Language: </h2>
        <h2>Total pages: </h2>
        <p>Description: </p>
      </div>
      <Link to={`/books/${id}/edit`}>Edit</Link>
    </>
  );
}
