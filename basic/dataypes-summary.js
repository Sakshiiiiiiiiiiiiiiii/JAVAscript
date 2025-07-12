// two type of data according store and access
// 1. primitive
  //7 types : string,number,boolean,null,undefine,symbole, bigInt
   
/*
const score=199
const scoreValue=25435.4
let userName;
const isActive=false

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
*/

// false;

// 2. reference type(non-primitive)
//array,object,function

// 1. array
/*

const fruits=['apple','banana','orange']
{
  let myobject=
 { name:'apple',
  color:'red'
  }
}

*/

//typeoff 

/*
"33"=>33 after conversion in  number but type number
"33abc"=>NaN after conversion in number but type number 
*/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

let somenumber=33
console.log(typeof somenumber);

let stringnumber=String(somenumber)
console.log(stringnumber);

console.log(typeof stringnumber);


 