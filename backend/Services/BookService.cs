using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStoreApi.AppContext;
using BookStoreApi.Contracts;
using BookStoreApi.Interfaces;
using BookStoreApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace BookStoreApi.Services;

class BookService : IBookService {
  private readonly ApplicationContext _context;
  private readonly ILogger<BookService> _logger;
  public BookService(ApplicationContext context, ILogger<BookService> logger) {
    _context = context;
    _logger = logger;
  }

  private BookResponse MapBookToResponse(BookModel book) {
    return new BookResponse {
      Id = book.Id,
      Title = book.Title,
      Author = book.Author,
      Description = book.Description,
      Category = book.Category,
      Language = book.Language,
      TotalPages = book.TotalPages
    };
  }
  public async Task<BookResponse> AddBookAsync(CreateBookRequest createBookRequest) {
    try {
      var book = new BookModel {
        Title = createBookRequest.Title,
        Author = createBookRequest.Author,
        Description = createBookRequest.Description,
        Language = createBookRequest.Language,
        TotalPages = createBookRequest.TotalPages
      };
      _context.Books.Add(book);
      await _context.SaveChangesAsync();
      _logger.LogInformation("Book added successfully.");

      return MapBookToResponse(book);
    }
    catch (Exception ex) {
      _logger.LogError($"Error adding book: {ex.Message}");
      throw;
    }
  }
  public async Task<BookResponse?> GetBookByIdAsync(Guid id) {
    try {
      var book = await _context.Books.FindAsync(id);
      if (book == null) {
        _logger.LogWarning($"Book with ID {id} not found.");
        return null;
      }
      return MapBookToResponse(book);
    }
    catch (Exception ex) {
      _logger.LogError($"Error retrieving book: {ex.Message}");
      throw;
    }
  }
  public async Task<IEnumerable<BookResponse>> GetBooksAsync() {
    try {
      var books = await _context.Books.ToListAsync();
      return books.Select(book => MapBookToResponse(book));
    }
    catch (Exception ex) {
      _logger.LogError($"Error retrieving books: {ex.Message}");
      throw;
    }
  }
  public async Task<BookResponse?> UpdateBookAsync(Guid id, UpdateBookRequest book) {
    try {
      var existingBook = await _context.Books.FindAsync(id);
      if (existingBook == null) {
        _logger.LogWarning($"Book with ID {id} not found.");
        return null;
      }

      existingBook.Title = book.Title;
      existingBook.Author = book.Author;
      existingBook.Description = book.Description;
      existingBook.Category = book.Category;
      existingBook.Language = book.Language;
      existingBook.TotalPages = book.TotalPages;

      await _context.SaveChangesAsync();
      _logger.LogInformation("Book updated successfully.");

      return MapBookToResponse(existingBook);
    }
    catch (Exception ex) {
      _logger.LogError($"Error updating book: {ex.Message}");
      throw;
    }
  }
  public async Task<bool> DeleteBookAsync(Guid id) {
    try {
      var book = await _context.Books.FindAsync(id);
      if (book == null) {
        _logger.LogWarning($"Book with ID {id} not found.");
        return false;
      }

      _context.Books.Remove(book);
      await _context.SaveChangesAsync();
      _logger.LogInformation($"Book with ID {id} deleted successfully.");
      return true;
    }
    catch (Exception ex) {
      _logger.LogError($"Error deleting book: {ex.Message}");
      throw;
    }
  }
}
