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