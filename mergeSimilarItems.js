var mergeSimilarItems = function (items1, items2) {
    let obj = {}
    items1.map((i) => {
        obj[i[0]] = i[1]
    })
    items2.map((v) => {
        obj[v[0]] = v[1] + obj[v[0]]
    })
    let res=Object.entries(obj).map(item=>[+item[0],item[1]])
    return res
};

console.log(mergeSimilarItems([[1, 1], [4, 5], [3, 8]], [[3, 1], [1, 5]]));
