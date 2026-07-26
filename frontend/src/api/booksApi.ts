const baseUrl = "";

export async function getBooks() {
  const endpint = "";
  const response = await fetch(url);
  if (!response.ok) {
    return;
  }

  const result = await response.json();
  return result;
}

export async function getBook(id) {}

export async function createBook(book) {}

export async function updateBook(id, book) {}

export async function deleteBook(id) {}
