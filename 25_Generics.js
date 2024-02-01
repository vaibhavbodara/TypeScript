"use strict";
/******************** Generics In Type Script ********************
  
 * generics in typescript allow you to  create reusable components or function that can work with multiple data types.
 
*/
/*
function logAndReturn(value:string|number): string | number{
    console.log(...value);
    return value;
    
}
*/
/*const numberResult :string|number = logAndReturn(value : 42);
  const stringResult :number|string = logAndReturn(value : "Hello Generics!")
*/
/*console.log(...numberResult);
  console.log(...stringResult);
*/
//*******  Generics function to log and Return  *******
// with help of generics function work with mutiple data types
/* Syntax of Generics:
   <T>():T{} here T is a place holder
*/
function logandReturn(value) {
    return value;
}
const numberResult = logandReturn(42);
const stringResult = logandReturn("Hello Vaibhav");
const booleanResult = logandReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
//? Here Function Overloading Example:
/*
function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:any,b:any): any{
    return a+b;
}
*/
///////////////////////////////////////////////////////////////////
function addition(value) {
    return value;
}
const result1 = addition(5);
/* 1 : Using Generics Function for the  reverseArray
       here we pass the value as a parameter
*/
function reverseArray(array) {
    return array.reverse();
}
const strArray = reverseArray(["java", "javascript", "typescript"]);
const numArray = reverseArray([1, 2, 3, 4, 5]);
const boolArray = reverseArray([true, false]);
console.log(strArray);
console.log(numArray);
console.log(boolArray);
const details = {
    // Generic Interface with object
    id: 1,
    resourceName: "person",
    data: {
        name: "vaibhav",
        age: 21
    }
};
console.log(details);
const employee1 = {
    // Generic Interface with string array
    id: 2,
    resourceName: "employee1",
    data: ["Employee1", "Employee2"]
};
console.log(employee1);
// **************************** Solving OverLoading With Generics ********************************
/* IMP? : When we use generic and non generic type together,
     then while calling the function we need to defined the type in a manner but with non generic we don't.
*/
// here we pass in the generics two argument T and U so we pass two different type argument in the function argument 
function add1(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
// when we pass two different type in argument that time according T ND U adjust with that type
const add2 = add1(3, 3);
const add3 = add1("vaibhav", "mitul");
const add4 = add1("vaibhav", 1);
