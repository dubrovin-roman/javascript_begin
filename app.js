'use strict';

/*
16.7 Упражнение - работа с замыканиями
*/

const userInfo = {
    balance: 0,
    operations: 0,
    increse(sum) {
        this.balance += sum;
        this.operations++;
    }
}

function newUser() {
    const user = {
        balance: 0,
        operations: 0,
        increse(sum) {
            this.balance += sum;
            this.operations++;
        }
    }
    return function() {
        return user;
    }
}

const user1 = newUser();

user1().increse(100);
user1().increse(100);
console.log(user1());

const user2 = newUser();
user2().increse(50);
console.log(user2());
