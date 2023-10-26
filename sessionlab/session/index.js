// const http = require("http");
// let users = [
//   { id: 1, name: "ahmed", age: 20 },
//   { id: 2, name: "ali", age: 24 },
//   { id: 3, name: "alaa", age: 30 },
//   { id: 4, name: "Tamer", age: 25 },
//   { id: 5, name: "omar", age: 30 },
// ];
// http
//   .createServer(function (req, res) {
//     if (req.url == "/home" && req.method == "GET") {
//       res.end(JSON.stringify(users));
//     } else if (req.url == "/addUser" && req.method == "POST") {

//       //search by id
// req.on("data", function (x) {
//   let recievedData = JSON.parse(x);
//   let existedUser = users.find((el) => el.id == recievedData.id);
//   console.log(existedUser);
//   if (existedUser) {
//     res.end("user already registered");
//   }
//   else{
//     users.push(recievedData)
//     res.end("added successfully")
//   }
// });

//       //add user and sort in /home

//       //   req.on("data", function (x) {
//       //     console.log(JSON.parse(x));
//       //     users.push(JSON.parse(x));
//       //     users.sort((a, b) => {
//       //       if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
//       //         return -1;
//       //       }
//       //       if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
//       //         return 1;
//       //       }
//       //       return 0;
//       //     });
//       //   });

//       //update
//       req.on("data", function (x) {
//         let receivedData = JSON.parse(x);
//       //check by the id
//         let existingUser = users.find((el) => el.id === receivedData.id);
//       //change the name and the age of this id
//         if (existingUser) {
//           existingUser.name = receivedData.name;
//           existingUser.age = receivedData.age;
//         }
//         else{

//             res.end("not found");
//         }
//       });

//     }

//     //delete
//     // else if (req.url == "/d" && req.method == "DELETE") {
//     //   req.on("data", function (chunk) {
//     //     // console.log(JSON.parse(chunk));
//     //     let received = JSON.parse(chunk);
//     //     let updated = users.filter((el) => el.id != received.id);

//     //     if (updated.length == users.length) {
//     //       res.end("not found");
//     //     } else {
//     //       users = updated;
//     //       res.end("found");
//     //     }
//     //     res.end("hello from delete");
//     //   });
//     // }
//   })
//   .listen(3000);

//express

let posts = [
  { id: 1, name: "facebook", email: "www.facebook.com" },
  { id: 2, name: "twitter", email: "www.twitter.com" },
  { id: 3, name: "instagram", email: "www.instagram.com" },
  { id: 4, name: "linkedin", email: "www.linkedin.com" },
  { id: 5, name: "telegram", email: "www.telegram.com" },
];

import express from "express";

const app = express();

//get all posts
app.get("/getUser", (req, res) => {
  res.json({ posts });
});

app.post("/addUser", express.json(), (req, res) => {
  //adding user by id
  let existedUser = posts.find((el) => el.id == req.body.id);
  console.log(existedUser);
  if (existedUser) {
    res.send("user already registered");
  } else {
    posts.push(req.body);
    res.send("added successfully");
  }

  //reversing the objects
  let reversed = posts.reverse();
  posts = reversed;
});

//deleting the object
app.delete("/delete", express.json(), (req, res) => {
  let deleted = posts.filter((el) => el.id != req.body.id);
  if (deleted.length == posts.length) {
    res.send("not exist");
  } else {
    posts = deleted;
    res.send("deleted");
  }
});


//updateding an object
app.post("/updateUser", express.json(), (req, res) => {
  let existingUser = posts.find((el) => el.id === req.body.id);
  //change the name and the age of this id
  if (existingUser) {
    existingUser.name = req.body.name;
    existingUser.email = req.body.email;
    res.send("updated")
  } else {
    res.send("not found");
  }
});


app.post("/searchUser", express.json(), (req, res) => {
  //adding user by id
  let existedUser = posts.find((el) => el.id == req.body.id);
  if (existedUser) {
    res.send("user exists");
    console.log(existedUser)
  } else {
    res.send("user is not exist");
  }

  //reversing the objects
  let reversed = posts.reverse();
  posts = reversed;
});



app.listen(3000);
