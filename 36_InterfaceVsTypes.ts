// Interface vs Types in typeScript


// 1:
//? Use custom types when you need unions, intersections , or mapped types.
//? Use interface when defining object shapes or classes that adhere to a contract.

//2:
//? Interfaces can extend other interfaces to inherit their members.
//? Custom types can use unions and intersections for more complex type compositions.




type stud={
    name:string;
    age:number;
}

type studAddre={
    city:string;
    state:string;
}

// here we use intersection for use all data of type stud and studAddre
// here if we use union than any one type's all data we write require in object
const BioData:stud & studAddre={
    name:"vaibhav",
    age:21,
    city:"Ahmedabad",
    state:"Gujrat",
}

const biodata:stud|studAddre={
    name:"vaibhav",
    age:21,
    state:"GJ"
}

console.log(BioData);
console.log(biodata);
type Data=stud|studAddre


// * Using of interface *
// * We do not use Union And Intersection in interface *
// * Same interface name treated as one *
interface stud1{
    name:string;
    age:number;
}

interface stud1{
    city:string;
    state:string;
}

// here we use keyword extends for combine two interface
interface Data1 extends stud1{};

const BioData1:Data1={
    name:"vaibhav",
    age:21,
    city:"Ahmedabad",
    state:"Gj",
}

// when we use interface in classes than we use keyword implements
class biodata1 implements Data1{

    constructor(public name:string,public age:number,public city:string,public state:string){}
}

const st1=new biodata1("vaibhav",21,"ahmedabad","GJ")
const st2=new biodata1("mitul",25,"surat","GJ")

console.log(BioData1);
console.log(st1);
console.log(st2);





















