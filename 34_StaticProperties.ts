//***  Static Properties and Methods In Type Script  ***

/* * In typescript, static methods and properties belong to the class itself rather than to instances of the class.
   * By making methods and properties static, we can access them directly from the class without needing to create
     an instance of the class.
   * This is useful for utility functions or properties that do not rely on instance-specific data.
*/

//? Example : Math Operations Utility - creating a utility class to perform various mathematical operations.

// here Math is a static property
class MathOperation{
    public static PI: number=Math.PI
    
    // method add() for addition
    public static add(num1:number,num2:number){
        return num1+num2
    }

    // method subs() for subtraction
    public static subs(num1:number,num2:number){
        return num1-num2
    }

    // mult() for multiplication
    public static mult(num1:number,num2:number){
        return num1*num2
    }

    // divi() for division
    public static divi(num1:number,num2:number){
        return num1/num2
    }

    // modu() for reminder
    public static modu(num1:number,num2:number){
        return num1%num2
    }
}
console.log(MathOperation.PI);
console.log(MathOperation.add(5,5));
console.log(MathOperation.subs(20,10));
console.log(MathOperation.mult(5,2));
console.log(MathOperation.divi(20,2));
console.log(MathOperation.modu(100,9));











