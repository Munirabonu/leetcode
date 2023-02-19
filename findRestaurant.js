// 2ta massiv berilgan. massivdagi oxshash elementlar indexi yigindisi topilsin indexi eng kichik bolgani qiymati qaytarilsin
// ["happy", "sad", "good"] ,["sad", "happy", "good"] =>["happy","sad"]
// [ "happy","sad"] ,["sad",'hello',"happy", "good"] =>["sad"]

var findRestaurant = function (list1, list2) {
    let obj1 = {}
    let arr = []
    list1.map((item) => {
        if (list2.includes(item)) {
            obj1[item] = list1.indexOf(item) + list2.indexOf(item)
        }
    })
    for (let item in obj1) {
        if (obj1[item] == Object.values(obj1).sort((a, b) => a - b)[0]) {
            arr.push(item)
        }
    }
    return arr
};

console.log(findRestaurant(["happy", "sad"]
    , ["sad", 'hello', "happy", "good"]));
