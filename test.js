function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    return true;
}

const count = 60;
const numbers = Array.from({ length: count}, (v,k) => k + 1);
const primes = numbers.filter(n => isPrime(n))
console.log("Primes:", primes)


// const lowerNumber = 1;
// const higherNumber = 20;

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// function isPrime(n) {
//     if (n == 1 || n == 0) return false;

//     for (var i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }
// let N = 100;

// for (let i = 1; i <= N; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }








// let str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX"
// let str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"



// // oxiridan boshlab tekshirish
// // oxiridan boshiga boshidan oxirigacha qarab yurish
// // indeofiga qarab nechtaligini aniqlab olish

// function check(str1, str2) {
//     let s = ''

//     for (let i = 0; i < str2.length; i++) {
//         if (str2[str2.length - 1] == str2[i]) {
//             if (str2[str2.length - 2] == str2[i - 1]) {
//                     s = str2.slice(0, i + 1)
//                     console.log(s);
//                     break
//             }
//         }
//         else {
//             s=str2
//         }
//     }
//     return str1.endsWith(s) && str1.startsWith(s) ? s : ''
// }
// console.log(
//     check(str1, str2)
// );







// // . , ? kelib qolsa uni chiqarmasin
// // bitta soz kelib qolsa faqat shuni chiqarsin


// // eng keng tarqalgan sozni toping matn ichida sozlar space yoki , bn ajratilgan bolishi mumkin.
// // eng kop topilgan sozlar taqiqlangan sozlar bolishi kk emas. eng birinchi kelgan eng kop topilgan sozni qaytaring

// // https://leetcode.com/problems/most-common-word/

// var mostCommonWord = function (paragraph, banned) {
//     paragraph = paragraph.replace(/,|!/g, ' ').replace(".", ' ').toLocaleLowerCase()
//     if (!banned.includes(paragraph) && paragraph.split(' ').length == 1) { return paragraph }
//     let x = paragraph.split(" ")
//     let obj = {}
//     console.log(x);
//     x.map((item) => {
//         obj[item] = 1 + Boolean(obj[item])
//     })
//     banned.forEach((item) => {
//         delete obj[item]
//     })
//     console.log(obj);
//     for (let x in obj) {
//         if (obj[x] > 1 && Object.keys(obj).length > 1) return x
//         if (Object.keys(obj).length == 1) return x
//     }
// };


// console.log(
//     mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"])
// );