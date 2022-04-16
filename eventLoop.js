#!/usr/bin/env node

const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
   // This will be called once the current operation in the event loop is complete, before setTimeout and the Promise. A tick occurs every time the event loop takes a full loop. It's the way we can tell the JS engine to process a function asynchronously (after the current function), but as soon as possible, not queue it.
   process.nextTick(() => {
      console.log("this will be called after baz");
   });
   // Will call on next iteration of event cycle. In otherwise, it'll be be called last.
   setImmediate(() => {
      console.log("I'm called last")
   });
   console.log("foo");
   // Both of these queue up bar() once the call stack is empty 
   setTimeout(bar, 0);
   // This on the job queue, which goes after the current function is done, while the above is the message queue, and is sent to the back of the line
   new Promise(resolve => 
      resolve("should be right after baz, before bar")
   ).then(resolve => console.log(resolve));
   baz();
};

foo();