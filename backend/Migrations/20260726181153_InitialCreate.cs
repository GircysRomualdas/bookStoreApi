using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BookApi.Migrations {
    /// <inheritdoc />
    public partial class InitialCreate : Migration {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder) {
            migrationBuilder.EnsureSchema(
                name: "bookapi");

            migrationBuilder.CreateTable(
                name: "Books",
                schema: "bookapi",
                columns: table => new {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Author = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    Category = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Language = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    TotalPages = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table => {
                    table.PrimaryKey("PK_Books", x => x.Id);
                });

            migrationBuilder.InsertData(
                schema: "bookapi",
                table: "Books",
                columns: new[] { "Id", "Author", "Category", "Description", "Language", "Title", "TotalPages" },
                values: new object[,]
                {
                    { new Guid("3c7e9b12-5a48-4d90-a621-2f8b6c4e0d73"), "Harper Lee", "Fiction", "A novel about the serious issues of rape and racial inequality.", "English", "To Kill a Mockingbird", 281 },
                    { new Guid("6a1f4e83-9d25-4b70-b638-5c2e8a7f1d94"), "George Orwell", "Fiction", "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism. ", "English", "1984", 328 },
                    { new Guid("8f2d4a91-7c35-4b6e-9d12-1a3f5e7c9b20"), "Paulo Coelho", "Fiction", "The Alchemist follows the journey of an Andalusian shepherd", "English", "The Alchemist", 208 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder) {
            migrationBuilder.DropTable(
                name: "Books",
                schema: "bookapi");
        }
    }
}
