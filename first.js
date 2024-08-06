// let firstName = "Nissar";
// let married = false;

// married
//   ? console.log(`${firstName} is married`)
//   : console.log(`${firstName} is unmarried`);

// const users = [
//   {
//     firstName: "Nissar",
//     age: 25,
//     gender: "male",
//   },
//   {
//     firstName: "smn",
//     age: 26,
//     gender: "male",
//     meta: [1, 2, 3],
//     child: [
//       {
//         name1: "smn",
//         age: 7,
//       },
//       {
//         name1: "smn2",
//         age: 5,
//       },
//     ],
//   },
//   {
//     firstName: "mohammad",
//     age: 25,
//     gender: "male",
//   },
// ];

// console.log(users[1]["child"][0]["age"]);
// function getTime() {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, "0");
//   const mins = now.getMinutes().toString().padStart(2, "0");
//   const seconds = now.getSeconds().toString().padStart(2, "0");
//   const milsec = now.getMilliseconds().toString().padStart(2, "0");
//   console.log(`${hours}:${mins}:${seconds}:${milsec}`);
// }
// // function countDown(from) {
//   let val = from;
//   let inter = setInterval(() => {
//     console.log(val);
//     getTime();
//     val--;

// //     if (val < 0) {
// //       clearInterval(inter);
// //     }
// //   }, 1000);
// // }

// // countDown(30);

// let initialArray = [1, 2, 3];

// function logThing(str) {
//   console.log(str);
// }
// initialArray.forEach(logThing);

// const now = new Date();
// console.log(now.getFullYear());

// const users = '{"name" : "nissar" , "age" : 25 , "gender" : "male"}';

// const user = JSON.parse(users);
// console.log(user["age"]);
// const finalString = JSON.stringify(user);
// console.log(finalString["name"]);

// const obj = {
//   name: "nissar",
//   age: 25,
//   gender: "male",
// };

// let keys = Object.keys(obj);
// console.log(keys);
const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

//my own sync function

// function nissarReadFs(cb) {
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data);
// }
// nissarReadFs(onDone);
// console.log("Hi");

// function nissarReadFs() {
//   return new Promise(function (resolve) {
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       resolve(data);
//     });
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// async function main() {
//   let val = await nissarReadFs();
//   console.log(val);
// }

// main();

// function myOwnSetTimeOut(duration) {
//   let p = new Promise(function (resolve) {
//     setTimeout(resolve, 1000);
//   });
//   return p;
// }

// myOwnSetTimeOut(1000).then(function () {
//   console.log("Hi this is call back");
// });

// function readFile() {
//   let val = new Promise((resolve) => {
//     fs.writeFile("a.txt", "utf-8", (err, data) => {
//       data = data + "This is write";
//       resolve(data);
//     });
//   });
//   return val;
// }
// async function getData() {
//   const data = await readFile();
//   console.log(data);
// }
// getData();
// console.log("Hii");

// function number() {
//   return new Promise((resolve, rejects) => {
//     resolve(10);
//   });
// }

// number()
//   .then((number) => {
//     console.log(number);
//     return number * 10;
//   })
//   .then((number) => {
//     console.log("Second -", number);
//   });

function readAndErase() {
  return new Promise((resolve) => {
    fs.readFile("a.txt", "utf-8", (err, info) => {
      fs.writeFile("a.txt", info.toUpperCase(), (err) => {});
      fs.readFile("a.txt", "utf-8", (err, info1) => {
        resolve(info1);
      });
    });
  });
}

async function getData() {
  let data = await readAndErase();
  console.log(data);
}

getData();
