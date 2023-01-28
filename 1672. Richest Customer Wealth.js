let maximumWealth = function(accounts) {
    let wealths = []
    accounts.forEach(arr => {wealths.push(arr.reduce((a,b) => a + b, 0))})
    return Math.max(...wealths)
};