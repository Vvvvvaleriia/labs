'use strict';

const sum = (...args) => {
  let value = 0;
  for(const arg of args) value += arg;
  return value;
};
const arg = [1, 2, 3, 4, 5];
console.log(sum(...arg));
module.exports = { sum };
