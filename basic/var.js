const accoundId=32243
let lname="sakshi"
/*
prefer not var 
because of issue in block scope and functional scope
*/
var accountcity="jay"
accountpass="2345"
console.log(accoundId);

//let lname ="manshi" //SyntaxError: Identifier 'lname' has already been declared
 accountcity="ayodhya"
accountpass="63456"
// TypeError: Assignment to constant variable.
// accoundId=7367
let result;
console.table([accoundId, lname ,accountcity, accountpass,result])
