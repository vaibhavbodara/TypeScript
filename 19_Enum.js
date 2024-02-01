"use strict";
/* Enums In Typescript: are commanly used when you want to represent a set of related values and choose one value from multiple options.
 * Enums provide a convenient way to define a set of named values and associate them with specific meanings.
*/
/* In TypeScript,when enum constants are not explicitly assigned numeric values,they are automatically assigned
 * incremental numeric values starting from 0. the default value for the first enum constant is 0, and
 * subsequent enum constants receive values incremented by 1.
*/
/*
  *** Syntax of Enum = enum name{key:value pairs} ***
*/
// this created enum we use in the object for the multiple choice out of one
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "vaibhav",
    email: "v@gmail.com",
    password: "abcd",
    role: Roles.admin
};
const user2 = {
    name: "mitul",
    email: "m@gmail.com",
    password: "efgh",
    role: Roles.user
};
const isAdmin = (user1) => {
    const { name, role } = user1; // this is called destructuring of object
    return role === "admin" ? `${name} is allow to edit website` : `${name} is not allow to edit website`;
};
// now call the function isAdmin
console.log(isAdmin(user1)); // here pass user1 as a argument
const isLogin = (user2) => {
    const { name, role } = user2;
    return role === "user" ? `${name} can login system ` : `${name} can not login system`;
};
console.log(isLogin(user2));
//1 : Here, first element value start with 0 then increment by 1 for another elements
var CarName;
(function (CarName) {
    CarName[CarName["Honda"] = 0] = "Honda";
    CarName[CarName["Toyota"] = 1] = "Toyota";
    CarName[CarName["Alto"] = 2] = "Alto";
    CarName[CarName["Swift"] = 3] = "Swift";
})(CarName || (CarName = {}));
console.log(CarName);
console.log("Value of Alto is : " + CarName.Alto);
//2 : If we give some initial value of first element then increse by 1 for other elements
var CarName1;
(function (CarName1) {
    CarName1[CarName1["Tata"] = 20] = "Tata";
    CarName1[CarName1["Hyundai"] = 21] = "Hyundai";
    CarName1[CarName1["Kia"] = 22] = "Kia";
    CarName1[CarName1["MarutiSuzuki"] = 23] = "MarutiSuzuki";
})(CarName1 || (CarName1 = {}));
console.log(CarName1);
console.log("value of kia is " + CarName1.Kia);
// 3 : String Enums
// string enums is better then numeric enums
var fruitsName;
(function (fruitsName) {
    fruitsName["apple"] = "APPLE";
    fruitsName["banana"] = "BANANA";
    fruitsName["orange"] = "ORANGE";
    fruitsName["mango"] = "MANGO";
})(fruitsName || (fruitsName = {}));
console.log(fruitsName);
console.log(`Fruit Name is ${fruitsName.banana}`);
// 4 : Heterogeneous Enum : Heterogeneous enums define as a this enum contain both string and numeric that is called heterogeneous enum
var heteroGene;
(function (heteroGene) {
    heteroGene["name"] = "vaibhav";
    heteroGene[heteroGene["age"] = 21] = "age";
    heteroGene["place"] = "ahmedabad";
    heteroGene[heteroGene["salary"] = 50000] = "salary";
})(heteroGene || (heteroGene = {}));
console.log(heteroGene);
