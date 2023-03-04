// soning raqamlariga bolinishi 

var countDigits = function (num) {
    let arr = num.toString().split('')
    return arr.filter((item) => num % item == 0).length

}
console.log(countDigits(1248));