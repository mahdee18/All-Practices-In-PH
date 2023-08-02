function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        console.log('Yess,This year is leap Year!!')
    }
    else {
        console.log('Sorry, This year is not leap year!!')
    }
}
let yr = isLeapYear(2016)