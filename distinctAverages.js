// massivning min max qiymatlarini toping. ularni ortacha arifmetik qiymatini ozlari bn almashtiring

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    let res = []
    var distinct = function (nums) {
        if (nums.length == 0) {
            res = new Set([...res])
            return Array.from(res)
        }
        else {
            let max = Math.max(...nums)
            let min = Math.min(...nums)
            res.push((max + min) / 2)
            nums.splice(nums.indexOf(max), 1)
            nums.splice(nums.indexOf(min), 1)
            return distinct(nums)
        }
    }
    return distinct(nums).length
};

console.log(distinctAverages([1, 2, 5, 3]));