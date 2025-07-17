//array specific loop

//for of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

//output:
// 1
// 2
// 3
// 4
// 5

const greet="hello";
for(const i of greet)
{
    console.log(i);
    
}

//output:
// h
// e
// l
// l
// o

//maps in JavaScript 
// Using for...of loop to iterate over a Map
// Note: Maps are iterable in JavaScript, so you can use for...of to iterate
// through their entries, keys, or values.
// Example of iterating over a Map using for...of loop

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('a', 1);
//do not add duplicate keys, it will overwrite the value for 'a'
map.set('d', 4);
console.log(map);
//output:
// Map(4) { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4 }
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

//output:
// a: 1
// b: 2
// c: 3
// d: 4 

for (const key of map) {
  //console.log(key);
console.log(key,' :-', value);

}
//output for  console.log(key);
// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]
// [ 'd', 4 ]

//output for console.log(key,' :-', value);
// a  :- 1
// b  :- 2
// c  :- 3
// d  :- 4  

const myObj={
    name:"John",
    age:30,
    city:"New York"
}
// objects are not iterable in JavaScript, so you cannot use for...of directly on an object.
for(const [key,value] of myObj)  // This will not work as myObj is not iterable
{
  //  console.log(key);
}

