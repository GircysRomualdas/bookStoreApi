import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import BooksPage from "./pages/books/BooksPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
