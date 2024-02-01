"use strict";
// ***************************Union and Intersection in typescript**********************************
// Union : is combination of two sets which contain of all elements of both sets.
// Intersection : is contain that elements which is common in both sets.
//? Union types allow you to specify that a variable can hold values of multiple types. you use the | (pipe) symbol to define union types.
// Example :
let value;
value = 200;
console.log("Numeric Value of the value: " + value);
value = "hello vaibhav";
console.log("String value of the value: " + value);
// 1 : Function Parameter as a Union Type
let geeks;
const displayType = (geeks) => {
    if (typeof (geeks) === "number") {
        console.log("geeks is a number");
    }
    else if (typeof (geeks) === "string") {
        console.log("geeks is a string");
    }
};
displayType(50);
displayType("vaibhav");
// 2 : Array as a Union Type : 
/*In union type we can also pass an array.
  The program declares an array.
  The array can represent either a numeric collection or a string collection.
*/
const arr = [1, 2, 3, 4, 5];
console.log("Display the array elements");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
const arr1 = ["geeks", "loop", "lbtp", "cool"];
for (let j = 0; j < arr1.length; j++) {
    console.log(arr1[j]);
}
// Practice Example : 
let exam;
const displayOutput = (exam) => {
    if (typeof (exam) === "string") {
        console.log(exam.toUpperCase());
    }
    else if (typeof (exam) === "number") {
        console.log(exam * 2);
    }
    else {
        console.log("invalid data");
    }
};
displayOutput("vaibhav");
displayOutput(50);
displayOutput(true);
////////////////////// H-Examples //////////////////////////////
// 1 : If the Input is a string , it should capitalize the first letter
let e1;
const newE1 = (e1) => {
    if (typeof (e1) === "string") {
        return e1.slice(0).toUpperCase();
    }
    else if (typeof (e1) === "number") {
        console.log("unexceptable data");
    }
    else {
        console.log("invalid data");
    }
};
console.log(newE1("vaibhav"));
console.log(newE1(60));
// 2 : If the input is a boolean, it should return "Yes" for true and "No" for false
let e2;
const newE2 = (e2) => {
    if (typeof (e2) === "boolean" && e2 === true) {
        console.log("Yes");
    }
    else if (typeof (e2) === "boolean" && e2 === false) {
        console.log("No");
    }
};
newE2(true);
newE2(false);
const employee = {
    name: "vaibhav",
    age: 21,
    emp_id: 111,
    department: "b.tech"
};
const myPersonalInfo = {
    name: "mitul",
    age: 24
};
// here we create object for the type User and type MyLocation means (asign a values)
const user3 = { name: "vaibhav", age: 21 };
const myLokation = { city: "ahmedabad", country: "india" };
// define function and pass the parameter as a object 
const createUserProfile = (user3, lokation) => {
    //return `my name is ${user3.name} and i am living in city : ${myLokation.city}`
    // this return all data
    return Object.assign(Object.assign({}, user3), lokation);
};
// call
const myCompleteInfo = createUserProfile(user3, myLokation);
console.log(myCompleteInfo);
// function call and pass argument as a object  
console.log(createUserProfile(user3, myLokation));
const info = { id: 1, name: "vaibhav", email: "g@gmail.com" };
const account = { accountId: 12345, accountType: "saving", balance: 90281012201 };
const combineUserAndAccount = (info1, account1) => {
    return Object.assign(Object.assign({}, info1), account1);
};
// function call
const newObject = combineUserAndAccount(info, account);
console.log(newObject);
