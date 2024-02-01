// Access Modifier in Type Script :

//?             | Parent class | Child Class | OutSide class
//                ___________   ___________    ___________
//? Public      |  yes            yes               yes
//? Protected   |  yes            yes               no
//? Private     |  yes            no                no



// Parent class Persons3
class Persons3{
    public name:string;          // this property accessible in all classes
           age:number;            
     hobbies:string[];           
    constructor(name:string,age:number,hobbies:string[]){

      
        this.name=name;
        this.age=age;
        this.hobbies=hobbies;
    }
    // now we create a method
    introduceParent():string{
       return `Hi, I am ${this.name} and I am ${this.age} years old.I love ${this.hobbies.join(',')}.`
      //return this.hobbies;
    }
    
}
const persons9:Persons3=new Persons3("vaibhav",21,["coding","cricket"]);
console.log(persons9);
console.log(persons9.name);
console.log(persons9.introduceParent());


// Call function or we can say that method call
console.log(persons9.introduceParent());

// Child class Students2
class Students2 extends Persons3{
    grade:number;

    constructor(name:string,age:number,hobbies:string[],grade:number){
        super(name= name,age=age, hobbies=hobbies);
        this.grade=grade;
    }

    introduceChild():string[]{
        return this.hobbies;
    }
}

const students3:Students2=new Students2("vaibhav",21,["cricket","gymnastic"],10)
console.log(students3.introduceChild());














