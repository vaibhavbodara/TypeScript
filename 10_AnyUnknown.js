"use strict";
// **** Any Type ****
// The Any type is the most flexible type in typescript.it essentialy turn off all type checking for the variable or expressions it is applied to.
// 
let myFavNum = 10;
myFavNum = "d";
console.log(myFavNum);
// ! UseCases
/*Working with Dynamic Data:- When dealing with data from dynamic sources like users inputs,
  network responses,or deserialized json projects , the any type can be useful.
*/
/*Migration from javascript:- When migrating in exisiting javascript codehase to TypeScript,
  using the any type can be a convenient way to quickly convert variables and functions
  without immediately specifying their precision
 */
// **** Unknown Type ****
//The unknown type is a safer alternative to any(type) because it still enforces type checking and type safety.
//Variables of type unknown can hold values of any type,but you must perform type checks or assertion before using them in specific ways. 
//type safety: is define as a when we check the methods on different types that is called type .safety
let num3;
num3 = 5;
num3 = "bvr";
num3 = true;
if (typeof num3 === "number") {
    console.log(num3 + 5);
}
else if (typeof num3 === "boolean") {
    console.log(num3);
}
