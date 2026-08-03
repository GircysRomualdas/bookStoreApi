using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using BookApi.Contracts;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace BookApi.Exceptions;

class GlobalExceptionHandler : IExceptionHandler {
  private readonly ILogger<GlobalExceptionHandler> _logger;
  public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger) {
    _logger = logger;
  }

  public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken) {
    _logger.LogError(exception, "An error occurred while processing your request");
    var errorResponse = new ErrorResponse {
      Message = exception.Message,
      Title = exception.GetType().Name
    };

    switch (exception) {
      case BadHttpRequestException:
        errorResponse.StatusCode = (int)HttpStatusCode.BadRequest;
        break;
      case NoBookFoundException:
      case BookDoesNotExistException:
        errorResponse.StatusCode = (int)HttpStatusCode.NotFound;
        break;
      default:
        errorResponse.StatusCode = (int)HttpStatusCode.InternalServerError;
        break;
    }

    httpContext.Response.StatusCode = errorResponse.StatusCode;

    await httpContext.Response.WriteAsJsonAsync(errorResponse, cancellationToken);

    return true;
  }
}