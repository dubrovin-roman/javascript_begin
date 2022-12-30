const answer = String(prompt("Сколько будет 7 +или- 15?"));

switch (answer) {
    case "22":
    case "-8":
    case "Я не робот":
        console.log("Успех!");
        break;
    default:
        console.log("Вы робот!");
}