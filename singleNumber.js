var singleNumber = function (nums) {
    let x = nums.reduce((obj, value, index) => {
        obj[value] == undefined ? (obj[value] = 1) : (obj[value] += 1)
        return obj
    }, {})
    for( let item in x) {
        if(x[item]==1) return +item
    }
};

console.log(singleNumber([1, 2, 1, 2, 3]));