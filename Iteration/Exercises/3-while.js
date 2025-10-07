'use strict';

const sum = (...args) => {
  let value = 0;
  while(args.length > 0){
    value += args.pop();
  }
  return value;
};
console.log(sum(5, 10, 15));
module.exports = { sum };
