using BookStoreApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BookStoreApi.AppContext;

class ApplicationContext(DbContextOptions<ApplicationContext> options) : DbContext(options) {
  private const string DefaultSchema = "bookapi";
  public DbSet<BookModel> Books { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder) {
    base.OnModelCreating(modelBuilder);
    modelBuilder.HasDefaultSchema(DefaultSchema);
    modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationContext).Assembly);
  }
}