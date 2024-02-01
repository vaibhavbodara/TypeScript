"use strict";
// Inheritance in TypeScript :
// With Extends and Super KeyWord
//* Inheritance allows a class to reuse the functionality of an exiting class without rewriting it.
/*? Inheritance is a mechanism in which one class aquires the property of another class.
    For Example, a child inherits the traits of his/her parents.
*/
class Persons2 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    // now we create a method
    introduce() {
        return `Hi, I am ${this.name} and I am ${this.age} years old.I love ${this.hobbies.join(',')}.`;
    }
}
const persons8 = new Persons2("vaibhav", 21, ["coding", "cricket"]);
const persons7 = new Persons2("mitul", 24, ["communication", "share-market"]);
const persons6 = new Persons2("dharmik", 23, ["adjustment", "gym"]);
console.log(persons8);
console.log(persons7);
// Call function or we can say that method call
console.log(persons6.introduce());
/* ********************** Extends Keyword **********************

 *  Using  of extends keyword for inherite the super class.
 * after using extends keyword we use the properties and methods of Persons2.
*/
class Students extends Persons2 {
}
const students1 = new Students("vaibhav", 21, ["cricket", "gymnastic"]);
console.log(students1.introduce());
/* ************************* SUPER KEYWORD *******************************
  In typescript,the super keyword is used in the context of class inheritance.
  It allows a subclass(also known as a derived class) to call methods or access properties of its super class(also known as base class).
  This is particularly useful when you want to extend the behavior of a parent class while still leveraging its existing functionality.
*/
class Students1 extends Persons2 {
    constructor(name, age, hobbies, grade) {
        super(name = name, age = age, hobbies = hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()}.I am in grade ${this.grade}`;
    }
}
const students2 = new Students1("vaibhav", 21, ["running", "coding"], 10);
console.log(students2.introduce());
