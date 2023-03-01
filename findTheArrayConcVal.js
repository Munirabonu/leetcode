// massiv berilgan massivning elementlari umumiysini toping
// 1-chi va oxirgi element raqamlari qoshilmasini misol uchun 12,34 => 1234
// keyin barchasini mos ravishda yigindisini topib bering

var findTheArrayConcVal = function (nums) {
    let x = 0
    let str = ''
    for (let i = 0; i < nums.length; i++) {
        if (nums.length % 2 == 0 && (nums.length / 2).toFixed() == i) {
            break;
        }
        if (nums.length % 2 == 1 && Math.ceil(nums.length / 2) - 1 == i) {
            x += nums[i]
            break
        }
        else {
            str = str + nums[i] + nums[nums.length - (i + 1)]
            x += +str
            str = ''
        }
    }
    return x
};


console.log(
    findTheArrayConcVal([7,52,2,4])
);