const car = {
   brand: "Ford",
   model: "Fiesta"
};

// // Default export, imported and used like this
// // const { brand, model } = require("./car");
// // const car = require("./car");
// module.exports = car;

// // This adds this to the exports object and is used like this
// // const { brand, model } = require("./car").car;
// // const car = require("./car").car;
// exports.car = car;
// Or do it like this
exports.car = {
   brand: 'Ford',
   model: 'Fiesta'
}
 
 