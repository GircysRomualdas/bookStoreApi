# BookStoreAPI

## Requirements

### Backend

- .NET SDK 10
- Docker
- Entity Framework Core tools 10

### Frontend

- Node.js 25
- npm 11

## Installation

1. Clone the repository.

### Backend

1. Run DB:

```bash
docker compose up -d
```

2. Run migrations:

```bash
dotnet ef database update
```

### Frontend

1. Run packages:

```bash
npm install
```

## Usage

1. Run backend:

```bash
dotnet run
```

2. Run frontend:

```bash
npm run dev
```
