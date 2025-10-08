'use strict';

const array = () => {
    const data = [];
    const get = (i) => data[i];
    get.push = (x) => data.push(x);
    get.pop = () => data.pop();
    return get;
};
const arr = array();

arr.push(5);
arr.push(10);
arr.push(15);

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop()); 
module.exports = { array };
