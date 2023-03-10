var averageValue = function (nums) {
    let count = 0, res = []
    nums.map((item) => {
        if (!(item % 6)) {
            count += item
            res.push(item)
        }
    })
    return res.length ? Math.trunc(count / res.length) : 0
};
console.log(averageValue([94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84, 3, 79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21]));