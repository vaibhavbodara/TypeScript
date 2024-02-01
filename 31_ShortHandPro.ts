// Short Hand Properties In TS Classes

class ShortHand{
  

        // In constructor we use access modifier than this is called ShortHand properties
        constructor(
        public name:string,
        public age:number,
        protected hobbies:string[]
    ){}

    introduceShort():string{
        return `My Name is "${this.name}",age is "${this.age}" And hobbies are "${this.hobbies}"`
    }
}


class shorthand extends ShortHand{
    constructor(
        name:string,
        age:number,
        hobbies:string[],
       public grade:number
    )
    {
        super(name=name,age=age,hobbies=hobbies)
    }
    introduceSecond():string{
        return `Hello, ${this.name} is here and I am ${this.age} Years old , My hobbies are ${this.hobbies} and 
        my grade is ${this.grade} `
    }
}

const shorthand1:shorthand=new shorthand("vaibhav",21,["gymnastic","coding"],10)
const shorthand2:shorthand=new shorthand("dharmik",23,["reading","cricket"],12)

console.log(shorthand1.introduceSecond());



