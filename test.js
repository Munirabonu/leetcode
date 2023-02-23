let str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX"
let str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"



// oxiridan boshlab tekshirish
// oxiridan boshiga boshidan oxirigacha qarab yurish 
// indeofiga qarab nechtaligini aniqlab olish 

function check(str1, str2) {
    let s = ''

    for (let i = 0; i < str2.length; i++) {
        if (str2[str2.length - 1] == str2[i]) {
            if (str2[str2.length - 2] == str2[i - 1]) {
                    s = str2.slice(0, i + 1)
                    console.log(s);
                    break
            }
        }
        else {
            s=str2
        }
    }
    return str1.endsWith(s) && str1.startsWith(s) ? s : ''
}
console.log(
    check(str1, str2)
);







// . , ? kelib qolsa uni chiqarmasin 
// bitta soz kelib qolsa faqat shuni chiqarsin 


// eng keng tarqalgan sozni toping matn ichida sozlar space yoki , bn ajratilgan bolishi mumkin.
// eng kop topilgan sozlar taqiqlangan sozlar bolishi kk emas. eng birinchi kelgan eng kop topilgan sozni qaytaring

// https://leetcode.com/problems/most-common-word/

var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.replace(/,|!/g, ' ').replace(".", ' ').toLocaleLowerCase()
    if (!banned.includes(paragraph) && paragraph.split(' ').length == 1) { return paragraph }
    let x = paragraph.split(" ")
    let obj = {}
    console.log(x);
    x.map((item) => {
        obj[item] = 1 + Boolean(obj[item])
    })
    banned.forEach((item) => {
        delete obj[item]
    })
    console.log(obj);
    for (let x in obj) {
        if (obj[x] > 1 && Object.keys(obj).length > 1) return x
        if (Object.keys(obj).length == 1) return x
    }
};


console.log(
    mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"])
);