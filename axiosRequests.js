#!/usr/bin/env node

const axios = require("axios");

const fetch = async (url) => {
   const resp = await axios.get(url);
   
   console.log(`statusCode: ${resp.statusCode}`);
   console.log(resp);
}

fetch("https://kaleb.org");