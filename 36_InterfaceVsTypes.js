"use strict";
// Interface vs Types in typeScript
// here we use intersection for use all data of type stud and studAddre
// here if we use union than any one type's all data we write require in object
const BioData = {
    name: "vaibhav",
    age: 21,
    city: "Ahmedabad",
    state: "Gujrat",
};
const biodata = {
    name: "vaibhav",
    age: 21,
    state: "GJ"
};
console.log(BioData);
console.log(biodata);
;
const BioData1 = {
    name: "vaibhav",
    age: 21,
    city: "Ahmedabad",
    state: "Gj",
};
// when we use interface in classes than we use keyword implements
class biodata1 {
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const st1 = new biodata1("vaibhav", 21, "ahmedabad", "GJ");
const st2 = new biodata1("mitul", 25, "surat", "GJ");
console.log(BioData1);
console.log(st1);
console.log(st2);
