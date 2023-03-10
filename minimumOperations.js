// array
// barchasini 0 qilish uchun necha qadam kk . barcha itemlardan eng kichigini ayirish kk boladi.

var minimumOperations = function (nums) {
    let c = 0
    function num(nums) {
        if (nums.every(i => i == 0)) {
            return c
        }
        else {
            c += 1
            let x = Math.min(...nums.filter(item => item != 0))
            nums = nums.map(item => {
                return item != 0 ? item - x : item
            })
            return num(nums)
        }
    }

    return num(nums)
};




console.log(minimumOperations([1, 5, 0, 3, 5]));

