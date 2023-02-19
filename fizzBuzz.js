// yangi massiv qaytaring sizga n soni berilgan . n soni asosida massiv hosil qiling
// shartlari 
// qiymat 3 va 5ga bolinsa fizzBuzz
// qiymat 3 ga bolinsa fizz
// qiymat  5ga bolinsa Buzz
// sozlari qoshilsin
// kirish n=3
// chiqish ['1','2','fizz']

var fizzBuzz = function (n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push('FizzBuzz')
        }
        else if(i % 3 == 0){
            arr.push('Fizz')
        }
        else if(i % 5 == 0){
            arr.push('Buzz')
        }
        else {

            arr.push(i.toString());
        }
    }
return arr
};