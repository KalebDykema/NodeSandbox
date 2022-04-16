// // For module.exports = car;
// const { brand, model } = require("./car");

// For module.exports = car;
const { brand, model } = require("./car").car;


console.log(`I have a ${brand} ${model}.`);