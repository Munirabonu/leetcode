var isHappy = function (n) {
    function squres(n) {
        if (n == 2) return false
        if (n == 1) return true
        else if (true) {
            let x = n.toString().split('')
            let y = x.reduce((v, i) => v += (+i) ** 2, 0)
            console.log(y);
            if (y == 2 || y == 4) return false
            else if (y == 1 || y == 7) return true
            else if (y != 1 && y != 2) {
                return squres(y)
            }
            else return false
        }
    }
    return squres(n)
};
console.log(isHappy(9));

// 7 true
// 4 false