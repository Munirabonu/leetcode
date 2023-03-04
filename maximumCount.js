// massiv ichidagi manfiy va musbat sonlarni toping. 0 hisobga olinmasin
// qaysi biri kop bolsa shu chiqarilsin 

var maximumCount = function (nums) {
    if (nums[0] > 0) return nums.length
    if (nums[0] < 0) {
        let m = nums.filter((item) => item < 0).length
        let p = nums.filter((item) => item > 0).length
        return m > p ? m : p
    }
};

console.log(maximumCount([-3,-2,-1,0,0,1,2]));