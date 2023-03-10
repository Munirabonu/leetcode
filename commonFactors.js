
var commonFactors = function (a, b) {
    let arr1 = [], arr2 = [], count = 0
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) arr1.push(i)
    }

    for (let i = 1; i <= b; i++) {
        if (b % i == 0) arr2.push(i)
    }
    let loop = arr1.length >= arr2.length ? arr1 : arr2
    let n = arr1.length >= arr2.length ? arr2 : arr1
    console.log(loop, n);
    for (let i = 0; i < loop.length; i++) {
        if (n.includes(loop[i])) count += 1
    }
    console.log(arr1, arr2, count);
};
commonFactors(503, 937)




var commonFactors = function(a, b) {
    let count = n = 0
    while(n++ <= Math.min(a,b)){
        if(a % n == 0 && b % n == 0)    count++
    }
    return count
};

const commonFactors = (a, b) => (
    new Array(Math.min(a, b)+1).fill(0)
        .reduce((total, _, i) => total + (a % i == 0 && b % i == 0), 0)
)