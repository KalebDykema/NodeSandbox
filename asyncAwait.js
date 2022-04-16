#!/usr/bin/env node

const doSomethingAsync = () => {
   return new Promise(resolve => {
      setTimeout(() => resolve("I did something"), 2500);
   });
};

const doSomething = async () => {
   console.log(await doSomethingAsync());
};

console.log("before");
doSomething();
console.log("after");