/*
10.4 Упражнение - Стрелочные функции
*/

function power(pow) {
    return function (num) {
        return num**pow;
    }
}

const powerOfTwo = power(2);
console.log(powerOfTwo(4));

const powerOfThree = pow => num => num**pow;

console.log(powerOfThree(3)(3));