// function


function myname() {

    console.log("s");
console.log("a");
console.log("k");
console.log("s");
console.log("h");
console.log("i");
}

//console.log(myname); //[Function: myname]
// myname //only refrence print nothing

// myname();

function sum(num1,num2)//parameter
 {
    console.log(num1+num2)
}

sum(3,4) //argument //7
sum(3,"4")//34
sum(3,"a")//3a
sum(3,null)//3

function add(num1,num2)//parameter
 {
    console.log(num1+num2)
}

const num3=add(5,6) //11
 console.log("result : " + num3); //result : undefined


function add2(num1,num2)//parameter 
 {
    // let res=num1+num2
    // return res
    return num1+num2 
}
const num4=add2(5,9)
// console.log("result : " + res);// error             
console.log("result : " + num4); //result : 14 

function loginuser(username) 
{
 return`${username} just logged in`
}

console.log(loginuser("sakshi"));
// ******console.log(loginuser()); //output undefined just logged in


function calculatecartprice(...num1)//rest parameter
{
    return num1;
}

console.log(calculatecartprice(100)); //100
console.log(calculatecartprice(100,4,400,356));

//[ 100, 4, 400, 356 ]

function calculatecartprice(val1,val2, ...num1)// rest parameter with default parameter
{
    return num1;
}
console.log(calculatecartprice(100,4,400,356)); //[ 400, 356 ]
console.log(calculatecartprice(100,4)); //[]

const user={
    name:"sakshi",
    age:22,
    isloggedin:true,
    lastactivitytime:"yesterday"
}

function userinfo(anyobject) 
{
    console.log(`Name is ${anyobject.name} and age is ${anyobject.age}`);
    console.log(`User logged in status is ${anyobject.isloggedin}`);
    console.log(`Last activity time is ${anyobject.lastactivitytime}`);
}
userinfo(user);
//output
// Name is sakshi and age is 22 
// User logged in status is true
// Last activity time is yesterday

userinfo(
    {
        name:"manshi",
        age:18,
        isloggedin:false,
        lastactivitytime:"today"
    });

    //output
// Name is s and age is 22
// User logged in status is true
// Last activity time is yesterday

const myNewArray=[1,2,3,4,5,6,7,8,9,10];
function secondValue(getArray)
{
    return getArray[1];
}

console.log(secondValue(myNewArray)); //2
console.log(secondValue([100,200,300,400])); //200