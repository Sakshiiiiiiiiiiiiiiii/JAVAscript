const name="sakshi"
const repo=50
console.log(name+repo); //old way
console.log(repo);

//string morden way
console.log(`helo i am ${name} my repo is ${repo}`);

console.log(repo[1]); //2nd index but it will not work
//it will give undefined
//because string is immutable
//it will not change the value of string

//string object

const gamename=new String("sachin"); //
//it will create a string object
console.log(gamename); //it will print the string object
console.log(gamename[0]); //it will print the first character of the string object
console.log(gamename[1]);//it will print the second character of the string object

const name1=gamename.substring(0,2); //it will print the substring of the string object
console.log(name1); //it will print the substring of the string object

const name2=gamename.slice(-8,3); //it will print the substring of the string object


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

console.log(name2); //it will print the substring of the string object