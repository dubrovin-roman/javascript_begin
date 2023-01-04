/*
12.5 Упражнение - проверка номера
верные
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';

не верные
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';
*/

const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';

const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function validNumber(num) {
    const checkNum = num.trim();
    if (checkingForAllowedCharacters(num)
        && checkNum.length >= 11 
        && checkNum.length <= 17
        && (checkNum.startsWith('8') || checkNum.startsWith('+7')))
        return true;
    
    return false;
}

function checkingForAllowedCharacters(num) {
    const allowedChar 
    = ['+', '(', ')', '-', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (const ch of num) {
        if (!allowedChar.includes(ch))
            return false;
    }

    return true;
}

console.log(validNumber(num1));
console.log(validNumber(num2));
console.log(validNumber(num3));
console.log(validNumber(num4));
console.log(validNumber(num5));
console.log('------------------');
console.log(validNumber(num1Error));
console.log(validNumber(num2Error));
console.log(validNumber(num3Error));
console.log(validNumber(num4Error));