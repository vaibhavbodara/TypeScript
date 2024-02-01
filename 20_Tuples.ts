/* Tuples In TypeScript: tuples are data structure that allows you to store a fixed-size collection of elements of different types.
 * They are similar to arrays,but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation,
 * whereas arrays can hold elements of the same type,and their size can vary.
*/
// Typescript is strongly typed language but javascript is dynamically typed.
// Number of elements are fixed already

//Defining a tuple type for person information

// in tuple we define a type of elements
// in tuple order maintaining is compulsory 
// use of readonly is we can not add any element in the tuple
type PersonInfo= readonly [string,number,boolean]

const Person1:PersonInfo=["vaibhav",16,false]
const Person2:PersonInfo=["mitul",24,true]

// function to display person information
 
// in this function we can pass any name of parameter
const displayPersonInfo=(bvr:PersonInfo)=>{
            const[name,age,hasDriverLicense]=bvr; // this is destructuring of our persons data 
            console.log(`Name: ${name},Age:${age},Driver's License:${hasDriverLicense?"Yes":"No"}`);
            
}


console.log(displayPersonInfo(Person1));
console.log(displayPersonInfo(Person2));


// Question 1: building e-commerce application

type ProductInfo=[string,number,number]

// here we create two product details which data type belongs to ProductInfo
const product1:ProductInfo=["Mobile",40000,3]
const product2:ProductInfo=["TV",50000,5]

const displayproductInfo=(active:ProductInfo)=>{
         const[name,price,quantity]=active;
         console.log(`Name of Product ${name}, Price is ${price} and quantity available ${quantity}`);
         
}
console.log(displayproductInfo(product1));
console.log(displayproductInfo(product2));


// Question 2: Create student management system

// Question 3: Create a Weather application


