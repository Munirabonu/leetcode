// massivda ketma ket kelgan bir xil sonlar ozgartirilsin
// nums[i]==num[i+1] => num[i]=num[i]+num[i+1]  num[i+1]=0 
// return da 0 lar massivning oxirida kelishi shart
var applyOperations = function (nums) {
    let res = [], nul = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1] && nums[i + 1] !== undefined) {
            nums.splice(i, 1, nums[i] + nums[i])
            nums.splice(i + 1, 1, 0)
        }
    }
    console.log(nums);
     nums.map((item, index) => {
        if (item !== 0) {
            res.push(item)
        }
        else nul.push(0)
    })
    
    return res.concat(nul)
};

console.log(applyOperations([847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 272]));