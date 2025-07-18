// const coding=["javascript","typescript","python","java"]

/*const values=coding.forEach((item) => {
console.log(item);
})
console.log(values);*/

// undefined
// The forEach method does not return a value, it returns undefined

/*
const values=coding.forEach((item) => {
console.log(item);
return item; // This return is ignored by forEach
})
console.log(values); // undefined
*/

/*
const myNums=[1, 2, 3, 4, 5];
const newnums=myNums.filter((num)=>{ return num>2})
console.log(newnums);
*/

// [3, 4, 5]    
//if we use {num>2} it will return an empty array  [] for avoiding this we use return num>2
//otherwise use without parantheses like (num) => num > 2 than it will return an array of numbers

// The filter method returns a new array with all elements that pass the test implemented by the provided function
// It does not modify the original array
// The filter method is useful for creating a new array with only the elements that meet a certain
// condition, such as filtering out elements that do not meet a certain criteria
// The filter method does not change the original array, it creates a new array with the filtered
// elements
 
const books=[
    {title:"Book 1", author:"Author 1", year:2020}, 
    {title:"Book 2", author:"Author 2", year:2021},

    {title:"Book 3", author:"Author 3", year:2022},
    {title:"Book 4", author:"Author 4", year:2023},
{title:"Book 5", author:"Author 5", year:2024},
    {title:"Book 6", author:"Author 6", year:2025},
    {title:"Book 7", author:"Author 7", year:2026},
    {title:"Book 8", author:"Author 8", year:2027},
    {title:"Book 9", author:"Author 9", year:2028},
    {title:"Book 10", author:"Author 10", year:2029}
];

const userBooks=books.filter((book) =>book.year >= 2025);
// console.log(userBooks);
// this will return an array of books that were published in or after 2025
// The filter method is used to create a new array with all elements that pass the test implemented
// by the provided function. In this case, the function checks if the year of the book is greater than or equal to 2025.
// The filter method does not modify the original array,
// it creates a new array with the filtered elements.

const userbook=books.filter((book)=>book.title==="Book 1");
//console.log(userbook);







