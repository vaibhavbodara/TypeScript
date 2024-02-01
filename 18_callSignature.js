"use strict";
/*Call Signature : The function call signature refers to the declaration or defination of a function ,
  which includes the function's name,parameters,and return type. It defines the structure and type
  information of a function without including the function's implementation or body.
*/
const student1 = {
    name: "vaibhav",
    age: 21,
    gender: "male",
    // this greet function define inside the student1 object
    greet: (country) => `Welcome My Name is ${student1.name}, and age is ${student1.age} and I am from ${country}`
};
//here we pass object as a parameter in the function
const introduction = (student1) => {
    const { name, age } = student1;
    return `Welcome My Name is ${name} and age is ${age}`;
};
console.log(introduction(student1));
console.log(student1.greet("india"));
////////////////////// Using Call Signature /////////////////////
const student2 = {
    name: "mitul",
    age: 24,
    gender: "male",
    // this greet function define inside the student1 object
    greet: (country) => `Welcome My Name is ${student2.name}, and age is ${student2.age} and I am from ${country}`
};
console.log(student2.greet("usa"));
