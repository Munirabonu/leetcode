var closetTarget = function (words, target, startIndex) {
    return words.reverse().indexOf(target) + startIndex
};

let arr = ["i","eat","leetcode"]
// console.log(arr.reverse());

console.log(closetTarget(arr, 'ate',0));