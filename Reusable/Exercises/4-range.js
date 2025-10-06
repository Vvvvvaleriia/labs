'use strict';

const range = (start, end) => {
    const length = (end - start);
    if (length < 0) return [];
    const array = new Array(length);
    let i = 0;
    for (let a = start; a <= end; a++){
        array[i++] = a;
    }
    return array;
}
console.log(range(15, 30));

module.exports = { range };
