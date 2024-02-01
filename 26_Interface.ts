/* Interface : 
   An interface is a powerful feature that allows you to define a contract for an object's shape.
   It specifies the properties and their types that an object must have to be considered of that particular interface type.
   Interfaces are primarily used for type-checking during development and do not generate any JS code at runtime.
*/

// * interface extends other interface *

/** Syntax of Interface
 * interface nameOfInterface{name:string,age:number} 
 * 
 */

/****** OBJECT TYPES *****
In javascript,the fundamental way that we group and pass around data is through objects.in Typescript,
we represent those through object types.
*/


interface Greet {
   name:string,
   age:number
}

const greet1:Greet={
   name:"vaibhav",
   age:21
}


//! to do Create a Product object:
//? Define an interface or type representing a product with properties for name,price,and quantity.create a product object with following data.

interface ProductDetails{
   name:string;
  price:number;
   quantity:number
}

const products1:ProductDetails={
   name:"s21",
   price:40000,
   quantity:5
}
const products2:ProductDetails={
   name:"s23",
   price:80000,
   quantity:5
}

//! Calculate Total Price
//? given the product object from the previous question , write a function called calculateTotalPrice that calculates and returns the total price(price*quantity) of the product.

const calculateTotalPrice1
=(value:ProductDetails)=>{
    //return products1.price*products1.quantity
    const{price,quantity}=value; // this is destructuring of object
    return price*quantity
   }
console.log(calculateTotalPrice1(products1));
console.log(calculateTotalPrice1(products2));





