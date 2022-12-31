/*
8.6 Упражнение - Обновление списка задач

Дан список задач
const tasks = ['Задача 1'];

Сделать функции:
Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив
*/

const tasks = ['Задача 1'];
console.log(tasks);

function addToEnd(task) {
    tasks.push(task);
}

addToEnd('Задача 2');
addToEnd('Задача 3');
addToEnd('Задача 4');
addToEnd('Задача 5');
console.log(tasks);

function deleteTaskByName(task) {
    const index = tasks.indexOf(task);
    if (index === -1)
        return;
    return tasks.splice(index, 1)[0];
}

console.log(deleteTaskByName('Задача 6'));
console.log(deleteTaskByName('Задача 3'));
console.log(tasks);

function moveTaskToBeginByName(task) {
    const delTask = deleteTaskByName(task);
    if (delTask === undefined) {
        console.log('Такого таска нет')
        return;
    }
    tasks.unshift(delTask);
}

moveTaskToBeginByName('Задача 50');
moveTaskToBeginByName('Задача 5');
console.log(tasks);