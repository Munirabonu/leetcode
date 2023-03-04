// number[] massiv berilgan massivni elementlari yigindisi va raqamlar yigindisi topilsin
// nums=[12,1,4,3] => one=12+1+4+3=20 two = 1+2+1+4+3=11 return one-two = 9

var differenceOfSum = function (nums) {
    let one = eval(nums.join('+'))
    let two = eval(nums.join("").split('').join('+'))
    return one-two
};
console.log(differenceOfSum([1, 2, 32, 2]));