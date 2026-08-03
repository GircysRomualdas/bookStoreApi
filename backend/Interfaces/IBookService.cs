
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BookApi.Contracts;

namespace BookApi.Interfaces;

interface IBookService {
  Task<BookResponse> AddBookAsync(CreateBookRequest createBookRequest);
  Task<BookResponse?> GetBookByIdAsync(Guid id);
  Task<IEnumerable<BookResponse>> GetBooksAsync();
  Task<BookResponse?> UpdateBookAsync(Guid id, UpdateBookRequest updateBookRequest);
  Task<bool> DeleteBookAsync(Guid id);
}