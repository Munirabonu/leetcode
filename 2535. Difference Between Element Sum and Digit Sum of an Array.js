const differenceOfSum = nums => {
    let sum = 0;
    let digitsSum = 0
    for (let i =0 ; i < nums.length; i++) {
        sum += nums[i]
        let str = String(nums[i])
        for(let j = 0; j < str.length; j++){
            digitsSum += +str[j]
        }
    }
    
    return Math.abs(sum - digitsSum)
    
}