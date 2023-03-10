// n butun sonini hisobga olgan holda, aylanani n ta teng bo‘lakka bo‘lish uchun zarur bo‘lgan minimal sonni qaytaring.
// n=4 => 2
// n=3 => 3
// n=1 => 0

var numberOfCuts = function (n) {
    if (n == 1) return 0
    if (n % 2 == 1) return n
    else return n / 2
};
