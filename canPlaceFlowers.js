// massivga n ta 1 raqamini shunday joylashtirish kkiy a2ta bir yonma yon kelishi mumkin emas
// arr= [1,0, 0, 0, 0, 1],n= 2 false
// [1,0 ,0, 0, 1], 1  => true
// [0,0 ,0, 0, 1], 2 => true

var canPlaceFlowers = function (flowerbed, n) {
    let x = 0
    let newArr = flowerbed.filter((item, index, array) => {
        if (item == 0 && array[index - 1] != 1 && array[index + 1] != 1) {
            flowerbed.splice(index,1,1)
            x+=1
        }
    })
    return x>=n
};

console.log(canPlaceFlowers([0,0 ,0, 0, 1], 2));