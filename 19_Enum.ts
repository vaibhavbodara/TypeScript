/* Enums In Typescript: are commanly used when you want to represent a set of related values and choose one value from multiple options.
 * Enums provide a convenient way to define a set of named values and associate them with specific meanings. 
*/

/* In TypeScript,when enum constants are not explicitly assigned numeric values,they are automatically assigned 
 * incremental numeric values starting from 0. the default value for the first enum constant is 0, and 
 * subsequent enum constants receive values incremented by 1. 
*/

/* 
  *** Syntax of Enum = enum name{key:value pairs} ***
*/

// this created enum we use in the object for the multiple choice out of one
enum Roles{
    user="user",
    admin="admin"
}

type LoginDetails ={
    name?:string;
    email:string;
    password:string;
    role:Roles
}

const user1:LoginDetails={
    name:"vaibhav",
    email:"v@gmail.com",
    password:"abcd",
    role:Roles.admin


}
const user2:LoginDetails={
    name:"mitul",
    email:"m@gmail.com",
    password:"efgh",
    role:Roles.user


}


const isAdmin=(user1:LoginDetails)=>{
       const{name,role}=user1   // this is called destructuring of object
       return role==="admin" ? `${name} is allow to edit website`:`${name} is not allow to edit website`
}

// now call the function isAdmin
console.log(isAdmin(user1));    // here pass user1 as a argument

const isLogin=(user2:LoginDetails)=>{
     const{name,role}=user2
     return role==="user" ? `${name} can login system `: `${name} can not login system`
}
console.log(isLogin(user2));


//1 : Here, first element value start with 0 then increment by 1 for another elements
enum CarName {
	Honda,
	Toyota,
	Alto,
	Swift,
}
console.log(CarName);
console.log("Value of Alto is : "+ CarName.Alto);

//2 : If we give some initial value of first element then increse by 1 for other elements
 enum CarName1{
    Tata=20,
    Hyundai,
    Kia,
    MarutiSuzuki,
 }
 console.log(CarName1);
 console.log("value of kia is "+CarName1.Kia);
 
 // 3 : String Enums
 // string enums is better then numeric enums
 enum fruitsName{
    apple="APPLE",
    banana="BANANA",
    orange="ORANGE",
    mango="MANGO"
 }
 console.log(fruitsName);
 console.log(`Fruit Name is ${fruitsName.banana}`);
 
 // 4 : Heterogeneous Enum : Heterogeneous enums define as a this enum contain both string and numeric that is called heterogeneous enum
 
 enum heteroGene{
    name="vaibhav",
    age=21,
    place="ahmedabad",
    salary=50000,
 }
 console.log(heteroGene);
 
 

