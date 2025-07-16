//scope
/* 
let a=10;
const b=20;
var c=30;

consloe.log(a); // 10
console.log(b); // 20
console.log(c); // 30

*/

let a=29;
//consloe.log(a); // 29

// Scope in JavaScript 
if (true) {
    let a = 100; // block scope
    // consloe.log(a); // 100, let is block scoped
    const b = 200; // block scope
    var c = 300; // function scope or global scope   avoide using var beacuse it is re-declared in the same scope 

}

// consloe.log(a); // 29, a is not re-declared in the same scope

    //console.log(a); // ReferenceError: a is not defined
    //console.log(b); // ReferenceError: b is not defined
    console.log(c); // 300, var is function scoped or global scoped
var c=100
consloe.log(c); // 100, var is function scoped or global scoped it changes the value of c 300 to 100


// Function Scope

function one() {
    const name = "one"; // function scope
    console.log(name); // one
    // console.log(two); // ReferenceError: two is not defined
    
function two() {
        const website = "youtube"; // function scope
        console.log(website); // youtube
        // console.log(name); // one, can access outer function scope
    }
    two(); // two(); // ReferenceError: two is not defined, because two is not defined in the global scope
}
one(); // one
two(); // ReferenceError: two is not defined, because two is not defined in the global scope

// nested if block scope
if (true) {
    let x = 10; // block scope
    if (x==10) {
        let y=20;
        consloe.log("Hi sakshi I am true"); // Hi sakshi I am true

    }
    // console.log(y); // ReferenceError: y is not defined, because y is not defined in the global scope
    console.log(x); // 10, x is defined in the block scope

    
}

consloe.log("End of the program"); // End of the program

//+++++++++++++++++++++++++++++++++++++++++interview question++++++++++++++++++++++++++++++++++++++++++

test(10) //accessing the function before it is defined, this is possible because of function hoisting
// console.log(test(10)); // 11, this will work because the function is hoisted

function test(num) {
return num+1
}
test(10); // 11 but not printed
console.log(test(10)); // 11, now it is printed because we are logging the result of the function call


/*
addtwo(10); // accessing the function before it is defined, this will not work because the function is not hoisted
// console.log(addtwo(10)); // ReferenceError: addtwo is not defined, this
// 
*/

// function expression, it is not hoisted
// so we cannot access the function before it is defined
// this is the difference between function declaration and function expression

const addtwo = function(num) 
{
    return num+2
}
addtwo(10); // 12 but not printed
console.log(addtwo(10)); // 12, now it is printed because we are logging the result of the function call
