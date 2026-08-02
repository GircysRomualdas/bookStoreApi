import { useState } from "react";
import type { CreateBook } from "../types/book";
import validateBook from "../validation/validateBook";
import styles from "./BookForm.module.css";

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <fieldset disabled={loading} className={styles.fieldset}>
        <div className={styles.field}>
          {validateErrors.title && (
            <div className={styles.error}>
              <p>{validateErrors.title}</p>
            </div>
          )}
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            className={styles.input}
            id="title"
            name="title"
            defaultValue={initialValues?.title}
          />
        </div>

        <div className={styles.field}>
          {validateErrors.author && (
            <div className={styles.error}>
              <p>{validateErrors.author}</p>
            </div>
          )}
          <label htmlFor="author" className={styles.label}>
            Author
          </label>
          <input
            className={styles.input}
            id="author"
            name="author"
            defaultValue={initialValues?.author}
          />
        </div>

        <div className={styles.field}>
          {validateErrors.description && (
            <div className={styles.error}>
              <p>{validateErrors.description}</p>
            </div>
          )}
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            className={styles.textarea}
            id="description"
            name="description"
            defaultValue={initialValues?.description}
          />
        </div>

        <div className={styles.field}>
          {validateErrors.category && (
            <div className={styles.error}>
              <p>{validateErrors.category}</p>
            </div>
          )}
          <label htmlFor="category" className={styles.label}>
            Category
          </label>
          <input
            className={styles.input}
            id="category"
            name="category"
            defaultValue={initialValues?.category}
          />
        </div>

        <div className={styles.field}>
          {validateErrors.language && (
            <div className={styles.error}>
              <p>{validateErrors.language}</p>
            </div>
          )}
          <label htmlFor="language" className={styles.label}>
            Language
          </label>
          <input
            className={styles.input}
            id="language"
            name="language"
            defaultValue={initialValues?.language}
          />
        </div>

        <div className={styles.field}>
          {validateErrors.totalPages && (
            <div className={styles.error}>
              <p>{validateErrors.totalPages}</p>
            </div>
          )}
          <label htmlFor="totalPages" className={styles.label}>
            Total Pages
          </label>
          <input
            className={styles.input}
            id="totalPages"
            name="totalPages"
            type="number"
            defaultValue={initialValues?.totalPages}
          />
        </div>
      </fieldset>

      <button className={styles.button} type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
