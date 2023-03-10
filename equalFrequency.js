// 4 hour
// stringning faqatgina 1 harfini olish bilan uning elementlar sonini tenglashtiring

// aabbs => s harfi olinsa elementlar 2 tadan bolib qoladi
// aaaa => true
// aabb => false
// aasssdde => false
// az => true 
// rfa => true
// rrfa => true


var equalFrequency = function (word) {
    let count = 0, obj = {}, x = 0
    for (let i = 0; i < word.length; i++) {
        obj[word[i]] = 1 + (obj[word[i]] ? obj[word[i]] : 0)
    }
    console.log(obj);
    let arr = Object.values(obj)
    if (arr.length == 1) return true
    let a = [], b = []
    if (arr.every(i => i == 1)) return true
    else if (arr.every(i => i == arr[0])) return false
    else {
        console.log(arr);
        arr.map((item) => {
            if (item != arr[0]) {
                a.push(item)
            }
            else {
                b.push(item)
            }
        })
        console.log(a, b);
        if (a.length == 1 && a[0] == 1 && b.every((i) => i == b[0])) return true
        else if (b.length == 1 && b[0] == 1&&a.every((i) => i == a[0])) return true
        if (a.length == 1 && a[0] - 1 == b[0] && b.every((i) => i == b[0])) return true
        else if (b.length == 1 && b[0] - 1 == a[0] && a.every((i) => i == a[0])) return true

    }

    return false
};
console.log(equalFrequency('abbcccfff'));


// farqli 1ta bolishi kk
// farqli qolganlaridan 1ga katta yoki 1 bolishi kk
// yoki hammasi 1 bolishi kk
// else hammasi boshqa raqamga teng bolishi mumin false
// yoki boshqa faqat 1 bolishi mumkin
// bu 1chi kelgan bolsa qolgan hammasi bundan 1ta kam bolishi kk
// agar 1chi kichik raqam kelgan bolsa osha raqamni topib qolganidan bitta kattaligini tekshirish kk
//



// [1,2,2,2]  true
// 1,1,2 true
// 1,1,3 false
// 1,1,1,1 true
// 1,1,2,2 false
// 1,1,1,1 true

// let a,b

// [1,2,2,2] [2,2,2] a[1] b[2,2,2]


// [2,2,1,1] 


// other solve
/**
 * @param {string} str
 * @return {boolean}
 */
var equalFrequency = function(str) {
    arr = new Array(26).fill(0)                     // create array (arr) for alphabet letters

    letters_to_array(str)                           // count letters from string -> add to array (arr)

    for (let i = 0; i < arr.length; i++) {          // check if removing one letter can equalize frequency
        temp = arr.slice()
        temp[i]--                
        temp = [...new Set(temp.filter(n => n))]
        if (temp.length == 1) 
            return true
    }        

    function letters_to_array(str) {
        for (let i = 0; i < str.length; i++) {
            arr[str.charCodeAt(i) - 97] ++
        }
        arr = arr.filter(n => n)
    }

    return false
};