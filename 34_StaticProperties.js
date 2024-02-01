"use strict";
//***  Static Properties and Methods In Type Script  ***
/* * In typescript, static methods and properties belong to the class itself rather than to instances of the class.
   * By making methods and properties static, we can access them directly from the class without needing to create
     an instance of the class.
   * This is useful for utility functions or properties that do not rely on instance-specific data.
*/
//? Example : Math Operations Utility - creating a utility class to perform various mathematical operations.
// here Math is a static property
class MathOperation {
    // method add() for addition
    static add(num1, num2) {
        return num1 + num2;
    }
    // method subs() for subtraction
    static subs(num1, num2) {
        return num1 - num2;
    }
    // mult() for multiplication
    static mult(num1, num2) {
        return num1 * num2;
    }
    // divi() for division
    static divi(num1, num2) {
        return num1 / num2;
    }
    // modu() for reminder
    static modu(num1, num2) {
        return num1 % num2;
    }
}
MathOperation.PI = Math.PI;
console.log(MathOperation.PI);
console.log(MathOperation.add(5, 5));
console.log(MathOperation.subs(20, 10));
console.log(MathOperation.mult(5, 2));
console.log(MathOperation.divi(20, 2));
console.log(MathOperation.modu(100, 9));
