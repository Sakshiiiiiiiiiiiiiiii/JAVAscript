const car=["A","B","C"];
const dc=["1","2","3"];
// car.push(dc);
console.log(car);
// console.log(car[3]);

// const newarr=car.concat(dc);
// console.log(newarr);

const allnew=[...car, ...dc]
console.log("All new array = "+allnew);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray=anotherarray.flat(Infinity)
console.log(anotherarray);
console.log(realAnotherArray);

// console.log(Array.isArray("sakshi"));
console.log(Array.isArray(Array.from("sakshi")))//true
console.log(Array.isArray("sakshi"));//false

console.log(Array.from({name:"sakshi"}));  //interviwe









