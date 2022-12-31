/*
8.10 Упражнение - Функция разбора URL

Дан произвольный url вида - https://purpleschool.ru/course/javascript
Нужно сделать функцию, которая выводит в консоль:

Протокол (https)
Доменное имя (purpleschool.ru)
Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleschool.ru/course/javascript';

function getDataFromUrl(url) {
    const arrayFirst = url.split(':');
    const protocolName = arrayFirst[0];
    const arraySecond = arrayFirst[1].split('/');
    const [_, __, domenName, ...innerPath] = arraySecond;
    const innerPathName = '/' + (innerPath.join('/'));
    console.log(`Протокол (${protocolName})
Доменное имя (${domenName})
Пуь внутри сайта (${innerPathName})`);
}

getDataFromUrl(url);