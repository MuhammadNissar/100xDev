const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

let books = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

app.get("/books", (req, res) => {
  res.json(books);
});
app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));
  if (bookIndex !== -1) {
    res.json(books[bookIndex]);
  } else {
    res.status(404).send("Can not find the book in the list!!");
  }
});
//creating new book

app.post("/booksPost", (req, res) => {
  const { title, author, year } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    year,
  };

  app.delete("/DeleteBook/:id", (req, res) => {
    const { id } = req.params;

    const bookId = books.findIndex((book) => book.id === parseInt(id));

    if (bookId !== -1) {
      books.splice(bookId, 1);
      res.send("Book is deleted successfully!!!");
    } else {
      res.status(404).send("Book ID is not found!!!!");
    }
  });

  books.push(newBook);

  res.status(200).send("Addded Book succcessfully!!");
});

app.listen(port, () => {
  console.log(`This is running on port ${port}`);
});
