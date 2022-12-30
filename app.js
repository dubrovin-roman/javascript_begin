const depositAmountUSD = 12000;
const depositRate = 0.07 / 12;
const depositTerm = 2 * 12;
const costOfHouseUSD = 13500;

const amountWithInterest = depositAmountUSD * (1 + depositRate) ** depositTerm;

console.log(amountWithInterest);

if (amountWithInterest >= costOfHouseUSD) {
    console.log(`Через два года Вася сможет купить дома за ${costOfHouseUSD}$`);
} else {
    console.log("Вася не сможет купить дом.")
}