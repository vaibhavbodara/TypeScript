// Practice Example in getter and Setter Method

//? Q1 : ***Bank Account Balance***

class BankAccount{
    private _balance:number=0; // here we initialize a balnace with 0

    // getter method for current value
    public get balance(){
        return this._balance
    }
    
    // setter method for validation
    public set balance(newBalance:number){
       if(newBalance<0){
        throw new Error("unvalid balance value")
       }
       this._balance=newBalance;
    }
}

// here we create new instance of class BankAccount
const account1:BankAccount=new BankAccount();

account1.balance=200000000;    // this first run in the setter method for validation of value.
console.log(account1.balance); // this is run in the getter method for get a current value which we defined.


// ? Q2 *** Temparature Convert App ***

    // 1 : define a class Temparature with a private property _celsius set 0.
    class Temparature{
    private _celsius=0;

    // 2 : getter method celsius that returns the temparature in celsius
    public get celsius(){
        return this._celsius;
    }

    // 3 : setter method celsius that set the temparature in celsius
    public set celsius(newCelsius:number){
        this._celsius=newCelsius;
    }

    // 4 : getter method fahrenheit that converts Celsius to fahrenheit using the formula (C*9/5)+32
    public get fahrenheit(){
        return ((this._celsius*9)/5)+32;
    }

    // 5 : setter method fahrenheit that converts fahrenheit to celsius using the formula (F-32)*5/9
    public set fahrenheit(newFah){
        this._celsius=((newFah-32)*5)/9;
    }

  
}

  // 6 : instance of the temparature class
  const temp:Temparature=new Temparature();
  
  // 7 : Use the setter to set the temparature in celsius to 25 and then use the getter for fahrenheit. What fahrenheit value do you expect?
  temp.celsius=25;               // this is call setter method 
  console.log(temp.fahrenheit);  // this call getter method fahrenheit

  // 8 : Use the setter to set the temparature in fahrenheit to 98.6 and then use the getter for celsius. What fahrenheit value do you expect? 
  temp.fahrenheit=98.6;
  temp.fahrenheit=100;
  console.log(temp.celsius);










  