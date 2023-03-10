/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
    function arrMax(arr) {
        let obj = {}, max = 0
        arr.map(item => obj[item] = 1 + (obj[item] || 0))
        max = Math.max(...Object.values(obj))
        return max
    }

    let a = arrMax(ranks) >= arrMax(suits) ? arrMax(ranks) : arrMax(suits)

    switch (a) {
        case 5: return "Flush";
        case 4: return "Flush";
        case 3: return "Flush";
        case 2: return "Flush";
        case 1: return "Flush";
    }
};

console.log(bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"]));

// bir xillari
// qaysi birida kop bolsa shuni chiqarish kk