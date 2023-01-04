/*
12.3 Упражнение - выделение имени
*/

let userName = 'Вася aka Terminator Perdinator Пупкин';

let name = userName.slice(0, userName.indexOf(' '));
console.log(name);

let surname = userName.slice(userName.lastIndexOf(' ') + 1);
console.log(surname);