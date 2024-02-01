"use strict";
/* Type Inference: Type Inference refers to the ability of the typescript compiler to automatically determine and
                   assign types to variables,expressions,and function return values based on their usage and
                   context in the code.
*/
let myNam = 'vaibhav';
/*inference in typescript :
 * use type inference for simple cases where the assigned value clearly indicates the intended type
 *
*/
////////////////////////////////////////////////////////////////////
//1 : 
let message = "Hello,TypeScript!";
//2 :
function calculateArea(length, width) {
    let x = length * width;
    return x;
}
console.log(calculateArea(10, 10));
