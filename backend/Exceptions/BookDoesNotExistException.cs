using System;

namespace BookApi.Exceptions;

class BookDoesNotExistException : Exception {
  private int _id { get; set; }
  public BookDoesNotExistException(int id) : base($"Book with id {id} does not exist") {
    _id = id;
  }
}