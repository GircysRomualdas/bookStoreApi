import type { ApiError } from "../types/error";
import styles from "./Error.module.css";

export default function Error({ error }: { error: ApiError }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{error.title}</h2>
      <p className={styles.message}>{error.message}</p>
      <p className={styles.status}>Status: {error.statusCode}</p>
    </div>
  );
}
