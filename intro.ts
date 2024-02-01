// typescript is super set of javascript

// typescript is all about type safety

/* What Typescript does : Static Checking
 * Static checking : Static type checking is defined as type checking performed at compile time.
                   It checks the type variables at compile-time, 
                   which means the type of the variable is known at the compile time.

 * typescript is a development tool but our project run in js                  
*/
let user ={
    name:"vaibhav",age:21
}
console.log("bvr");
console.log(user.name);

/* Data Types In TypeScript
Number,Boolean,null,string,Undefined,void,object,Array,Tuples...
Never,Unknown,Any
*/

/* Situations :
A Function accepts 2 numbers
A function returns a string  
*/

// Syntax
let variableName   ="value"

let num1:number=2   
//num1="vaibhav"

num1=33