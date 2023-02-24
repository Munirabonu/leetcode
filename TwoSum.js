// 1-masala
// arrayning ichidagi elementlardan targetga teng qoshilmasini indexi toping 

let arr = [2, 5,5, 4]
let target = 10
// chiqish [1,2]

var twoSum = function (nums, target) {
    let newarr = []
    for (let i = 0; i < nums.length; i++) {
        let w = target - nums[i]  // 8
        let inx = nums.indexOf(w) // 0
        if (inx !== i && nums.includes(w)) {
            newarr.push(i, inx)
            break;
        }
        else if (inx == i && nums.includes(w, inx + 1)) {
            newarr.push(inx)
            newarr.push(nums.indexOf(w, inx + 1))
            break;

        }
    }
    return newarr
};
console.log(twoSum(arr, target));

// this is not my solution

const twoSum = function(nums, target) {
    const myObject = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (myObject.hasOwnProperty(complement)) {
        return [myObject[complement], i];
      }
      myObject[nums[i]] = i;
        
    }
  };
