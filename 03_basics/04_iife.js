//  ******Immidiately Invoked Function Expressions (IIFE)******


// Named immidiately Invoked Function Expressions (IIFE)
(function chai() {
    console.log(`DB connected`);
})();

// Simple Immidiately Invoked Function Expressions (IIFE)
((name) => {
    console.log(`DB connected two ${name} `);
})("Vikash")