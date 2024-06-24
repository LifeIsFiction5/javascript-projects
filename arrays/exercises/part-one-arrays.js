//Create an array called practiceFile with the following entry: 273.15

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.

//Use a single .push() to add the following items: false, -4.6, and "87".  Print the array to confirm the changes.

let practiceFile = [273.15]
practiceFile.push("42")
console.log(practiceFile)
practiceFile.push("hello")
console.log(practiceFile)
practiceFile.push("false", "-4.6", "87")

console.log(practiceFile)

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']

cargoHold.splice(5,1,"space tether");
console.log(cargoHold);

cargoHold.pop();
console.log("Removed security blanket");
console.log(cargoHold);

cargoHold.shift();
console.log("Removed Oxygen Tanks");
console.log(cargoHold);

cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold);

console.log(`The length of the Cargo Hold index is ${cargoHold.length}`);

cargoHold.splice(3,0,"keys");
console.log(cargoHold);

cargoHold.splice(4,1);
console.log(cargoHold);

cargoHold.splice(2,3,"cat","fob","string cheese");
console.log(cargoHold);

let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);

holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);

str = "In space, no one can hear you code.";
console.log(str.split());
console.log(str.split('e'));
console.log(str.split('   '));
console.log(str.split());

arr = ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));

let holdContents = ["water", 'space suits', 'plasma sword', 'batteries'];
console.log(holdContents.sort());

let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

let elements = [element1, element2, element26];

console.log(elements);




