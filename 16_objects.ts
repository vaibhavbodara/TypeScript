/* Objects : In typescript, objects are used to represent data with key-value pairs.
             Each key in the object is a string(or a symbol in ES6) that maps to a value.
*/

const person:{
    name:string,
    age:number,
    isStudent:boolean,
    address:{city:string,country:string}
}={
    name:"vaibhav",
    age:21,
    isStudent:true,
    address:{
        city:"ahmedabad",
        country:"india"
    }
}
console.log(person.address.city);

// Updating Object Properties
person.address.city="surat"
console.log(person.address.city);


// example

type Product={
    name:string,
    price:number,
    quantity:number
}
const product:Product={
    name:"xyz",
    price:10000,
    quantity:3
}
console.log(product.price);

// return the multiplication of price and quantity using object values

// here a pass a object as a parameter
const calculateTotalPrice=(product:Product)=>{
      return `${product.name} total cost ${product.price*product.quantity}`
}
calculateTotalPrice(product);
console.log(calculateTotalPrice(product));



