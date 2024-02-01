"use strict";
// Map ,Filter ,Reduce Methods
const n5 = [1, 9, 2, 4, 6];
/* 1 :****** Map Method ******:
the method creates a new array by applying a provided fuction to each element of the original array.
*/
//A-Doubling each number:
const doubleData = n5.map((curVal) => curVal * 2);
console.log(doubleData);
//B-Converting numbers to string:
const n5toString = n5.map((curEle) => curEle.toString());
console.log(n5toString);
// ****** Filter Method ****** //
//C-Filtering even numbers
const evenNumbers = n5.filter((cuele) => cuele % 2 === 0);
console.log(evenNumbers);
//D-numbers greater than 3
const n5Greater3 = n5.filter((curl) => curl > 3);
console.log(n5Greater3);
// example:
// 1:given an array of strings,create a new array that contais only the string with a length greater than 4.
