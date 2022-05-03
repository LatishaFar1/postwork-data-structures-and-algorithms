function reverseString(str) {
    // type your code here

    // create an empty string that'll host the new created string
    var newString = "";

    //create the for loop
    //the starting point of the loop will be (str.length -1) which corresponds to the last character of the string
    //as long as i is greater than or equals 0, the loop will continue
    //we decrement i after each iteration
    for (var i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }
    return newString;
}

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: 'ih'");
    console.log("=>", reverseString("hi"));

    console.log("");

    console.log("Expecting: 'ybabtac'");
    console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution