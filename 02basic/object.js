//singleton object
// Object.create use Object.create(null) to create an object without a prototype and here is build singleton object

//object literal

const mysym=Symbol('mySymbol'); // creating a symbol

const obj = {
    name:'sakshi', 
    mysym:'key1', // using a string as a key its typeof string
    [mysym]: 'value1', // using a symbol as a key reference to the symbol created above its typeof symbol
age: 25,
    last_loginDays:['mon', 'tue', 'wed'],
    email:"@gmail.com"

};
console.log(obj.name); // output: sakshi
console.log(obj.age); // output: 25
console.log(obj.last_loginDays); // output: ['mon', 'tue', 'wed']
console.log(obj.email); // output: '@gmail.com'
 
// second way to access object properties

//console.log(obj[name]);  output: error: name is not defined
// Using only bracket notation to access properties

/*

console.log(obj['name']); // output: sakshi
console.log(obj['age']); // output: 25
console.log(obj['last_loginDays']); // output: ['mon', 'tue', 'wed']
console.log(obj['email']); // output: '@gmail.com'

console.log(obj[mysym]); // output: value1
console.log(typeof obj[mysym]); // output: symbol

console.log(obj.mysym); // output: key1
console.log(typeof obj.mysym); // output: string

console.log(typeof obj['mysym']); // output: string
console.log(obj['mysym']); // output: key1

console.log(obj['mysym'] === obj.mysym); // output: false, because they are different types (string vs symbol)
console.log(obj); 
// output: { name: 'sakshi', mysym: 'key1', [Symbol(mySymbol)]: 'value1', age: 25, last_loginDays: [ 'mon', 'tue', 'wed' ], email: '@gmail.com' }

//freezing the object
Object.freeze(obj); // This prevents any changes to the object

// Trying to modify the object will not work
obj.name = 'newName'; // This will not change the name property
console.log(obj.name); // output: sakshi

*/

console.log(obj);
/* output:
 { 
name: 'sakshi',
 mysym: 'key1',
 [Symbol(mySymbol)]: 'value1',
 age: 25,
 last_loginDays: [ 'mon', 'tue', 'wed' ],
 email: '@gmail.com'
 }

*/


obj.greeting = function() {
    console.log("Hello i am sakshi!"); // output: Hello i am sakshi!
    
}

// calling the function to see the output
obj.greetingtwo=function()
{
    console.log("Hello i am "+ this.name); // output: Hello i am sakshi!
} 

