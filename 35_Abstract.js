"use strict";
//********** Abstract Classes In TypeScript **********
/*  Abstract classes provide a way to define common properties and methods that multiple derived classes can shares.
    This promotes code reuse and helps establish a common interface for related classes.
*/
//****  Abstract Class Cannot be Instantiated
/* * abstract classes focus on class inheritance and sharing common functionality,
   * whereas the useContext hook in React focus on managing global state and following components to consume that state.
*/
// ? Example : Shape Hierarchy
/* ? Suppose you are building a graphics applcation,and you want to create a hierarchy of different shapes.
     You can use an abstract base class shape to define common properties and methods that all shapes share.
*/
// area of circle and rectangle
// common class or abstract class
class Shape {
    constructor(color) {
        this.color = color;
    }
}
// find area of the circle 
// if we extends abstract class in child class than require the write all properties of abstract class in the child class
class Circle extends Shape {
    constructor(color, radius) {
        super(color = color);
        this.color = color;
        this.radius = radius;
        this.displayArea = () => {
            console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
        };
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle("red", 10);
console.log(circle.calculateArea());
circle.displayArea();
//  ********** Practice Time **********
// Q1 : Area Of Rectangle
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}
class rectangle extends Rectangle {
    constructor(length, width) {
        super(length = length, width = width);
        this.length = length;
        this.width = width;
        this.displayArea1 = () => {
            console.log(`This is area of Square:`);
        };
    }
    calculateArea1() {
        return this.length * this.width;
    }
}
const square1 = new rectangle(10, 10);
square1.displayArea1();
console.log(square1.calculateArea1());
// Q2 : Arear of Square
