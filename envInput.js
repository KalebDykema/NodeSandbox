// Call with a command like this
// USER_ID=239482 USER_KEY=foobar node envInput.js

// Or read a .env file with this to avoid importing dotenv but read from a file
// node -r dotenv/config envInput.js

// Or load the library in the code
require("dotenv").config();

console.log("User ID:", process.env.USER_ID);
console.log("User Key:", process.env.USER_KEY);