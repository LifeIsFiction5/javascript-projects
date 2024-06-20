// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttleName = "Determination";
let shuttleSpeed = "17500";
let distanceToMars = "225000000";
let distanceToTheMoon = "384400";
const milesPerKilometer = "0.621";

let milesToMars = distanceToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

let milesToTheMoon = distanceToTheMoon * milesPerKilometer;
let hoursToTheMoon = milesToTheMoon / shuttleSpeed;
let daysToTheMoon = hoursToTheMoon / 24;

console.log(shuttleName + "will take" + daysToMars + "days to reach Mars.")

console.log(`However, ${shuttleName} will only take ${daysToTheMoon} to reach the Moon.`)