using System;

namespace BookApi.Exceptions;

class NoBookFoundException : Exception {
  public NoBookFoundException() : base("No books found") { }
}