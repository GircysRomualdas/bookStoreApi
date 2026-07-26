# BookStoreAPI

## Requirements

- .NET SDK 10
- Docker
- Entity Framework Core CLI tools

## Installation

1. Clone the repository.

2. Run DB:

```bash
docker compose up -d
```

3. Run migrations:

```bash
dotnet ef database update
```

## Usage

### Run the application

```bash
dotnet run
```
