'use strict';
/*
17.7 Упражнение - получение DOM элементов
*/

const el1 = document.querySelectorAll('.one')[0].innerText;
console.log(el1);

const el2 = document.querySelectorAll('.one')[1].innerText;
console.log(el2);

const el3 = document.querySelector('#two').innerText;
console.log(el3);

const elem3 = document.getElementById('two').innerText;
console.log(elem3);

const el4 = document.querySelector('[user-id="4"]').innerText;
console.log(el4);