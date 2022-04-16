// // For standard calls, such as
// // node CLIargs.js kaleb is my name
// const args = process.argv.forEach((arg, i) => {
//    console.log(`${i}: ${arg}`);
// });

// To specify args in a normal way, using one of the following
// node CLIargs.js --name kaleb --age 21
// node CLIargs.js --name=kaleb --age=21
const args = require("minimist")(process.argv.slice(2));
console.log(args["name"]);
console.log(args["age"]);