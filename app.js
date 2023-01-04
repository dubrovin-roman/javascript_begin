/*
11.8 Упражнение - реализация some
*/

const arr = [2, 4, 4, 10, 20];

function some(array, element) {
    const findIndex = array.findIndex(el => el === element);
    
    if (findIndex === -1)
        return false;

    return true;
}

console.log(some(arr, 4));