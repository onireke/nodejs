// function sayHello(name) {
//   console.log(name);
// }

// sayHello("abdulfatah");
// const logger = require("./logger");
// logger.log("message");

const path = require("path");

const pathObj = path.parse(__filename);

console.log(pathObj);
