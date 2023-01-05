'use strict';

/*
15.10 Упражнение - объект в объекте
*/

const company = {
    name: 'ООО Агро',
    employees: [
        {
            name: 'Света',
            getName: function () {
                return this.name;
            }
        },
        {
            name: 'Олег',
            getName: function () {
                return this.name;
            }
        },
        {
            name: 'Евлампий',
            getName: function () {
                return this.name;
            }
        }
    ],
    ceo: {
        name: 'Вася',
        getName: function () {
            return this.name;
        }
    },
    getCompanyName: function () {
        return this.name;
    },
    getCEOName: function () {
        return this.ceo.getName();
    },
    getEmployeesNames: function () {
        return this.employees.map(emp => emp.getName());
    }
};

console.log(company.getCompanyName());
console.log(company.getCEOName());
console.log(company.getEmployeesNames());