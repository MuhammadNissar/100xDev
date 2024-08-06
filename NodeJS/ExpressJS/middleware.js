const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

function uservalidation(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (!(username === "nissar" && password === "pass")) {
    res.status(404).json({
      msg: "User does not exist!!",
    });
  } else {
    next();
  }
}

function inputValidation(req, res, next) {
  const kidnyID = req.query.kidnyID;
  if (kidnyID != 1 && kidnyID != 2) {
    res.status(411).json({
      msg: "Wrong input",
    });
  } else {
    next();
  }
}

app.get("/checkup", uservalidation, inputValidation, (req, res) => {
  res.json({
    msg: "Your Kidny is fine !!",
  });
});

app.listen(port);
