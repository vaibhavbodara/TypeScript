/**
 ****************** NUMBERS OF DIFFERENT PROPERTIES ******************
 
 * MAX_VALUE:          It has the largest possible value 1.7976931348623157E+308 in JavaScript.
 * MIN_VALUE:          It has the smallest possible value 5E-324 in JavaScript.
 * NaN:                This property has Equal to a value that is not a number.
 * NEGATIVE_INFINITY:  This has a value that is less than MIN_VALUE.
 * POSITIVE_INFINITY:  This has a value that is greater than MAX_VALUE.
 * PROTOTYPE:          This property is used to assign new properties and methods to the Number object.
 * CONSTRUCTOR:        This property will return the function that created this object’s instance.
*/

console.log(" Number Properties in TypeScript: "); 
console.log("Maximum value of a number variable has : "+ Number.MAX_VALUE); 
console.log("The least value of a number variable has: "+ Number.MIN_VALUE); 
console.log("Value of Negative Infinity: "+ Number.NEGATIVE_INFINITY); 
console.log("Value of Negative Infinity:"+ Number.POSITIVE_INFINITY); 



/************************ METHODS IN NUMBERS *****************************
 
 * toExponential(): This method will return a number to display in exponential notation.
 * toFixed():       This method will stable the number to the right of the decimal with a specific number of digits.
 * toLocaleString():This method is used to convert the number into a local specific representation of the number.
 * toPrecision():   It will define total digits to the left and right of the decimal to display of a number. 
                    It will also show an error when there is negative precision.
 * toString():      Used to return the string representation of the number in the specified base.
 * valueOf():       This method will return number’s primitive value.
 */



const num:number=20
console.log(num.toExponential());

