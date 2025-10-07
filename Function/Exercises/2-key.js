'use strict';

const generateKey = (length, possible) => {
  const base = possible.length;
  let key = '';
  for ( let i = 0; i < length; i++){
    const index = Math.floor(Math.random() * base);
    key += possible[index];
 }
 return key;
};
console.log(generateKey(10, 'abcdefghijklmnopqrstuvwxyz0123456789'));
module.exports = { generateKey };
