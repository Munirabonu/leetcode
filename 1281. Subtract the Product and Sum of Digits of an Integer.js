let subtractProductAndSum = function(n) {
    let str = String(n)
    let sum = 0
    let multiple = 1
    for(let i = 0; i < str.length; i++) {
        sum += +str[i]
        multiple *= +str[i]
    }
    return multiple - sum
};