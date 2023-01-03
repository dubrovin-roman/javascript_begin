/*
11.6 Упражнение - среднее значение
*/

const arr = [1, 4, 4, 10];

const arrSum = arr.reduce((acc, el) => acc += el, 0);

console.log(`Среднее значение: ${arrSum / arr.length}`);