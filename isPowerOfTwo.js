var isPowerOfTwo = function (n) {
    if (n == 1) return true
    else if (n % 2 == 1) return false
    else if (Number.isInteger(Math.log2(n))) return true
    else return false
};

// 256 = 2^x

console.log(
    isPowerOfTwo(6)
);