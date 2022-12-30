const balance = 1100;
const bonusBalance = 10;
const isBanned = false;
const isExist = true;
const isSelling = true;

if (((balance > 1000) || (bonusBalance > 100)) && !isBanned && isExist && isSelling) {
    console.log("Можно купить игру")
} else {
    console.log("Нельзя купить игру")
}

console.log(!"false");

console.log(!'' && 'Yes' || !('No' && 'false'));

console.log(!'' && true && 'Yes' && Boolean('true') && 'PS');

console.log('' ?? 'Yes');

console.log((true && 'd') ?? '');