"use strict";
/* Interface :
   An interface is a powerful feature that allows you to define a contract for an object's shape.
   It specifies the properties and their types that an object must have to be considered of that particular interface type.
   Interfaces are primarily used for type-checking during development and do not generate any JS code at runtime.
*/
const greet1 = {
    name: "vaibhav",
    age: 21
};
const products1 = {
    name: "s21",
    price: 40000,
    quantity: 5
};
const products2 = {
    name: "s23",
    price: 80000,
    quantity: 5
};
//! Calculate Total Price
//? given the product object from the previous question , write a function called calculateTotalPrice that calculates and returns the total price(price*quantity) of the product.
const calculateTotalPrice1 = (value) => {
    //return products1.price*products1.quantity
    const { price, quantity } = value; // this is destructuring of object
    return price * quantity;
};
console.log(calculateTotalPrice1(products1));
console.log(calculateTotalPrice1(products2));
