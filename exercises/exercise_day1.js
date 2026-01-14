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
    for (let i = 1; i <= 12; i++) {
        if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12)
            console.log(`Month number ${i}: 31 days`);
        else if (i === 4 || i === 6 || i === 9 || i === 11)
            console.log(`Month number ${i}: 30 days`);
        else {
            if (checkLeapYear(year))
                console.log(`Month number ${i}: 29 days`);
            else console.log(`Month number ${i}: 28 days`);
        }
    }

    if (checkLeapYear(year)) console.log(`${year} is leap year`);
    else console.log(`${year} is not leap year`)

}

printDays()