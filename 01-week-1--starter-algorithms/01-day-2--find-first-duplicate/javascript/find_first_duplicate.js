// Given an Array, find the first duplicate value that occurs. If there are no
// duplicates, return -1.

function findFirstDuplicate(arr) {

    // type your code here

    // when we see aproblem like this, asking for something involving an array, we know we need two things:

    // 1. A loop that iterates through the array.
    // 2. A data structure that holds values for that loop to compare against.

    // Process: We know we need to look at the elements of the array (hence the loop) and we'll need 
    // something to hold each of those looked-at values in order to check if we've seen them already

    // SET object lets you store unique values of any type. 

    let valueSet = new Set();

    // loop through the given array
    for (let i = 0; i < arr.length; i++) {

        // statement 1 (let i = 0) sets the variable before the loop starts
        // statement 2 defines the condition for the loop to run (i < arr.length)
        // statement 3 increases a value (i++) each time a code block in the loop has been executed.

        // add an 'else' statement for if the element isn't in our Set yet, in which case we add it to the Set and move on.
        if (valueSet.has(arr[i])) return arr[i];
        valueSet.add(arr[i]);
        // check to see if the Set already contains the element that we're currently on in our loop.
    }
    return -1;
}

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: 3");
    console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

    console.log("");

    console.log("Expecting: -1");
    console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution