var plusOne = function (digits) {
    digits = (BigInt(digits.join('')) + 1n).toString(10)
    let arr = []
    for (let i = 0; i < digits.length; i++) {
        arr.push(+digits[i])
    }
    return arr

};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
    ));

// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// output
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
