/*
9.7 Упражнение - Расчёт итогового баланса

Есть выгрузка операций пользователя

const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$. Необходимо сделать функции расчёта:

Итогового баланса
Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
Расчёта среднего расхода и среднего дохода
*/

const balanсeUSD = 100;
const operations = [1000, -1500, 300, -800, 10000];

function calculationOfFinalBalance(balanсeUSD, operations) {
    let tempBalance = balanсeUSD;
    for (const element of operations) {
        tempBalance += element;
        checkingNegativeBalance(tempBalance);
    }
    console.log(`Итоговый баланс ${tempBalance}$`);
}

function checkingNegativeBalance(balanсeUSD) {
    if (balanсeUSD < 0)
        console.log('Баланс отрицательный');
}

function averageExpenseAndIncome(operations) {
    let countNegativeNumbers = 0;
    let countPositiveNumbers = 0;
    let sumNegativeNumbers = 0;
    let sumPositiveNumbers = 0;

    for (const element of operations) {
        if (element > 0) {
            countPositiveNumbers++;
            sumPositiveNumbers += element;
        } else if (element < 0) {
            countNegativeNumbers++;
            sumNegativeNumbers += element;
        }
    }

    if (countNegativeNumbers > 0) {
        console.log(`Средний расход: ${sumNegativeNumbers / countNegativeNumbers}`);
    } else {
        console.log('Раход за период отсутствует');
    }

    if (countPositiveNumbers > 0) {
        console.log(`Средний доход: ${sumPositiveNumbers / countPositiveNumbers}`);
    } else {
        console.log('Доход за период отсутствует')
    }
}

calculationOfFinalBalance(balanсeUSD, operations);
averageExpenseAndIncome(operations);