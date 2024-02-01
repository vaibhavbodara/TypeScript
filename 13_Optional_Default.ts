// * Optional and Default parameters *

/*
* TypeScript allows you to define optional and default parameters in functions.
* optional parameters are denoted by appending a ? symbol after the parameter name.
* and default parameters are specified by providing a default value in the parameter declaration.
*/

const greet2=(name:string,id:number):string=>{
      return `welcome,${name} and ur id is ${id}`
}

console.log(greet2("vaibhav",5));

//1 * Default Parameter *  in parameter we pass some value of parameter that is called default parameter.

const greet3 =(name:string,id:number=1):string=>{
    return `welcome ${name} and ur id is ${id}`
}
greet3("vaibhav") // when we do not pass second argument then default parameter works
console.log(greet3("vaibhav"));


//2 * Optional Parameter * optional parameters are denoted by appending a ? symbol after the parameter name.

const greet4=(name:string,id?:number):string=>{
    
    if(id){
        return `Welcome ${name} and ur id is ${id}`
    }else{
        return `welcome ${name} `
    }
    
}
const emp=greet4("vaibhav")
const emp2=greet4("vaibhav",1)
console.log(emp);
console.log(emp2);




