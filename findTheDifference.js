var findTheDifference = function (s, t) {
    let obj1 = {}, obj2 = {}

    for (let i = 0; i < t.length; i++) {
        if (s[i] !== undefined) {
            obj1[s[i]] = 1 + (obj1[s[i]] ? obj1[s[i]] : 0)
        }
        obj2[t[i]] = 1 + (obj2[t[i]] ? obj2[t[i]] : 0)
    }
        for (let item in obj2) {
            if(obj1[item] !== obj2[item]) {
                return item
            }
        }
    console.log(obj1);
    console.log(obj2);
};

console.log(findTheDifference("abcd", "abcde"));
