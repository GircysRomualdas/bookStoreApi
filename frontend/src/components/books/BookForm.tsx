import type { CreateBook } from "../../types/book";

export default function BookForm({
  onSubmit,
}: {
  onSubmit: (data: CreateBook) => Promise<void>;
}) {
  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const book: CreateBook = {
      title: data.get("title") as string,
      author: data.get("author") as string,
      description: data.get("description") as string,
      category: data.get("category") as string,
      language: data.get("language") as string,
      totalPages: Number(data.get("totalPages")),
    };
    await onSubmit(book);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>

      <div>
        <label htmlFor="author">Author</label>
        <input id="author" name="author" />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <input id="category" name="category" />
      </div>

      <div>
        <label htmlFor="language">Language</label>
        <input id="language" name="language" />
      </div>

      <div>
        <label htmlFor="totalPages">Total Pages</label>
        <input id="totalPages" name="totalPages" type="number" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
