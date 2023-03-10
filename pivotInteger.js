// n gacha bolgan sonlar orasida raqamlarni yigindisini toping 
// ketma ket qoshilib ketilayotgan raqamlar qachonki teng bolib qolsa shu index qaytarilsin aks holda -1
// n=8
// 1+2+3+4+5+6=21
// 6+7+8=21 


var pivotInteger = function (n) {
    let max = 0;
    let min = (1 + n) * n / 2;
    for (let i = 1; i <= n; i++) {
        if (min == max + i) return i
        else {
            min -= i
            max += i
        }
    }
    return -1
};
console.log(pivotInteger(8));