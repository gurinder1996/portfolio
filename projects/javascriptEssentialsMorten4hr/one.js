//arrays
var pens;
pens = ["red", "blue"];

console.log("Before: ", pens);


// PROPERTIES:
// Get a property of an object by name:
console.log("Array Length: ", pens.length );

pens.push("orange");
// METHODS:
// Reverse the array:
pens.reverse();

// Remove the first value of the array:
//pens.shift();

// Add comma-separated list of values to the front of the array:
pens.unshift("purple", "gold");

// Remove the last value of the array:
pens.pop();


// Add comma-separated list of values to the end of the array:
pens.push("pink", "navyblue");

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
pens.splice(3, 1) // Starts at the seccond item and removes two items.

console.log("After: ", pens);



// Create a copy of an array. Typically assigned to a new variable:
var newPens = pens.slice();
console.log("New pens: ", newPens);

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
var result = pens.indexOf("orange", 1);
console.log("the value is: ", pens[result]);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
var arrayString = pens.join(", ");
console.log("String from array: ", arrayString);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
