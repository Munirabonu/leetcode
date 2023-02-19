// oquvchi imtixonga kirish yoki kirmasligini belgilash kk
// agar oquvchi 
// ketma ket 3 kun kechiksa. 
// 2 kun kelmasa .
// imtixonga kirmaydi 

// darsda "P" harfi bn belgilnadi
// kechikish "L" harfi bn belgilanadi
// kelmaslik "A" harfi bn belgilanadi

// "LLPPPLL" => true
// "LLPPPLLL" => false
// "LAPALL" => false
// "LLAPPPL" => true
var checkRecord = function (s) {
    let str = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "A") {
            str += "A"
        }
        if (s[i] == "L" && s[i + 1] == "L" && s[i + 2] == "L") {
            return false
        }
    }
    return str.length >= 2 ? false : true
};

console.log(checkRecord("LLPPPLL"));

