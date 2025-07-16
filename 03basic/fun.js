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
    
}

