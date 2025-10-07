'use strict';

const sum = (...args) => args.reduce((a, b) => (a + b), 0);

console.log(sum(5, 10, 15));
module.exports = { sum };
