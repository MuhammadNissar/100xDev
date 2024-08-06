const express = require("express");
const app = express();
const port = 3000;

app.get("/heatlh-checkup", (req, res) => {
  const kidnyId = req.query.kidnyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "nissar" || password != "pass") {
    res.status(403).json({
      msg: "User does not exist!!!",
    });
    return;
  }

  if (kidnyId != 1 && kidnyId != 2) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
    return;
  }

  res.json({
    msg: "Checkup is done",
  });
});

app.listen(port);
