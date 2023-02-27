var containsDuplicate = function (nums) {
    let x = nums.find((item, index) => {
        return nums.includes(item, index + 1)
    })
    return x!=undefined ? true : false
};
let arr = [1, 2, 3, 4]

console.log(containsDuplicate([0, 2, 3]));