// 7.8 Упражнение - Кредит на MacBook

const AGE = 25;
const IS_HAVE_JOB = false;
const OWN_MONEY = 1800;
const COST_LAPTOP = 2000;

function possibleLoan(age, isHaveJob) {
    if (age > 24 && isHaveJob) {
        return 500;
    } else if (age > 24 && !isHaveJob) {
        return 100;
    }
    return 0;
}

function isCanBuyLaptop(age, isHaveJob, ownMoney, costLaptop) {
    const totalMoney = ownMoney + possibleLoan(age, isHaveJob);
    return totalMoney >= costLaptop;
}

console.log(isCanBuyLaptop(AGE, IS_HAVE_JOB, OWN_MONEY, COST_LAPTOP));