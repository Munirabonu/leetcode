// massivning yigindisi topilsin 
// uzunligi massivga teng, 
// left va right massiv berilgan left chapdan boshlab yigindi 
// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.

var leftRightDifference = function (nums) {
    let res = []
    let left = nums.reduce((inV, item, index, array) => {
        if (inV.length != array.length) {
            inV.push(inV[index] + item)
        }
        return inV
    }, [0])
    let right = nums.reduce((inV, item, index, array) => {
        if (inV.length != array.length) {
            inV.push(inV[index] + array[array.length - (index + 1)])
        }
        return inV
    }, [0]).reverse()
    for (let item in left) {
        res.push(Math.abs(left[item] - right[item]))

    }
    return res
};


console.log(leftRightDifference([10, 4, 8, 3]));


// other solution 
// let leftSum = 0;
//     let rightSum = nums.reduce((sum,curr)=>sum += curr,0);

//     return nums.map((curr,i)=>{
//         //leftSum - (rightSum - curr)
//         rightSum -= curr;
//         let res = Math.abs(leftSum - rightSum );
//         leftSum += curr;
//         return res
//     });