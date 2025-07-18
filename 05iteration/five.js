//reduce method
const myNums=[1,2,3,4,5,6,7,8,9,10];
const sum = myNums.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 55

const soppingCart = [
    { item: 'apple', price: 1.2 },
    { item: 'banana', price: 0.8 },
    { item: 'orange', price: 1.5 },
    { item: 'grape', price: 2.0 }
];

const totalPrice = soppingCart.reduce((accumulator, currentItem) => {
    console.log(`Accumulator: ${accumulator}, Current Item Price: ${currentItem.price}`);
    
    return accumulator + currentItem.price;
}, 0);