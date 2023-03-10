// - + sherigi bor bolgan eng katta musbat son
var findMaxK = function (nums) {
    let res = nums.filter(item => item > 0).sort((a, b) => b - a).find(i => nums.includes(i * (-1)))
    return res ? res : -1

};
console.log(
    findMaxK([-1, 2, 3, 3])

);
