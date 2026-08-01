import { useState } from "react";
import type { CreateBook } from "../../types/book";
import validateBook from "../../services/validateBookService";

export default function BookForm({
  onSubmit,
  loading,
}: {
  onSubmit: (data: CreateBook) => Promise<void>;
  loading?: boolean;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const book: CreateBook = {
      title: String(data.get("title")),
      author: String(data.get("author")),
      description: String(data.get("description")),
      category: String(data.get("category")),
      language: String(data.get("language")),
      totalPages: Number(data.get("totalPages")),
    };

    const validationErrors = validateBook(book);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    await onSubmit(book);
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={loading}>
        <div>
          {errors.title && (
            <div>
              <p>{errors.title}</p>
            </div>
          )}
          <label htmlFor="title">Title</label>
          <input id="title" name="title" />
        </div>

        <div>
          {errors.author && (
            <div>
              <p>{errors.author}</p>
            </div>
          )}
          <label htmlFor="author">Author</label>
          <input id="author" name="author" />
        </div>

        <div>
          {errors.description && (
            <div>
              <p>{errors.description}</p>
            </div>
          )}
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" />
        </div>

        <div>
          {errors.category && (
            <div>
              <p>{errors.category}</p>
            </div>
          )}
          <label htmlFor="category">Category</label>
          <input id="category" name="category" />
        </div>

        <div>
          {errors.language && (
            <div>
              <p>{errors.language}</p>
            </div>
          )}
          <label htmlFor="language">Language</label>
          <input id="language" name="language" />
        </div>

        <div>
          {errors.totalPages && (
            <div>
              <p>{errors.totalPages}</p>
            </div>
          )}
          <label htmlFor="totalPages">Total Pages</label>
          <input id="totalPages" name="totalPages" type="number" />
        </div>
      </fieldset>

      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
