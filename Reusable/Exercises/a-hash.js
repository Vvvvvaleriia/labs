'use strict';

const phonebook = {
    Marcus: '+380735829344',
    Timur: '+380639281734',
    Olga: '+380947856123',
};

const findPhoneByName = (name) => phonebook[name];

console.log(phonebook['Timur']);
module.exports = { phonebook, findPhoneByName };
