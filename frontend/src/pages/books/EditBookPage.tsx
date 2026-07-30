import { useParams } from "react-router-dom";
import BookForm from "../../components/books/BookForm";

export default function EditBookPage() {
  const { id } = useParams();
  return (
    <>
      <h1>Edit book page</h1>
      <h1>Book ID: {id} </h1>
      <BookForm />
    </>
  );
}
