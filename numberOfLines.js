// massiv va string berilgan
// massivning har bir elementi english alifbosidagi harflarning px olchamlari
// berilgan stringni qatorlarga joylashtirish kk
// har bir qator uzunligi 100pxdan 
// qatorlarda harf pxisi yarmida bolinib qoolishi mumkin emas
// return  [a.b] a =>necha qator bolgani b=> oxirgi qatorda nechta px borligi

// [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz" => [3,60]
// [1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1], "abcdefghijklmnopqrstuvwxyz" => [51,3]

var numberOfLines = function (widths, s) {
    let alif = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let str = [], line = 0, count = 1;
    widths.map((item, index) => {
        str.push(alif[index], item)
    })
    for (let i = 0; i < s.length; i++) {
        let x = str.indexOf(s[i])
        line += str[x + 1]
        if (line > 100) {
            count += 1
            line = str[x + 1]
        }
    }
    return [count, line]
};


console.log(numberOfLines([1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1], "abcdefghijklmnopqrstuvwxyz"));
