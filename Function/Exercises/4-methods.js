'use strict';

const methods = (iface) => {
  const result = [];
  for (const key in iface) {
    const fn = iface[key];
    if (typeof fn === 'function'){
      result.push([key, fn.length]);
    }
  }
  return result;
  };
const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};
console.log(methods(iface));
module.exports = { methods };
