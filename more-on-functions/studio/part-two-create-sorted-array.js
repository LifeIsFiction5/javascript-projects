let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];



function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}



//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

function minusMinimum(arr) {
  let newArr = [];
  while (arr.length > 0) {
    let min = findMinValue(arr);
    arr.splice(arr.indexOf(min), 1);
    newArr.push(min);
  }
  return newArr;
}



console.log(minusMinimum(nums1));
console.log(minusMinimum(nums2));
console.log(minusMinimum(nums3));


//invoking the function here will add in the RETURN VALUE of the funciton named

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

function recursiveMinusMinimum(arr, sortedArr = []) {

if (arr.length === 0) {
  return sortedArr;

} else {let min = findMinValue(arr);
  arr.splice(arr.indexOf(min), 1);
  newArr.push(min);
  
  return recursiveMinusMinimum(arr, sortedArr);
}

};


//Base Case = stop condition

//Sample arrays for testing:

console.log(findMinValue(nums1));
console.log(findMinValue(nums2));
console.log(findMinValue(nums3));
