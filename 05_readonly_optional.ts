// readonly and optional in typescript

type user ={
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    CreditCardDetails?: number
}

let myUser: user={
    _id:"12345",
    name:"vaibhav",
    email:"a@gmail.com",
    isActive:false
}
myUser.email="g@gmail.com"
//myUser._id="sjsj"

type cardNumber={
    cardNumber:string
}

type cardDate={
    cardDate:string
}

type cardDetails =cardNumber&cardDate&{
    cvv:number                                                  
}

export{}