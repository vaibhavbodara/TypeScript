// type aliases in typescript 

type User1={
    name:string,
    email:string,
    isActive:boolean
}

type Mystring=string

function createUser(user:User1):User1{
    return {name:"",email:"",isActive:true}
}

console.log(createUser({name:"vaibhav",email:"a@gmail.com",isActive:true}))

