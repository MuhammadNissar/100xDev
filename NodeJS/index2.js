const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("This is express learner!!!");
});

app.get("/charan", (req, res) => {
  res.json({
    Name: "Charan",
    age: 26,
  });
});
app.get("/nissar", (req, res) => {
  res.json({
    Name: "Nissar",
    age: 25,
  });
});

app.post("/learningNode", (req, res) => {
  console.log(req.headers["authorization"]);
  console.log(req.body.name);
  res.send("Data Recieved");
});

app.listen(port, () => {
  console.log(`This is example app is listening to ${port}`);
});
