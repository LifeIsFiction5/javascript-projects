//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.


function minValue(numbersArray) {
    let smallestValue =  numbersArray[0];
//How do we compare elements in the array?

for (i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] < smallestValue) {
        smallestValue = numbersArray[i];
    }
    return smallestValue;
    }
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(minValue(nums1));
console.log(minValue(nums2));
console.log(minValue(nums3));
