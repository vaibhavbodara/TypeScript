// **************************Getter And Setter Method In TypeScript*********************************
/*? In TypeScript classes , you can use getter and setter methods to control the access and modification of
    class properties. getter methods allow you to retrieve the value of a property, while setter methods allow
    you to set the value of a property with additional logic or validation.
*/
/* Get And Set method difference :
   TODO The get method doesn't take any parameters, and the set  methods takes only one parameter.
*/
var Persons4 = /** @class */ (function () {
    // using private this property only useful in class Persons4
    function Persons4(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    Object.defineProperty(Persons4.prototype, "age", {
        // Getter Method : for get a value which value we set in the set method
        get: function () {
            if (this._age === undefined) {
                throw new Error("age is not defined");
            }
            return this._age;
        },
        // Setter Method : for set extra validations
        set: function (age) {
            if (age > 150 || age < 0) {
                throw new Error("age is not valid");
            }
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    // now we create a method
    Persons4.prototype.introduceParent = function () {
        return "Hi, I am ".concat(this.name, " and I am ").concat(this._age, " years old.I love ").concat(this.hobbies.join(','), ".");
        //return this.hobbies;
    };
    return Persons4;
}());
var persons10 = new Persons4("vaibhav", ["coding", "cricket"]);
persons10.age = 12;
console.log(persons10.age);
// Call function or we can say that method call
console.log(persons10.introduceParent());
