// oxirgi harfni tekshiring. sitring berilgan stringning sozlarini boshlangan va tugagan harflari tekshirilsin.
// agar soz oxiriga borib qolsa 1-chi soz bn tekshirilsin 

// string='assa fsdf tgst' => false sababli oxirgi soz t bn tugagan boshlanish a bn boshlangan

var isCircularSentence = function (sentence) {
    sentence = sentence.split(' ')
    let res = sentence.map((element, index, arr) => {
        if (index + 1 != arr.length) return element[element.length - 1] == arr[index + 1][0]
        else {
            return element[element.length - 1] == arr[0][0]
        }
    });
    return res.every(item => item)
};


console.log(
    isCircularSentence("leetcode")
);