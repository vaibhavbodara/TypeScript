"use strict";
// TypeSafety In TypeScript :
// 1 : Type Of Gaurd
/* A typeOf gaurd in typescript lets you narrow down the type of a variable based on its runtime value.
   In TypeScript, type narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certain circumstances.
   This is particularly useful with union types and generic types.
*/
let name22 = "vaibhav";
const favHobbies = (hobby) => {
    //return hobby.map(()=>{})
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map(() => { });
    }
    else {
        console.log(hobby);
    }
};
favHobbies("coding");
favHobbies(["coding", "hobbies"]);
