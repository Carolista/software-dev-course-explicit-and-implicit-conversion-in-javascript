/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // This worked but was implicit, and explicit would be preferable
console.log("The result is: " + result); 

let isValid = Boolean(""); // Only an EMPTY string converts to Boolean false
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // Used Number() to prevent string concatenation
console.log("Total Age: " + totalAge);

// Implicit example
let num = 42;
console.log(typeof num);
console.log(`The answer to the Ultimate Question of Life, the Universe, and Everything is ${num}.`);
// Template literals automatically convert numbers to strings for values in placeholders

// Explicit example
let measurement = "10560 feet";
let feetPerMile = 5280;
console.log(typeof measurement);
let miles = parseInt(measurement) / feetPerMile; // returns NaN without parseInt()
// ...because JS tries (and fails) to implicitly convert measurement to a number
console.log(miles);
