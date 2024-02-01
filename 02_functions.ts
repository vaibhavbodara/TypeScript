// 

function addTwo(num){
    return num+2
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,isPaid:boolean){}

let loginUser=(name:string,email:string,isPaid:boolean) => {}

addTwo(5)
getUpper("vaibhav")

signUpUser("vaibhav","v@gmail.com",false)
loginUser("h","g@gmail.com",true)



function getValue(myVal:number){
    if (myVal>5) {
        return true
    }
    return "200 ok"
}

const getHello=(s:string):string=>{
    return ""
}

const heros=["thor","spiderman","ironman"]

heros.map((hero):string=>{
    return `hero is ${hero}`
})

// 2 : +++++++++++++++++ Two Types of Function ++++++++++++++++++++++++++

//console
function consoleError(errmsg:string):void{
      console.log(errmsg);
      return 
      
}
function handleError(errmsg:string):never{
      throw new Error(errmsg);
      
}
export{}