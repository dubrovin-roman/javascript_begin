/*
13.6 Упражнение - кошелёк
*/

const wallet = {
    balance: 0,
    operations: [],
    increaseBalance: function(reasonOperation, sumOperation) {
        this.balance += sumOperation;
        this.operations.push({
            reason: reasonOperation,
            sum: sumOperation
        });
        return true;
    },
    reduceBalance: function(reasonOperation, sumOperation) {
        if (this.balance < sumOperation) {
            console.log('Недостаточно средств на счете');
            return false;
        };
        this.balance -= sumOperation;
        this.operations.push({
            reason: reasonOperation,
            sum: -sumOperation
        });
        return true;
    },
    getCountOperations: function() {
        return this.operations.length;
    }
};

console.log(wallet.increaseBalance('Зачисление зарплаты', 60000));
console.log(wallet);
console.log(wallet.operations);
console.log(wallet.getCountOperations());
console.log('----------------------');

console.log(wallet.reduceBalance('Покупка телевизора', 30000));
console.log(wallet);
console.log(wallet.operations);
console.log(wallet.getCountOperations());
console.log('----------------------');

console.log(wallet.reduceBalance('Покупка кофемашины', 40000));
console.log(wallet);
console.log(wallet.operations);
console.log(wallet.getCountOperations());
console.log('----------------------');

console.log(wallet.reduceBalance('Покупка телефона', 20000));
console.log(wallet);
console.log(wallet.operations);
console.log(wallet.getCountOperations());
console.log('----------------------');

console.log(wallet.increaseBalance('Зачисление зарплаты', 120000));
console.log(wallet);
console.log(wallet.operations);
console.log(wallet.getCountOperations());
console.log('----------------------');