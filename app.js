/*
12.8 Упражнение - маскировка карты
*/

const card = '2342834503458353';

function maskingCard(card) {
    return card.slice(-4).padStart(16, '*');
}

console.log(maskingCard(card));