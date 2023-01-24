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

// 2-masala
// raqamni teskarisiga joylashtirganda ham oziga teng bolishini tekshiring
// 121=> true
// -121 => false

var isPalindrome = function (x) {
    let str = x.toString().split('').reverse().join('');

    return str == x
};

console.log(
    isPalindrome(-1211)
);