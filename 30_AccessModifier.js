"use strict";
// Access Modifier in Type Script :
//?             | Parent class | Child Class | OutSide class
//                ___________   ___________    ___________
//? Public      |  yes            yes               yes
//? Protected   |  yes            yes               no
//? Private     |  yes            no                no
// Parent class Persons3
class Persons3 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    // now we create a method
    introduceParent() {
        return `Hi, I am ${this.name} and I am ${this.age} years old.I love ${this.hobbies.join(',')}.`;
        //return this.hobbies;
    }
}
const persons9 = new Persons3("vaibhav", 21, ["coding", "cricket"]);
console.log(persons9);
console.log(persons9.name);
console.log(persons9.introduceParent());
// Call function or we can say that method call
console.log(persons9.introduceParent());
// Child class Students2
class Students2 extends Persons3 {
    constructor(name, age, hobbies, grade) {
        super(name = name, age = age, hobbies = hobbies);
        this.grade = grade;
    }
    introduceChild() {
        return this.hobbies;
    }
}
const students3 = new Students2("vaibhav", 21, ["cricket", "gymnastic"], 10);
console.log(students3.introduceChild());
