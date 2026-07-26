import { useParams } from "react-router-dom";

export default function EditBookPage() {
  const { id } = useParams();
  return (
    <>
      <h1>Edit book page</h1>
      <h1>Book ID: {id} </h1>
    </>
  );
}
