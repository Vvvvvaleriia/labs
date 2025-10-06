'use strict';

const fn = () => {
    const obj1 = { name: 'Valeriia' };
    let obj2 = { name: 'Valeriia' };

    obj1.name = 'Marcus';
    obj2.name = 'Marcus';

obj2 = { name: 'Valeriia Marcus' };

return { obj1, obj2 };
};
console.log(fn());
module.exports = { fn };
