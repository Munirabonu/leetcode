var isPalindrome = function (x) {
    let str = x.toString().split('').reverse().join('');

    return str == x
};

console.log(
    isPalindrome(-1211)

);