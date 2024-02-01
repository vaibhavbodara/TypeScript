// Object Oriented Programming in Type Script

// 1 : Class In TS

  //? How to create a class and also instance of class in TS

  //* A class in terms of oop is a blueprint for creating objects
  //* A class is like a blueprint for creating similar things

/*? *In typescript, there is a convention to use PascalCase(also known as UpperCamelCase) for class names.  
    *This means that class names should start with a capital letter and each subsequent word in the class 
     name should also having with a capital letter
*/

class Persons{
    name:string="vaibhav";
    age:number=21;
    hobbies:string[]=["cricket","gymnastic"];
}

// 2 :Create a New Instance of a class

const persons1:Persons=new Persons();
console.log(persons1);
console.log(persons1.hobbies);

// ??? When We Create class instance that time it automatically call our constroctor:

class Persons1{
    name:string;
    age:number;
    hobbies:string[];

    constructor(name:string,age:number,hobbies:string[]){

        /* * This keyword in a constructor inside a class refers to the instance of the object being created.
           * It is used to access and assign values to the instance's properties.
        */
        this.name=name;
        this.age=age;
        this.hobbies=hobbies;
    }
}

const persons2:Persons1=new Persons1("vaibhav",21,["coding","cricket"]);
const persons3:Persons1=new Persons1("mitul",24,["communication","share-market"]);
const persons4:Persons1=new Persons1("dharmik",23,["adjustment","gym"]);

console.log(persons2);
console.log(persons3);
console.log(persons4);






