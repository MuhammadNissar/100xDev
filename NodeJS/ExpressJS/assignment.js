const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");
const { url } = require("inspector");
const path = require("path");
const port = 3000;
const directory = "./files";
const filePath = "./files/a.txt";

app.get("/files", (req, res) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal Server Error" }));
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(files));
  });
});
app.get("/ReadFile", (req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "x-content-Type": "application/json" });
      res.end(JSON.stringify({ error: "internal server error" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  });
});
app.get("/fileName/:name", (req, res) => {
  const file = req.params.name;
  console.log(file);
  const fileName = path.join(directory, file);
  fs.readFile(fileName, (err, data) => {
    res.end(data);
  });
});
app.listen(port);
