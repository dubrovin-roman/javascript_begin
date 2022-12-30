const hourlyRate = 80;
const durationOfWork = 40;
const numberDaysBeforeDeparture = 11 - 2;
let numberHoursForWork = numberDaysBeforeDeparture * 5;

console.log('Успею ли я выполнить работу (40 часов): ' + (numberHoursForWork >= durationOfWork));
console.log('Стоимость 40 часовой работы: ' + (durationOfWork * hourlyRate) + '$');