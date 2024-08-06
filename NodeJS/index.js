const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("I am learning Node.js for backends");
});

// Getting body from POST API without body-parser
app.post("/learningPost", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      const parsedBody = JSON.parse(body);
      console.log(parsedBody);
      res.send("Data received!!");
    } catch (err) {
      res.status(400).send("Invalid JSON");
    }
  });
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
