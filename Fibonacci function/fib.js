// Take in the number `n` and return the nth number in the sequence.

const fib = (n) => {
    // In a Fibonacci sequence the first two numbers are exactly 1, so...
    if (n <= 2) return 1;
    // But in the recursive case in general (baked in), return the sum 
    // of the Fibonacci number right before the one I'm asking for, 
    // as well as the Fibonacci number two before the one I'm asking for.
    return fib(n - 1) + fib(n-2);
};

// Test
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
// This number is too big and keeps running and is too slow so back to the drawing board
// DRAW IT OUT
console.log(fib(50));