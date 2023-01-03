/*
11.4 Упражнение - вывод изменений цен
*/

const prices = [[100, 200], [120, 100], [200, 350]];

const result = prices
    .map(arr => arr[1] - arr[0])
    .filter(el => el > 0);

console.log(result);