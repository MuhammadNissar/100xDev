//creating http server
// using express
// node default library is express - no

var users = [
  {
    name: "Jhon",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

const express = require("express");
const app = express();
//this will use to read the json data from the body
app.use(express.json());

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

app.get("/", (req, res) => {
  const num = req.query.n;
  const ans = sum(num);
  res.send("Hi there " + ans);
});
app.get("/count", (req, res) => {
  console.log(users[0].kidneys.length);
  const healtyKindneys = users[0].kidneys.filter((val) => val.healthy === true);
  let healthyKidneysCount = healtyKindneys.length;
  res.json({ healthyKidneysCount });
});
app.post("/pushKidney", (req, res) => {
  const ishealthey = req.body.ishealthey;
  users[0].kidneys.push({
    healthy: ishealthey,
  });
  res.json({
    msg: "done",
  });
});
app.put("/putKidney", (req, res) => {
  const val = req.body.val;
  users.forEach((user) => {
    user.kidneys.forEach((item) => {
      item.healthy == val;
    });
  });

  res.json({
    mesg: "done",
  });
});
app.listen(3000);
