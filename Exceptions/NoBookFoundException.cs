using System;

namespace BookStoreApi.Exceptions;

class NoBookFoundException : Exception {
  public NoBookFoundException() : base("No books found") { }
}