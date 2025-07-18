// for mostly used loop in array
const arr = [1, 2, 3, 4, 5];

arr.forEach(function(val){
console.log(val);

}) 
//callback function   

// using arrow function 
arr.forEach((val) => {
  console.log('= '+val);
});

const mycoding = [
    {
        name: 'JavaScript',
        duration: '3 months'
    },
    {
        name: 'Python',
        duration: '2 months'
    },
    {
        name: 'Java',
        duration: '4 months'
    }
]

mycoding.forEach((course) => {
    console.log(course.name);
    
});

//output:
// JavaScript
// Python
// Java     
