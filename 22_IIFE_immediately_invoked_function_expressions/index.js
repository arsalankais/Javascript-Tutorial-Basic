// IIFE 
// Named IIFE 
(function chai() {
    console.log(`DB Connected`);
})();


// Simple IIFE 

(() => {
    console.log(`DB Connected Two`);
})();


// Simple IIFE with a parameters
((name) => {
    console.log(`DB Connected Two ${name}`);
})("arsalan");