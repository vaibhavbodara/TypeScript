//1:Add two numbers
//2:How to catch error and solve it
//3:TS configuration file
// 1 : In javascript, addition of two numbers
//* function define
//@ts-ignore
function sum(a, b) {
    return a + b;
}
//* function call
console.log(sum(5, 7));
/* 2 : ts configuration file
with help of ts configuration file when in ts file have some error than ,
js file can not create because of error..
*** ts config file command : tsc --init
*/
// 3 : fat arrow function syntax : const name=()=>{}
//@ts-ignore
var add = function (c, d) {
    return c + d;
};
console.log(add(10, 5));
// CORE TYPES IN TYPE SCRIPT
// number,string,boolean
var num0 = 10;
