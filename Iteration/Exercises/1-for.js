'use strict';

const sum = (...args) => {
  let value = 0;
  for(let i = 0; i < args.length; i++){
    value += args[i];
  }
  return value;
};
console.log(sum(5, 10, 15, 20));
console.log(sum(1, 2, 3));
console.log(sum());
module.exports = { sum };
