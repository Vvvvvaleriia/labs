'use strict';

const phonebook = [
    {name: 'Marcus', phone: '+380735829344'},
    {name: 'Timur', phone: '+380639281734'},
    {name: 'Olga', phone: '+380947856123'},
];

const findPhoneByName = (name) => {
    for(const obj of phonebook) {
        if(obj.name === name) return obj.phone;
    }
};

console.log(findPhoneByName('Olga'));
module.exports = { phonebook, findPhoneByName };
