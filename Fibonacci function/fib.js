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

// Classic fib time complexity is 2 to the n 

    const foo = (n) => {
        if (n <= 1) return;
        foo(n - 1); // recursive call
    };
    // DRAW IT OUT
    // O fo n space & time complexity (if n=5, then 5 calls, 5 time complexity, 5 space complexity)

    const bar = (n) => {
        if (n <= 1) return;
        bar(n - 2); // recursive call
    };
    // How does this change time complexity of function compared to foo above?
    // Example  n = 6
    // DRAW IT OUT
    
    // The two above equations (foo and bar) have an identical complexity class of:
    // O(n) time
    // O(n) space

    const dib = (n) => {
        if (n <= 1) return;
        dib(n - 1); // two recursive calls inside of every single call
        dib(n - 1);
    };
    // DRAW IT OUT n=5
    // The time complexity = O(2 to the n)
    // Space complexity = O(n) because the stack height is n, in this case 5

    
