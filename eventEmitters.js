#!/usr/bin/env node

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Can also use .once() instead for a one time even listener.
// Can cancel the listener with removeListener() or off()
eventEmitter.on("start", (start, end) => {
   console.log(`started from ${start} to ${end}`);
});

// Can remove all listeners for an event with removeAllListeners()
eventEmitter.emit("start", 1, 100);