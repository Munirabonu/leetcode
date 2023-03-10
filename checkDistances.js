// Sizga faqat kichik inglizcha harflardan iborat 0 indeksli s qatori beriladi, bunda s harfidagi har bir harf ikki marta paydo bo'ladi. Shuningdek, 
// sizga 26 uzunlikdagi 0 indeksli butun qator masofasi beriladi. Alifbodagi har bir harf 0 dan 25 gacha raqamlangan 
// (masalan, 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25). Yaxshi oraliqli satrda i-harfning ikkita takrorlanishi 
// orasidagi harflar soni masofa [i] dir. Agar i harfi s ichida ko'rinmasa, masofa [i] ga e'tibor bermaslik mumkin. Agar s oralig'i yaxshi bo'lsa, 
// true qiymatini qaytaring, aks holda false qiymatini qaytaring.

var checkDistances = function (s, distance) {
    let res = []
    for (let i = 0; i < s.length; i++) {
        let v = s.indexOf(s[i], i + 1)
        if (v !== -1) {
            let c = s.charCodeAt(i) - 97
            if (distance[c] == 0) res.push(true)
            else {
                let k = v - i -1
                    console.log(v, k, c, s[i]);
                if (k == distance[c]) res.push(true)
                else res.push(false)
            }
        }
    }
    return res.every(item => item == true)
};

console.log(checkDistances("abaccb", [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

));

// console.log([1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     .length);

console.log('b'.charCodeAt(0));