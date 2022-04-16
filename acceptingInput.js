#!/usr/bin/env node

// // This uses built in Node packages
// const readline = require("readline").createInterface({
//    input: process.stdin,
//    output: process.stdout
// });

// readline.question("What's your name? ", name => {
//    console.log(`Hi ${name}!`);
//    readline.close();
// })

// Meanwhile, this used a 3rd party package
const inquirer = require("inquirer");

const questions = [
   {
      type: "input",
      name: "name",
      message: "What's your name?"
   }
]

inquirer.prompt(questions).then(answers => {
   console.log(`Hi ${answers["name"]}!`);
})