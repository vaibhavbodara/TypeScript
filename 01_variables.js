"use strict";
//Primitive Data Types: String , Number , Boolean ,Any
Object.defineProperty(exports, "__esModule", { value: true });
// 1: string
let greetings = "hii vaibhav";
console.log(greetings);
// 2 : Number
let userId = 23212;
userId.toString();
console.log(typeof userId);
// 3 : Boolean
let isLoggedIn = false;
console.log(isLoggedIn);
//4: Any
/*TypeScript also has a special type, any,
  that you can use whenever you don’t want a particular value to cause typechecking errors.
*/
let hero;
function getHero() {
    return "thor";
}
hero = getHero();
