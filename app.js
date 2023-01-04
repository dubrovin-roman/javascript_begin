/*
13.3 Упражнение - сортировка пользователей
*/

const users = [
    {name: 'Аня', age: 23},
    {name: 'Петя', age: 40},
    {name: 'Миша', age: 30},
    {name: 'Вася', age: 28},
    {name: 'Таня', age: 25}
];

const sortUsers = users.sort((a, b) => {
    return a.age - b.age;
});

console.log(sortUsers);