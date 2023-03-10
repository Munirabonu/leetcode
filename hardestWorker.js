var hardestWorker = function (n, logs) {
    res = logs.map((item, index, array) => {
        if (index == 0) return item
        else {
            return [item[0], item[1] - array[index - 1][1]]
        }
    })
    console.log(resW);
    resW = res.map(item=>item[1])
    x = Math.max(...resW)
    let arr = []
    res.map((item) => {
        if (item[1] == x) {
            arr.push(item[0])
        }
    })
    return Math.min(...arr)
};

console.log(hardestWorker(2, [[1,1],[3,7],[2,12],[7,17]]
    ));