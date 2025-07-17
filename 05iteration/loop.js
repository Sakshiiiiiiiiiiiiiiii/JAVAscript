//for loop
for (let i = 0; i < 11; i++) {
    const element = i;
    
}
//output: 0,1,2,3,4,5,6,7,8,9,10

//nested for loop
/*
for (let i = 0; i < 3; i++) {
    console.log(`Outer loop iteration: ${i}`);
    
    for (let j = 0; j < 3; j++) {
        // console.log(`i: ${i}, j: ${j}`);
        console.log(`Inner loop iteration: ${j} and outer loop iteration: ${i}`);

        
    }
}
*/

//output:
//Outer loop iteration: 0
//i: 0, j: 0
//Inner loop iteration: 0 and outer loop iteration: 0
//i: 0, j: 1
//Inner loop iteration: 1 and outer loop iteration: 0
//i: 0, j: 2
//Inner loop iteration: 2 and outer loop iteration: 0
//Outer loop iteration: 1
//i: 1, j: 0
//Inner loop iteration: 0 and outer loop iteration: 1
//i: 1, j: 1
//Inner loop iteration: 1 and outer loop iteration: 1
//i: 1, j: 2
//Inner loop iteration: 2 and outer loop iteration: 1
//Outer loop iteration: 2
//i: 2, j: 0
//Inner loop iteration: 0 and outer loop iteration: 2
//i: 2, j: 1
//Inner loop iteration: 1 and outer loop iteration: 2
//i: 2, j: 2
//Inner loop iteration: 2 and outer loop iteration: 2

/*
let myArray = [1, 2, 4, 5];
//for of loop
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}
//output: 1,2,3,4,5
*/

//break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        // console.log("Breaking at 5");
        // break; // exits the loop when i is 5
        continue; // skips the iteration when i is 5
    }
    console.log('the value of i is: ' + i);

    
}
//output for break: 0,1,2,3,4
//output for continue: 0,1,2,3,4,6,7,8,9

//while loop

let j = 0;
while (j < 10) {
    // console.log(j);

    j=j+2;
}
//output: 0,2,4,6,8
let myArray = [1, 2, 3, 4, 5];
let arr=0;
while (arr < myArray.length) {
    console.log(myArray[arr]);
    arr++;
}
//output: 1,2,3,4,5

//do while loop
let k = 0;
// let k=20;
do {
    console.log(k);
    k+3;
}
while (k < 20);
//output: 0,3,6,9,12,15,18
//output: when k=20
//20
