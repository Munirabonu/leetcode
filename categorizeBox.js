// 4 toifa box berilgan , qaysi biriga kirishligini aniqlang

// Bulky
// 1.biror qiymati 10^4 dan katta bolsa yoki hajmi 10^9 dan katta bolsa
// Heavy 
// 1.massasi 100 dan katta bolsa
// Both
// Bulky va Heavy 2sini  qanoatlantirsa
// Neither
// hech biriga mos kelmasa
var categorizeBox = function (length, width, height, mass) {
    let v = length * width * height
    let str = ""
    if ((length >= 10000 || width >= 10000 || height >= 10000 || mass >= 10000 || v >= 1e9) && (mass >= 100)) return "Both"
    if (length >= 10000 || width >= 10000 || height >= 10000 || mass >= 10000 || v >= 1e9) return "Bulky"
    if (mass >= 100) return "Heavy"
    else return "Neither"
    return str
};

console.log(categorizeBox(200, 50, 800, 50));
