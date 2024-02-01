"use strict";
// Short Hand Properties In TS Classes
class ShortHand {
    // In constructor we use access modifier than this is called ShortHand properties
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduceShort() {
        return `My Name is "${this.name}",age is "${this.age}" And hobbies are "${this.hobbies}"`;
    }
}
class shorthand extends ShortHand {
    constructor(name, age, hobbies, grade) {
        super(name = name, age = age, hobbies = hobbies);
        this.grade = grade;
    }
    introduceSecond() {
        return `Hello, ${this.name} is here and I am ${this.age} Years old , My hobbies are ${this.hobbies} and 
        my grade is ${this.grade} `;
    }
}
const shorthand1 = new shorthand("vaibhav", 21, ["gymnastic", "coding"], 10);
const shorthand2 = new shorthand("dharmik", 23, ["reading", "cricket"], 12);
console.log(shorthand1.introduceSecond());
