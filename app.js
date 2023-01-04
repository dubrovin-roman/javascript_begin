/*
13.4 Упражнение - преобразование объектов
*/

const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'DevOps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    }
];

const usersMap = users.map(el => {
    return {
        fullName: el.name + ' ' + el.surname,
        skillsNum: el.skills.length
    };
});

console.log(usersMap);