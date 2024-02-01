
let score:number|string=33
score=44
score="55"

type user={
    name:string,
    id:number
}
type Admin={
    username:string,
    id:number
}

let vaibhav:user|Admin={name:"vaibhav",id:334}
vaibhav={username:"vb",id:334}

function getDbId(id:number|string){
    //
    console.log(`DB id is: ${id}`);
    
}

export{}