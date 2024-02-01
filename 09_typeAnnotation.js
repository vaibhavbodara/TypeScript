"use strict";
/* Type Annotation : in typescript , typa annotation is a way of explicitly specifying the type of a variable,
   function parameter ,or function return value.
*/
// @ts-ignore
//let a: number = 10;  // this is called type annotation means here we declared type in explicitly
//@ts-ignore
//let b: string = "vaibhav";
/*
 let a=10
 let b=20
console.log(a+b);
console.log(a.toString());

const sum=(c,d)=>{
    return a+b
}
console.log(sum(48,"vaibhav"));

let addd=a+10
console.log(addd);
*/
// Type Safety: type safety, in typescript refers to the guarantee that operations performed on a value will respect its declared type
// **** NUMBER Data Type ****
let myFav = 5;
let myAge = 21;
let pi = 3.14;
let myNegVal = -5;
let nanVal = NaN;
let invalidResult = myAge;
console.log(invalidResult);
// **** STRING Data Type ****
let myName = "abc";
let myFirst = "bns";
let myLast = "sdk";
let myFull = myFirst + myLast;
console.log(myFull);
let sentences = "vaibhav hiiiiii";
let senteLength = sentences.length;
console.log(senteLength);
let text = "Please Subscribe My Channel";
let upperCaseText = text.toUpperCase();
let lowerCaseText = text.toLowerCase();
console.log(upperCaseText);
console.log(lowerCaseText);
console.log(typeof text);
// **** Boolean Data Type ****
let isDone = true;
let hasStarted = false;
function isEven(a) {
    return a % 2 === 0;
}
// fun call
console.log(isEven(5));
// **** BigInt Data Type ****
const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);
let bigNumber = 88807667553689n;
console.log(bigNumber);
