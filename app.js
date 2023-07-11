// function sayHello(name) {
//   console.log(name);
// }

// sayHello("abdulfatah");
// const logger = require("./logger");
// // logger.log("message");

// const path = require("path");

// const pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require("os");

// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// console.log("Total Memory:" + totalMemory);

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([A, B, C, D, E]));
    res.end();
  }
});
server.listen(3000);

console.log("listening on port 3000...");
