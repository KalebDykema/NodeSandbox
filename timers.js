#!/usr/bin/env node

// Set timeout: run code after X miliseconds
setTimeout(() => {
   console.log("I run second");
}, 100);

setTimeout(() => {
   console.log("I run first");
}, 50);

// You can even pass args to a callback within setTimeout
function thisTakesArgs (firstParam, secondParam) {
   console.log(`firstParam: ${firstParam}`);
   console.log(`secondParam: ${secondParam}`);
}
setTimeout(thisTakesArgs, 150, "Hello", "World");

// Maybe you feel like cancelling a timeout call. Can also do this with thingsl ike callInterval and whatnot
const cancelMe = setTimeout(() => {
   console.log("I will never log");
}, 200);
clearTimeout(cancelMe);

// We already covered this, but there's also 0 delay stuff
setTimeout(() => {
   console.log("after");
}, 0);

console.log('before');


// Then there's setInterval, which will run forever until cancelled
const clearMe = setInterval(() => {
   console.log("I print every 250 ms");
}, 250);
setTimeout(clearInterval, 800, clearMe);