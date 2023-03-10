
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let res = []
    for (let i = 0; i < s.length; i++) {
        if (s.includes(s[i],i+1)) res.push(s.indexOf(s[i], i + 1))
    }
    return s[Math.min(...res)]
};


console.log(repeatedCharacter('sann'));

// "nwcn" => n
// 'aab' => a
