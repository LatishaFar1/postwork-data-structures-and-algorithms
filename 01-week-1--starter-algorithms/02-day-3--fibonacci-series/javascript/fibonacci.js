// Find the nth element in the Fibonacci series. The Fibonacci sequence starts with
// a 0 followed by a 1. After that, every value is the sum of the two values
// preceding it. Here are the first seven values as an example: 0, 1, 1, 2, 3, 5,
// 8.

function fibonacci(num) {
    // type your code here

    // if the number is 0 or 1 return those numbers
    if (num == 0 || num == 1) return num;

    //declare the first number (0), declare the second number (1), add them together

    let zero = 0,
        one = 1;
    let sum = zero + one

    // after that, every value is the sum of the previous two values.
    // return that number 

    //iterate through 

    for (let i = 2; i < num; i++) {
        zero = one;
        one = sum;
        sum = zero + one
    }
    return sum

}

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: 0");
    console.log("=>", fibonacci(0));

    console.log("");

    console.log("Expecting: 1");
    console.log("=>", fibonacci(2));

    console.log("");

    console.log("Expecting: 55");
    console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution