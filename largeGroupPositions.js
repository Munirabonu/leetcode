// ketma ket kelgan harflarning uzunligi 2dan katta bolgan harflarni boshlangan va tugagan indexlari chiqarilsin 
// "abs" => []
//  "abbbsdddsss" => [ [ 1, 3 ], [ 5, 7 ], [ 8, 10 ] ]

// 53-minda ishladim shu masalani .natijalarni koramiz


var largeGroupPositions = function (s) {
    let str = ''
    let arr = []
    let ind = [0]
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1]) {
            str += s[i]
            ind.push(i)
            if (str.length > 2) {
                arr.push([...ind])
            }
            str = ''
            ind.shift()
            ind[0] = i + 1
        }
        if (s[i] == s[i + 1]) {
            str += s[i]
        }
    }
    return arr
};

console.log(largeGroupPositions("abbbsdddsss"));