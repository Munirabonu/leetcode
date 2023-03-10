var sortPeople = function (names, heights) {
    let obj = {
    }
    heights.map((item, index) => {
        obj[item] = names[index]
    })
    return Object.values(obj).reverse()
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]
));
