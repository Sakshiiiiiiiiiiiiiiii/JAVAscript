const usr=
{
    name: "komal",
    age: 30,
    city: "New York",
    welcomeMessage: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);

        //this references the current object it is not accessing the outside  object

       // console.log(this) //output { name: 'komal', age: 30, city: 'New York', welcomeMessage: [Function: welcomeMessage] }
    }

}
// usr.welcomeMessage;// This will not return the welcome message

// To access the welcome message, you need to call the function
 console.log(usr.welcomeMessage()); 
// Output: Hello, my name is komal and I am 30 years old.
 usr.name = "Jane"; // Changing the name property
console.log(usr.welcomeMessage());
// Output: Hello, my name is Jane and I am 30 years old.
        console.log(this) //output {}
// The 'this' keyword in the context of the function refers to the 'usr' object

// the global object in a browser environment is 'window'
// In a Node.js environment, it is 'global'

function one() {

    let usermane = "komal";
    //console.log(this); // Output: undefined in strict mode, or the global object in non
  //  console.log(this); // In a browser, this will log the global object (window)
}
one(); // Output: Window { ... } in a browser

const myname=() =>
{
    let username="sakshi"
    console.log(username); 
    console.log(this); // Output: {} in strict mode, or the global object in non-strict mode
    console.log(this.username); // Output: undefined, as 'username' is not defined in the global scope
}
myname(); // Output: {} in strict mode, or the global object in non-strict mode

// Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical scope where they are defined.
//in the function this keyword refers to the global object or undefined in strict mode.
// In arrow functions, 'this' is lexically bound, meaning it retains the value of 'this' from the surrounding context where the arrow function was defined, rather than being dynamically bound to the context in which it is called.

/*

const add=(num1,num2) =>{
    return num1 + num2;
}
console.log(add(5, 10)); // Output: 15
*/

//impplicit return in arrow functions
// const add = (num1, num2) => num1 + num2;
// console.log(add(5, 1)); // Output: 6

const add = (num1, num2) => ({usname:"saskhi"});
console.log(add(5, 1)); // Output: { usname: 'saskhi' } without parentheses its print undefined

// const myArray = [1, 2, 3, 4, 5];
// myArray.forEach() 

