import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import BooksPage from "./pages/books/BooksPage";
import BookDetailsPage from "./pages/books/BookDetailsPage";
import CreateBookPage from "./pages/books/CreateBookPage";
import EditBookPage from "./pages/books/EditBookPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/books/create" element={<CreateBookPage />} />
          <Route path="/books/:id/edit" element={<EditBookPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
