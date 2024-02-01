"use strict";
// type aliases in typescript 
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
console.log(createUser({ name: "vaibhav", email: "a@gmail.com", isActive: true }));
