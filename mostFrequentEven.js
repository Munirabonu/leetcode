// 20min
// massiv ichidagi juft,eng kop va eng tez uchragan elementni qaytaring aks holda -1 

var mostFrequentEven = function (nums) {
    if (nums.filter(item => item % 2 == 0).length == 0) return -1
    let obj = {}
    let arr = nums.map(item => {
        if (item % 2 == 0) {
            obj[item] = 1 + (obj[item] ? obj[item] : 0)
        }
    })
    let max = Math.max(...Object.values(obj))
    let res = []
    for (let item in obj) {
        if (obj[item] == max) res.push(item)
    }
    res.map((item, index) => {
        res.splice(index, 1, nums.indexOf(+item))
    })
    console.log(obj, max);
    return nums[res[0]]
};

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
// juft,
// eng kop
// eng birinchi kelgan