'use strict';

const seq = (f) => (g) => (typeof g === 'number' ? f(g) : seq((x) => f(g(x))));

const result = seq(x => x + 7)
   (x => x * 2)(5);

const result1 = seq(x => x * 2)
   (x => x + 7)(5);

const result2 = seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7);

console.log(result);
console.log(result1);
console.log(result2);



module.exports = { seq };
