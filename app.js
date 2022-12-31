// Упрощение функции

function toPower(num, power) {
    const result = num ** power;
    return result;
}

console.log(toPower(2, 3));

const res = (num, power) => num ** power;

console.log(res(2, 4));