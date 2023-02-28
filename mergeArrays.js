// 2 massiv berilgan masivlar id va uning qiymatidan tashkil topgan. 2 massivni birlashtiring
// agar massivlar id lari bir xil bolib qolsa qiymatlari qoshilsin
// aks holda oz holati qolsin 
// nums1= [[2, 4], [5, 6], [1, 5]] nums2= [[1, 3], [4, 3]] =>[ [ 1, 8 ], [ 2, 4 ], [ 4, 3 ], [ 5, 6 ] ]

// * @param {number[][]} nums1
// * @param {number[][]} nums2
// * @return {number[][]}

var mergeArrays = function (nums1, nums2) {
    let obj1 = {}, obj2 = {};

    let res = []
    nums1.map((item, index) => {
        obj1[item[0]] = item[1]
    })
    nums2.map((item, index) => {
        obj2[item[0]] = item[1]
    })
    for (let item in obj1) {
        if (obj2.hasOwnProperty(item)) {
            obj2[item] = obj1[item] + obj2[item]
            console.log(obj2);
        }
    }
    obj1 = { ...obj1, ...obj2 }
    res = Object.entries(obj1)
    res= res.map((item) => [+item[0], item[1]])
};

console.log(mergeArrays([[2, 4], [5, 6], [1, 5]], [[1, 3], [4, 3]]));