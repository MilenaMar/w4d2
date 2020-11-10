const http = require("http");

const server = http.createServer((request, response) => {
  console.log("request:", request.url);
  response.statusCode = 404;
  response.setHeader("Content-Type", "text/html");

  if (request.url === "/pauline") {
    response.write("<h1>Hello Pauline</h1>");
  } else {
    response.write(`<h1>Hello there world</h1>`);
  }
  response.end();
});

server.listen(3005, () => {
  console.log(`SERVER LISTENING ON PORT 3005`);
});

// const { sum, subt } = require("./sum");
// // const sumFile = require("./sum")
// // const subt = require("./sum")

// console.log("NODE IS WORKING");
// // console.log(sumFile.sum(1,2))
// // console.log(sumFile.subt(1,2))
// console.log(subt(1, 2));
