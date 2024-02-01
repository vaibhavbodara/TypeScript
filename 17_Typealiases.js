"use strict";
/* Type Alias : In TypeScript, a type is a way to give a name to a specific type or combination of types.
* It allows you to create a custom name for a type,making it easier to reuse and refer to the same type in
* different parts of your code.
* Type aliases :
*/
const person1 = {
    name: "vaibhav",
    age: 21,
    isStudent: true,
    address: {
        city: "ahmedabad",
        country: "india"
    }
};
const person2 = {
    name: "mitul",
    age: 24,
    isStudent: true,
    address: {
        city: "surat",
        country: "india"
    }
};
const person3 = {
    name: "dharmik",
    age: 23,
    isStudent: false,
    address: {
        city: "surat",
        country: "india"
    }
};
console.log(person2.name);
console.log(person3.address.city);
