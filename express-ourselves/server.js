const express = require("express");

const app = express();

app.use(express.static("public"));

// console.log(__dirname);

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/pauline", (request, response) => {
  response.sendFile(__dirname + "/views/pauline.html");
});

app.listen(3001, () => {
  console.log("LISTENING ON PORT 3001");
});
