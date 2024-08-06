const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

let users = [
  { id: 1, name: "Jhon", email: "jhon@gmail.com" },
  { id: 2, name: "Doe", email: "doe@gmail.com" },
];
app.get("/", (req, res) => {
  res.send("This is express learner put!!!");
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex !== -1) {
    users[userIndex] = { id: parseInt(id), name, email };
    res.json(users[userIndex]);
  } else {
    res.status(404).send("User not found!!");
  }
});

app.listen(port, () => {
  console.log(`This is running on port ${port}`);
});
