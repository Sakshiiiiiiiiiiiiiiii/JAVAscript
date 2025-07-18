/*
This code demonstrates the use of the `map` method to transform an array by multiplying each element by its index.
const myArr=[1,2,3,4,5,6,7,8,9,10];
const myArr2=myArr.map((item,index)=>item*index);
console.log(myArr2); // [0, 2, 6, 12, 20, 30, 42, 56, 72, 90]

*/

//chaining methods
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myArr2 = myArr
  .map((item, index) => item * index) // Multiply each item
  .filter((item) => item > 10) // Filter items greater than 10
  console.log(myArr2); // [12, 20, 30, 42, 56, 72, 90]
// The output is an array of numbers that are the result of multiplying each element by its index, filtered to only include those greater than 10.
// The output is [12, 20, 30, 42, 56, 72, 90]
// This demonstrates how you can chain methods together to perform multiple operations on an array in a concise manner.
// The `map` method is used to create a new array by applying a function to each element of the original array.
// The `filter` method is then used to create a new array that only includes elements that
// satisfy a certain condition (in this case, being greater than 10).
  