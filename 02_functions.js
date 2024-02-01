"use strict";
// 
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid) => { };
addTwo(5);
getUpper("vaibhav");
signUpUser("vaibhav", "v@gmail.com", false);
loginUser("h", "g@gmail.com", true);
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 ok";
}
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
// 2 : +++++++++++++++++ Two Types of Function ++++++++++++++++++++++++++
//console
function consoleError(errmsg) {
    console.log(errmsg);
    return;
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
