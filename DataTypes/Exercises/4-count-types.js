'use strict';

const countTypesInArray = (arr) => {
    const counters = {};
    for (const element of arr ){
        const type = typeoff[element];
        const count = counters[type] || 0;
        counters[type] = count + 1;
    }
    return counters;
};

const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];
const typesCount = countTypesInArray(arr);

module.exports = { countTypesInArray };
