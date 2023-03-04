// massiv elementlarini ajrating
// [13, 25, 83, 77] => [ 1, 3, 2, 5, 8, 3, 7, 7]
var separateDigits = function (nums) {
    let x = nums.map(item => {
        return item.toString().split("")

    })
    return x.flat(Infinity).map(item => +item)
};

console.log(separateDigits([13, 25, 83, 77]));