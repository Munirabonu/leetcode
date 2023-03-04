// n sonining raqamlar yigindisini toping
// raqamlarga + - ishoralari beriladi. 
// 1-kelgan raqam + oladi
// qoshni xonadagilar bil xil bolib qolishi mumkin emas

// 541 => (+5) + (-4) + (+1) = 2
var alternateDigitSum = function (n) {
    n = n.toString()
    let x = 0
    for (let i = 0; i < n.length; i++) x = x + n[i] * (i % 2 ? -1 : 1)
    return x
};

console.log(alternateDigitSum(886996));