// Don't delete code bellow and this code must be at the bottom of the file

// 1. Create Book
type Book = {
  title: string;
  author: string;
  year: number;
};

// 2. Create Books Array
const books: Book[] = [];

// 3. Add Book
function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  books.push(newBook);

  console.log(`Book added: "${title}" by ${author} (${year})`);
}

// 4. List Books
function listBooks(): void {
  console.log("All Books:");

  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// 5. Search Book
function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  const results = books.filter((book) => book.title.includes(title));

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  results.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

export { addBook, listBooks, searchBook };
