// Sort an Array of numbers using selection sort. The selection sort algorithm
// sorts an array by repeatedly finding the minimum element (lowest value) in the
// input Array, and then putting it at the correct location in the sorted Array.

// ```js
// Input: [3, -1, 5, 2]
// Output: [-1, 2, 3, 5]
// ```


function selectionSort(arr) {
    // type your code here

    // loop through the array

    for (let i = 0; i < arr.length; i++) {

        // declare the variable that will hold the smallest element 
        let lowest = i;

        // inner for loop that will start from lowest + 1
        for (let j = i + 1; j < arr.length; j++) {
            // check if the current value is less than lowest, if it is change lowest to that value
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (lowest !== i) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        }

    }

    //return array
    return arr
}


// ANOTHER SOLUTION:

// function selectionSort(arr) {
//   const sorted = [];

//   while (arr.length > 0) {
//     const min = Math.min(...arr);
//     const idx = arr.indexOf(min);

//     sorted.push(min);
//     arr.splice(idx, 1);
//   }

//   return sorted;
// }

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: [-1, 2, 3, 5]");
    console.log("=>", selectionSort([3, -1, 5, 2]));

    console.log("");

    // BENCHMARK HERE, and print the average runtime
    const longInput = [];

    for (let i = 0; i < 100; ++i) {
        longInput.push(Math.random());
    }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution