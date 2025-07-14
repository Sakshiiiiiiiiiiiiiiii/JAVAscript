// This is a singleton object

const tinderUser=new Object();
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.location = "New York";
tinderUser.interests = ["hiking", "reading", "traveling"];
tinderUser.bio = "Adventure seeker and coffee lover.";
// console.log(tinderUser); 

const tinderUser2 ={
    name: "Jane Smith",

    age: 28,
    location:{
        city: "Los Angeles",
        state: "California" 
        }
    }

// console.log(tinderUser2);

/* output:
 { 
name: 'Jane Smith', 
age: 28, 
location: 
   {
      city: 'Los Angeles', 
      state: 'California', 
   }
            }
*/

console.log(tinderUser2.location.city); // Los Angeles
console.log(tinderUser2.location.state); // California
console.log(tinderUser2.location.fullname.first); // Jane
console.log(tinderUser2.location.fullname.last); // Smith

const obj1 = {
    name: "Alice",
    age: 25,
    location: "San Francisco"
};

const obj2 = {
    name: "Bob",
    age: 30,
    location: "Seattle"
};

// console.log(obj1);
// console.log(obj2);

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

/* output:
{
  name: 'Bob',
  age: 30,
  location: 'Seattle'
}
*/

/*

console.log(Object.keys(obj3)); // ['name', 'age', 'location']
console.log(Object.values(obj3)); // ['Bob', 30, 'Seattle']
console.log(Object.entries(obj3)); // [['name', 'Bob'], ['age', 30], ['location', 'Seattle']]
console.log(obj3.hasOwnProperty('name')); // true
console.log(obj3.hasOwnProperty('lastname')); // false
 
*/

const course = {
    title: "JavaScript Basics",
    duration: "4 weeks",
    topics: ["Variables", "Functions", "Objects", "Arrays"],
    instructor: {
        name: "John Smith",
        experience: "5 years"
    }
};
 //console.log(course.instructor.name); // John Smith
 
const {instructor}= course;
// console.log(instructor.name); // John Smith

const {title, duration, topics} = course;
// console.log(title); // JavaScript Basics
// console.log(duration); // 4 weeks
// console.log(topics); // ['Variables', 'Functions', 'Objects', 'Arrays']

//object destructuring
const {instructor: {name, experience}} = course;
// console.log(name); // John Smith
// console.log(experience); // 5 years

//object destructuring with default values
const {title: courseTitle, duration: courseDuration, topics: courseTopics = []} = course;
// console.log(courseTitle); // JavaScript Basics
// console.log(courseDuration); // 4 weeks
// console.log(courseTopics); // ['Variables', 'Functions', 'Objects', 'Arrays']

//API
//json
// {
//     name: "John Doe",
//     age: 30,
//     location: "New York",
// }



