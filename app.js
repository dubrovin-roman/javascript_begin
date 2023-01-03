// 9.3 Упражнение - Цикл в обратном порядке

const arr = ['!', 'JS', 'люблю', 'Я'];

const newArr = new Array();
for (let i = arr.length - 1; i > -1; i--) {
    newArr.push(arr[i]);
}

console.log(newArr.join(' '));