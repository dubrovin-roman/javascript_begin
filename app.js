'use strict';

/*
16.4 Упражнение - управление this
*/

function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
    userName: 'Роман',
    password: '12345'
};

const removePasswordUser = removePassword.bind(user, true);

removePasswordUser();

console.log(user.password);