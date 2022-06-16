function isLeapYear() {
    return new Date().getFullYear() % 4 == 0 && new Date().getFullYear() % 100 != 0;
}

module.exports = {
    isLeapYear,
};