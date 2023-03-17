// stringning unli harflarini reverse qiling. katta kichik harf farq qiladi 

var reverseVowels = function (s) {
    let n = [], x = ['a', 'i', 'e', 'o', 'u']
    s = s.split("")
    s.map((v, i) => {
        if (x.includes(v)) n.push([v, i])
    })
    for (let i = 0; i < n.length; i++) {

        s.splice(n[i][1], 1, n[n.length - i - 1][0])
    }
    return s.join("")
};

reverseVowels('leetcode')