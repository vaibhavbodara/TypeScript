"use strict";
// Array : In TypeScript, an array is a data that can store multiple values of different data types sequentialy.
//***  Ways of difine an Array  ***//
// a - using square brackets
const number = [1, 2, 3, 4, 5, 6];
// b - using the array constructor
const number1 = new Array(1, 6, 7, 8, 9);
// c - using the Array of method
const names = Array.of("vaibhav", "mitul", "dharmik");
// *** Operation: Accessing elements using index : *** //
console.log(names[0]);
console.log(names.length);
// *** Array Opearations And Iterations *** //
// 1 : Array InBuilt Methods 
// a- adding elements to an array using push:
const fruits = ["apple", "banana", "orange", "guva"];
const newFruits = fruits.push("kiwi");
console.log(newFruits);
console.log(fruits);
// b- removing elements from an array using pop:
const newFruit = fruits.pop();
console.log(fruits);
console.log(newFruit);
// c- adding elements to an array in start with using unshift():
const f1 = fruits.unshift("mango");
console.log(fruits);
// d- remove element to an array in start which we adding using shift():
const f2 = fruits.shift();
console.log(fruits);
// 2 : *** Iterations In TS *** //
// e - using for loop (iterates over indices)
for (let i = 0; i < fruits.length; i++) {
    console.log([fruits[i]]);
}
// f - for...of loop (iterates over values)
for (const fruit of fruits) {
    console.log(fruit);
}
// g - forEach method
// // Syntax : array.forEach(callback[, thisObject]);
fruits.forEach((curVal) => console.log(curVal));
