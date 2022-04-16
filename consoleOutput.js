#!/usr/bin/env node

/* 
   Format specifier; reminds me of Rust
      %s format a variable as a string
      %d format a variable as a number
      %i format a variable as its integer part only
      %o format a variable as an object 
*/
// console.log("My %s has %d ears", "cat", 2.32);

// console.log("%o", Number);

// setTimeout(() => {
//    // Clear everything
//    console.clear();
// }, 3000);

// You can count through variables too
const x = 1;
const y = 2;
const z = 3;

console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
);
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
);
console.count(
  'The value of y is ' + y + 
  ' and has been checked .. how many times?'
);

const oranges = ["orange", "orange"];
const apples = ["just one apple"];

oranges.forEach((orange) => {
   console.count(orange);
});
apples.forEach((apple) => {
   console.count(apple);
});

// Reset a count!
console.countReset("orange");

oranges.forEach((orange) => {
   console.count(orange);
});

// Stack trace time
const function2 = () => console.trace("Look, it's a stack trace");
const function1 = () => function2();
function1();

// Calculate time spent on something
const doSomething = () => console.log("calculating time on this")
const measureDoSomething = () => {
   console.time("do the thing");
   console.timeLog("do the thing");
   doSomething();
   console.timeEnd("do the thing");
}
measureDoSomething();

// Color an output with escape sequences
console.log('\x1b[33m%s\x1b[0m', 'hi!');

// Just use Chalk though, it's way easier
const chalk = require("chalk");
console.log(chalk.greenBright("Hi in green!"));

// Then, let's create a progress bar
const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 20 });
const timer = setInterval(() => {
   bar.tick();
   if (bar.complete) {
      clearInterval(timer);
   }
}, 100);