/******************** Generics In Type Script ********************
  
 * generics in typescript allow you to  create reusable components or function that can work with multiple data types.
 
*/



/*
function logAndReturn(value:string|number): string | number{
    console.log(...value);
    return value;
    
}
*/

/*const numberResult :string|number = logAndReturn(value : 42);
  const stringResult :number|string = logAndReturn(value : "Hello Generics!")
*/

/*console.log(...numberResult);
  console.log(...stringResult);
*/  


//*******  Generics function to log and Return  *******
     // with help of generics function work with mutiple data types

/* Syntax of Generics:
   <T>():T{} here T is a place holder 
*/

function logandReturn<T>(value:T):T{
    return value
}
const numberResult=logandReturn<number>(42);
const stringResult=logandReturn<string>("Hello Vaibhav")
const booleanResult=logandReturn<boolean>(true)

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

//? Here Function Overloading Example:
/*
function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:any,b:any): any{
    return a+b;
}
*/

///////////////////////////////////////////////////////////////////

function addition<add>(value:add):add{
    return value
}
const result1=addition<number>(5);


/* 1 : Using Generics Function for the  reverseArray
       here we pass the value as a parameter
*/ 
function reverseArray<T>(array:T[]):T[]{
    return array.reverse();
}

const strArray:string[]=   reverseArray(["java","javascript","typescript"])
const numArray:number[]=   reverseArray([1,2,3,4,5])
const boolArray:boolean[]= reverseArray([true,false])

console.log(strArray);
console.log(numArray);
console.log(boolArray);


/* 2 : Example 2: In this example, we have created a generic interface by using that we are creating object and
       string type of value and printing them in the console.
*/

interface Resource<T>{
    id:number,
    resourceName:string,
    data:T
}

const details:Resource<object>={

    // Generic Interface with object
    id:1,
    resourceName:"person",
    data:{
        name:"vaibhav",
        age:21
    }

}
console.log(details);

const employee1:Resource<string[]>={

    // Generic Interface with string array
    id:2,
    resourceName:"employee1",
    data:["Employee1","Employee2"]
}
console.log(employee1);



// **************************** Solving OverLoading With Generics ********************************

/* IMP? : When we use generic and non generic type together,
     then while calling the function we need to defined the type in a manner but with non generic we don't. 
*/

// here we pass in the generics two argument T and U so we pass two different type argument in the function argument 
function add1<T,U>(a:T,b:U){
    console.log(typeof a);
    console.log(typeof b);
}

// when we pass two different type in argument that time according T ND U adjust with that type

const add2=add1<number,number>(3,3);
const add3=add1<string,string>("vaibhav","mitul")
const add4=add1<string,number>("vaibhav",1)



 


