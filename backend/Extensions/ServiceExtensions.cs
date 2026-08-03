using System;
using System.Reflection;
using BookApi.AppContext;
using BookApi.Exceptions;
using BookApi.Interfaces;
using BookApi.Services;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace BookApi.Extensions;

static class ServiceExtensions {
  public static void AddApplicationServices(this IHostApplicationBuilder builder) {
    if (builder == null) throw new ArgumentNullException(nameof(builder));
    if (builder.Configuration == null) throw new ArgumentNullException(nameof(builder.Configuration));

    builder.Services.AddDbContext<ApplicationContext>(configure => {
      configure.UseSqlServer(builder.Configuration.GetConnectionString("sqlConnection"));
    });
    builder.Services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
    builder.Services.AddScoped<IBookService, BookService>();
    builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
    builder.Services.AddProblemDetails();
  }
}