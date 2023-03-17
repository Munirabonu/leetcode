/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    if (!nums.includes(original)) return original
    if (nums.includes(original * 2)) {
        return findFinalValue(nums, original * 2)
    }
    else return original * 2
};
console.log(findFinalValue([5, 3, 1, 12], 6));


// originalni massiv ichidan izlang. agar bolsa ozining 2karralisini ketma ket izlasin. topolmasa oxiri original*2ni qaytarsin
// agar hech biri bolmasa originalni ozini qaytarsin