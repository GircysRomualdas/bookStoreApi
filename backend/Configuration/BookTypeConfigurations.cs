using System;
using BookStoreApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookStoreApi.Configuration;

class BookTypeConfigurations : IEntityTypeConfiguration<BookModel> {
  public void Configure(EntityTypeBuilder<BookModel> builder) {
    builder.ToTable("Books");
    builder.HasKey(x => x.Id);
    builder.Property(x => x.Id).ValueGeneratedOnAdd();
    builder.Property(x => x.Title).IsRequired().HasMaxLength(100);
    builder.Property(x => x.Author).IsRequired().HasMaxLength(100);
    builder.Property(x => x.Description).IsRequired().HasMaxLength(500);
    builder.Property(x => x.Category).IsRequired().HasMaxLength(100);
    builder.Property(x => x.Language).IsRequired().HasMaxLength(50);
    builder.Property(x => x.TotalPages).IsRequired();

    builder.HasData(
      new BookModel {
        Id = Guid.Parse("8f2d4a91-7c35-4b6e-9d12-1a3f5e7c9b20"),
        Title = "The Alchemist",
        Author = "Paulo Coelho",
        Description = "The Alchemist follows the journey of an Andalusian shepherd",
        Category = "Fiction",
        Language = "English",
        TotalPages = 208
      },
      new BookModel {
        Id = Guid.Parse("3c7e9b12-5a48-4d90-a621-2f8b6c4e0d73"),
        Title = "To Kill a Mockingbird",
        Author = "Harper Lee",
        Description = "A novel about the serious issues of rape and racial inequality.",
        Category = "Fiction",
        Language = "English",
        TotalPages = 281
      },
      new BookModel {
        Id = Guid.Parse("6a1f4e83-9d25-4b70-b638-5c2e8a7f1d94"),
        Title = "1984",
        Author = "George Orwell",
        Description = "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism. ",
        Category = "Fiction",
        Language = "English",
        TotalPages = 328
      }
    );
  }
}