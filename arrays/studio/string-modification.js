const input = require('readline-sync');
let str = "LaunchCode";

// 1) Use string methods to remove the first three characters from the string and add them to the end.
let newStr = str.slice(0, 3);
let modifiedStr = str.slice(3) + newStr;

console.log(newStr);          // Output: "Lau"
console.log(modifiedStr);     // Output: "nchCodeLau"

// Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`First, I had ${str}, but then I was told to cut out ${newStr} and combine them so that it would print the phrase ${modifiedStr}.`);

// 2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let info = input.question("Enter the number of letters that should be moved: ").trim();

// 3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
info = validateInput(info, str.length);

let userNewStr = str.slice(0, info);
let userModifiedStr = str.slice(info) + userNewStr;

console.log(`First, I had ${str}, but then I was told to cut out ${userNewStr} and combine them so that it would print the phrase ${userModifiedStr}.`);

// Validation function for user input
function validateInput(input, maxLength) {
    if (!input || isNaN(input) || Number(input) > maxLength || Number(input) <= 0) {
        console.log(`That won't work. Let's just move 3 characters instead.`);
        return 3;
    } else {
        return Number(input);
    }
}

// Function to prompt user without loops
function promptUser() {
    let userInput = input.question("Enter two numeric values separated by space: ").trim();
    if (!validateInputPair(userInput)) {
        console.log(`Invalid input. Please enter 2 numeric values.`);
        return promptUser();  // Recursively call until valid input is provided
    }
    const [first, second] = userInput.split(" ").map(Number);
    console.log(`You entered: ${first} and ${second}`);
    // Further logic with first and second values can be implemented here
}

// Validation function for user input pair
function validateInputPair(input) {
    const parts = input.split(" ");
    if (parts.length !== 2) {
        return false;
    }
    return !isNaN(parts[0]) && !isNaN(parts[1]);
}
