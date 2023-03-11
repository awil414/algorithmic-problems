// Take in the number `n` and return the nth number in the sequence.
// O(2^n) time - not desirable takes too long
// O(n) space
// const fib = (n) => {
//     // In a Fibonacci sequence the first two numbers are exactly 1, so...
//     if (n <= 2) return 1;
//     // But in the recursive case in general (baked in), return the sum 
//     // of the Fibonacci number right before the one I'm asking for, 
//     // as well as the Fibonacci number two before the one I'm asking for.
//     return fib(n - 1) + fib(n-2);
// };

// Test
// console.log(fib(6)); // 8
// console.log(fib(7));// 13
// console.log(fib(8)); // 21
// // This number is too big and keeps running and is too slow so back to the drawing board
// // DRAW IT OUT
// console.log(fib(50)); // 1,125,899,906,842,624
// For time complexity = O(2^n)
// Or in this case O(2^50) steps to get to root = 1,125,899,906,842,624
// Look at subtrees - DYNAMIC PROGRAMMING
// Let's optimize the above equation...

// MEMOIZATION
//   js object, keys will be arg to fn, value will be return value

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));





// WARM UP FOR ABOVE LOGIC
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

    const lib = (n) => {
        if (n <= 1) return; //base
        lib(n - 2);
        lib(n - 2);
    };

    // If n = 8, then 
    // Time complexity is O(2 to the n)
    // Space complexity if O(n)
    
