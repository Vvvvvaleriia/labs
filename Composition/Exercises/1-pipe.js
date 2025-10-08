'use strict';

const pipe = (...fns) => {
    for(const f of fns){
       if(typeof f !== 'function'){
        throw new Error ('All arguments should be functions');
       }
    }
    return(x) => fns.reduce((v, f) => f(v), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const calc = pipe(inc, twice, cube);

console.log(calc(5));

module.exports = { pipe };
