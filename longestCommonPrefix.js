// array ichida kelgan sozlarning oxshash harflarini toping. boshidan boshlanishi hisobga olinsin aks holda ""
// ['a','a','b'] =>""
// ['asd','as','asdsa'] => 'as'

var longestCommonPrefix = function (strs) {

    function loop(str1, str2, ind) {
        let x = ''
        for (let i = 0; i < str1.length + str2.length; i++) {
            if (str1 == str2) {
                x = str1
            }
            else if (str1[i] == str2[i]) {
                x += str1[i]
            }
            else {
                if (ind + 1 !== strs.length) {
                    return loop(x, strs[ind + 1], ind + 1)
                }
                else {

                    return x
                }
                break
            }
        }
        return x
    }

    return loop(strs[0], strs[1], 1);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));