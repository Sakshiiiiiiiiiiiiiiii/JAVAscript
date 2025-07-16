//immediately-invoked function expression (IIFE)
(function() {
    console.log("This is an IIFE");
})(); //


// The IIFE pattern is used to create a private scope, avoiding polluting the global namespace.
// It can also be used to execute code immediately without needing to call a function later.

// using arrow function syntax
(() => {
    console.log("This is an IIFE using arrow function syntax");
})() // This will also execute immediately