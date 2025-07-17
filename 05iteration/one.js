// loop for objects and arrays....and so on
// To iterate over an object's properties, you can use for...in or Object.keys() with
// for...of. Here's an example using for...in:

const myobject={
    js:"javascript",
    py:"python",
    rb:"ruby"   
}
// Using for...in to iterate over an object's properties
for (const key in myobject) {
    //console.log(key);
    console.log(myobject[key]);
    
}
// output for console.log(key);
//output for console.log(myobject[key]);
// javascript
// python
// ruby

const myArray = ['apple', 'banana', 'cherry'];
// Using for...of to iterate over an array
for (const item in myArray) {
    console.log(item);
}
//output: in for of loop
// apple
// banana
// cherry 

//output: in for in loop
// 0
// 1
// 2
// Using for...of to iterate over an array
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('a', 1);
for (const key in map) {
    console.log(key);    
}
//output for console.log(key);
// not applicable for maps, as they are not iterable with for...in
