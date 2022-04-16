#!/usr/bin/env node

const fetch = require("node-fetch");
const join = require("path").join;

// Promise.all is used to solve multiple requests in one go
const f1 = fetch("https://kaleb.org");
const f2 = fetch("https://kaleb.org");

Promise.all([f1, f2])
   .then(res => {
      console.log(res);
   })
   .catch(err => {
      console.error(err);
   });

// Promise.race is for whichever request returns first
Promise.race([f1, f2])
   .then(res => {
      console.log(res);
   })
   .catch(err => {
      console.error(err);
   });

// Promise.any is for whenever one of these requests fail
Promise.any([f1, f2])
   .catch(err => {
      console.error(err);
   });