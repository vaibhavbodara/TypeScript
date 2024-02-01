// **************************Getter And Setter Method In TypeScript*********************************

/*? In TypeScript classes , you can use getter and setter methods to control the access and modification of 
    class properties. getter methods allow you to retrieve the value of a property, while setter methods allow
    you to set the value of a property with additional logic or validation. 
*/

/* Get And Set method difference :
   TODO The get method doesn't take any parameters, and the set  methods takes only one parameter.
*/

class Persons4{
    private _age:number|undefined;        
                   
         // using private this property only useful in class Persons4

    constructor(public name:string,protected hobbies:string[]){}

    // Setter Method : for set extra validations
    public set age(age:number){
       if(age>150 || age<0){
        throw new Error("age is not valid")
       }
       this._age=age;
    }

    // Getter Method : for get a value which value we set in the set method
   public get age(): number {
        if(this._age===undefined){
            throw new Error("age is not defined")
        }
        return this._age;
    }
    
    // now we create a method
    introduceParent():string{
       return `Hi, I am ${this.name} and I am ${this._age} years old.I love ${this.hobbies.join(',')}.`
      //return this.hobbies;
    }
    
}    
const persons10:Persons4=new Persons4("vaibhav",["coding","cricket"]);

persons10.age=12;
console.log(persons10.age);



// Call function or we can say that method call
console.log(persons10.introduceParent());








