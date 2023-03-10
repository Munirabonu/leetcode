
// yonalish oldim 

var findSubarrays = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== undefined) {
            let x = nums[i] + nums[i + 1]
            if (res.includes(x)) return true
            else res.push(x)
        }
    }
    return false
};

console.log(findSubarrays([77, 95, 90, 98, 8, 100, 88, 96, 6, 40, 86, 56, 98, 96, 40, 52, 30, 33, 97, 72, 54, 15, 33, 77, 78, 8, 21, 47, 99, 48]
));