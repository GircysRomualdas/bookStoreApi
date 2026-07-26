using BookStoreApi.Endpoints;
using BookStoreApi.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace BookStoreApi;

public class Program {
  public static void Main() {
    var builder = WebApplication.CreateBuilder();
    builder.AddApplicationServices();
    builder.Services.AddOpenApi();
    builder.Services.AddCors(options => {
      options.AddPolicy("App", policy => {
        policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
      });
    });

    var app = builder.Build();

    if (app.Environment.IsDevelopment()) {
      app.MapOpenApi();
    }

    app.UseHttpsRedirection();
    app.UseCors("App");
    app.UseExceptionHandler();
    app.MapGroup("/api/v1/").WithTags(" Book endpoints").MapBookEndPoint();
    app.Run();
  }
}

