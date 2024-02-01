"use strict";
/* Tuples In TypeScript: tuples are data structure that allows you to store a fixed-size collection of elements of different types.
 * They are similar to arrays,but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation,
 * whereas arrays can hold elements of the same type,and their size can vary.
*/
const Person1 = ["vaibhav", 16, false];
const Person2 = ["mitul", 24, true];
// function to display person information
// in this function we can pass any name of parameter
const displayPersonInfo = (bvr) => {
    const [name, age, hasDriverLicense] = bvr; // this is destructuring of our persons data 
    console.log(`Name: ${name},Age:${age},Driver's License:${hasDriverLicense ? "Yes" : "No"}`);
};
console.log(displayPersonInfo(Person1));
console.log(displayPersonInfo(Person2));
// here we create two product details which data type belongs to ProductInfo
const product1 = ["Mobile", 40000, 3];
const product2 = ["TV", 50000, 5];
const displayproductInfo = (active) => {
    const [name, price, quantity] = active;
    console.log(`Name of Product ${name}, Price is ${price} and quantity available ${quantity}`);
};
console.log(displayproductInfo(product1));
console.log(displayproductInfo(product2));
// Question 2: Create student management system
// Question 3: Create a Weather application
