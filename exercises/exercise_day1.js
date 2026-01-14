// check leap year
const year = 2026;

function checkLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}

function printDays() {
    const months31 = [1, 3, 5, 7, 8, 10, 12];
    const months30 = [4, 6, 9, 11];
    for (let i = 1; i <= 12; i++) {
        if (months31.includes(i))
            console.log(`Month ${i}: 31 days`);
        else if (months30.includes(i))
            console.log(`Month ${i}: 30 days`);
        else {
            const days = checkLeapYear(year) ? 29 : 28;
            console.log(`Month ${i}: ${days} days`);
        }
    }

    if (checkLeapYear(year)) console.log(`${year} is leap year`);
    else console.log(`${year} is not leap year`)

}

printDays()