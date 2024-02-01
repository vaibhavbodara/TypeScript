"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "vaibhav",
    email: "vaibhav@gmail.com",
    isActive: true
};
function createUser({ name: string, isPaid: boolean }) { }
let newUser = { name: "vaibhav", isPaid: false, email: "a@gmail.com" };
createUser(newUser);
// here first curly braces is for return type and second one for defination
function createCourse() {
    return { name: "reactJs", price: 399 };
}
