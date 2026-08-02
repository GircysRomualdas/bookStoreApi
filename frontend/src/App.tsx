import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BooksPage from "./features/books/pages/BooksPage";
import BookDetailsPage from "./features/books/pages/BookDetailsPage";
import CreateBookPage from "./features/books/pages/CreateBookPage";
import EditBookPage from "./features/books/pages/EditBookPage";
import Navbar from "./shared/components/Navbar";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/books" />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:id" element={<BookDetailsPage />} />
            <Route path="/books/create" element={<CreateBookPage />} />
            <Route path="/books/:id/edit" element={<EditBookPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
