/*1:**** Function Invocation ****
  * to execute a function ,you simply invoke it by using its name followed by parentheses.
*/


/*2:**** Function Declaration ****
 * you can declare a function using function keyword,followed by the function name, a list of parameters enclosed in
   parentheses, and a return type 
*/

// function define
function greet(name:string,id:number){
    console.log(`welcome ${name} is ${id}`);
    
}
// function call
greet("vaibhav",1);
console.log(greet("vaibhav",1));


// Fat arrow function

const breet=(a:number,b:number):number => {
    return a+b
        
}
const myBreet=breet(8,12);
console.log(myBreet);

/* Function return type : to specify  the return type of a function, we can use the colon(:)
   followed by the desired type after the function's parameter list.
*/

// 1:Example

const isPalindrome=(palin:string)=>{
     let myPlain = palin.split("").reverse().join("");
     return myPlain===palin;
}
console.log(isPalindrome("12321"));

// 2:Example


const calculateAverage=(a:[1,4,5,6,8])=>{
     
}







