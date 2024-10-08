function add7(num) {
    console.log(num + 7);
}
add7(6);

function multiply(a,b) {
    console.log(a * b);
}
multiply(7,9);

function capitalize(string) {
    let string2 = string.toLowerCase();
    let capitalLetter = string2[0].toUpperCase();
    let capitalString = capitalLetter + string2.slice(1)
    console.log(capitalString)
}
capitalize("ajsdhkajsdJKHSJKHsadkjhasd");

function lastLetter(string) {
    console.log(string.slice(-1))
}
lastLetter('CHOCOLATE')