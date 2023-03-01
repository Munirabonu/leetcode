// massiv ichidagi eng katta raqamni ildiz ostidagi soni bn almashtiring
// bu amalni k marta takrorlang
// k tugaganda massiv yigindisini qaytaring
var pickGifts = function (gifts, k) {
    if (k == 0) {
        return gifts.reduce((inv, item) => inv + item, 0)
    }
    else {

        let max = Math.max(...gifts)
        let sqrt = Math.floor(Math.sqrt(max))
        gifts.splice(gifts.indexOf(max), 1, sqrt)
        k = k - 1
        return pickGifts(gifts, k)
    }
};

console.log(pickGifts([25,64,9,4,100], 4));