
var longestCommonPrefix = function (strs) {

    function loop(str1, str2, ind) {
        let x = ''
        for (let i = 0; i < str1?.length + str2?.length; i++) {
            if (str1 == str2) {
                x = str1
                if (ind + 1 !== strs.length) {
                    return loop(x, strs[ind + 1], ind + 1)
                }
                else {

                    return x
                }
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
    if (strs.length <= 1) return strs.flat(Infinity);
    else return loop(strs[0], strs[1], 1);
};

console.log(longestCommonPrefix(["f", "f", 'b']));