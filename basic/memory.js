//stack for primitive, head for non-primitive

//stack
let myname="sakshi";
let chname=myname;
chname="nishad"; //change in copy
console.log(chname);
console.log(myname);

//heap

let userone={
    email:"text@gmail.com",
    mob:"276"
}

let usertwo=userone
usertwo.email="y@gml" //change in refence

console.log(userone.email);
console.log(usertwo.email);

