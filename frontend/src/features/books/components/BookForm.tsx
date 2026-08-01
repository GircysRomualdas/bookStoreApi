import { useState } from "react";
import type { CreateBook } from "../types/book";
import validateBook from "../validation/validateBook";

export default function BookForm({
  onSubmit,
  loading,
  initialValues,
}: {
  onSubmit: (data: CreateBook) => Promise<void>;
  loading?: boolean;
  initialValues?: CreateBook;
}) {
  const [validateErrors, setValidateErrors] = useState<Record<string, string>>(
    {},
  );

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
      setValidateErrors(validationErrors);
      return;
    }
    setValidateErrors({});

    await onSubmit(book);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={loading}>
        <div>
          {validateErrors.title && (
            <div>
              <p>{validateErrors.title}</p>
            </div>
          )}
          <label htmlFor="title">Title</label>
          <input id="title" name="title" defaultValue={initialValues?.title} />
        </div>

        <div>
          {validateErrors.author && (
            <div>
              <p>{validateErrors.author}</p>
            </div>
          )}
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            defaultValue={initialValues?.author}
          />
        </div>

        <div>
          {validateErrors.description && (
            <div>
              <p>{validateErrors.description}</p>
            </div>
          )}
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            defaultValue={initialValues?.description}
          />
        </div>

        <div>
          {validateErrors.category && (
            <div>
              <p>{validateErrors.category}</p>
            </div>
          )}
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            defaultValue={initialValues?.category}
          />
        </div>

        <div>
          {validateErrors.language && (
            <div>
              <p>{validateErrors.language}</p>
            </div>
          )}
          <label htmlFor="language">Language</label>
          <input
            id="language"
            name="language"
            defaultValue={initialValues?.language}
          />
        </div>

        <div>
          {validateErrors.totalPages && (
            <div>
              <p>{validateErrors.totalPages}</p>
            </div>
          )}
          <label htmlFor="totalPages">Total Pages</label>
          <input
            id="totalPages"
            name="totalPages"
            type="number"
            defaultValue={initialValues?.totalPages}
          />
        </div>
      </fieldset>

      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
