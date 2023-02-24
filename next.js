// ishlolmadim ((((((
    // js katta sonlar bn yaxshi ishlolmadi
    var addBinary = function (a, b) {
        return (parseInt(BigInt(a), 2) + parseInt(BigInt(b), 2)) == 5.5154844775275476e+29
    };
    
    console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
        "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));  
var removeDuplicates = function (nums) {
        let sort = new Set([...nums])
        let x= Array.from(sort).join('').padEnd(nums.length,"_").split('')
        return `${sort.size}, nums = ${x}`
         
    };
    console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// var mergeTwoLists = function (list1, list2) {

//     let arr = [list1,list2]
//     return arr.flat().sort((a, b) => a - b)
// };
// console.log(mergeTwoLists([], [1, 3, 4]));
// // let ar = [1, 2, 3]
// // let arr = [1, 3, 4]
// // console.log(ar.concat(arr));
// // console.log(ar);

// function check(l, r) {
//     let arr = [0]
//     if (s.includes(l)) {
//         if (l == s[three + 1]) return false
//         if (l == s[s.lastIndexOf(l) + 1]) return false
//         if (s.includes(r)) {
//             if (one !== s.lastIndexOf(l)) {
//                 one = s.lastIndexOf(l)
//                 one2 = s.lastIndexOf(r)
//             }
//             if (one + 1 == one2) {
//                 arr[0] += 1
//             }
//             else if ((one2 - one) % 2 == 1) {
//                 arr[0] += 1
//             }
//             else {
//                 arr[0] -= 1
//             }

//         }
//         else {
//             arr[0] -= 1
//         }
//     }
//     return Boolean(arr[0])
// }


var isValid = function (s) {
    let arr = [1, 1, 1]
    let one = s.indexOf('(');
    let one2 = s.indexOf(')');
    let two = s.indexOf('{');
    let two2 = s.indexOf('}');
    let three = s.indexOf('[');
    let three2 = s.indexOf(']');

    if (s.includes("(")) {
        if (s.includes(")")) {
            if (one !== s.lastIndexOf('(')) {
                one = s.lastIndexOf('(')
                one2 = s.lastIndexOf(')')
            }
            if (one + 1 == one2) {
                arr[0] += 1
            }
            else if ((one2 - one) % 2 == 1) {
                arr[0] += 1
            }
            else {
                arr[0] -= 1
            }

        }
        else {
            arr[0] -= 1
        }
    }
    if (s.includes("{")) {
        if (s.includes("}")) {
            if (two !== s.lastIndexOf('{')) {
                two = s.lastIndexOf('{')
                two2 = s.lastIndexOf('}')
            }
            if (two + 1 == two2) {
                arr[1] += 1
            }
            else if ((two2 - two) % 2 == 1) {
                arr[1] += 1
            }
            else {
                arr[1] -= 1

            }
        }
        else {
            arr[1] -= 1
        }
    }
    else if (s.includes('}')) {
        arr[1] -= 1
    }
    if (s.includes("[")) {
        if ('[' == s[three + 1]) return false
        if ('[' == s[s.lastIndexOf('[') + 1]) return false
        if (s.includes("]")) {
            if (three !== s.lastIndexOf('[')) {
                three = s.lastIndexOf('[')
                three2 = s.lastIndexOf(']')
            }
            if (three + 1 == three2) {
                arr[2] += 1
            }
            else if ((three2 - three) % 2 == 1) {
                arr[2] += 1
            }
            else {
                arr[2] -= 1
            }
        }
        else {
            arr[2] -= 1
        }
    }
    else if (s.includes(']')) arr[2] -= 1
    return Boolean(arr[0]) && Boolean(arr[1]) && Boolean(arr[2])
};

console.log(isValid('(){}}}'));

// {+ }- false
// {} +
// true

// (){[]} { topganda ikkinchisi orasidagi masofa juft bolishi kk 


// massiv berilgan
// massiv ichidagi eng kichik soni topish kk .
//  u son oxirgi element bolishi mumkin emas yaniy indexga qaraladi
// u sondan keyin ozidan katta bolgan son kelishi kk
// natija foydani chiqarish kk
// yaniy keyingi kundagidan avvalgi kuni ayirish kk

// [2,4,1] => 2

// console.log(x);


// var maxProfit = function (prices) {
//     let arr = prices
//     let obj = {}
//     let x = 0
//     let res = []
//     arr.map((item, index) => {
//         obj[item] = index + (!obj[item] ? "" : obj[item])
//     })
//     console.log(obj);
//     for (let item in obj) {
//         if (obj[item] != undefined) {
//             console.log(res);
//             res.push(check(item, obj[item]))
//         }
//     }

//     function check(k, v) {
//         // if (obj[k] != arr.length - 1) {
//         let newArr = Object.entries(obj)
//         for (i = newArr.length - 1; i >= 0; i--) {
//             if (newArr[i][1] > v) {
//                 if (newArr[i][0] - k > x) {
//                     x = newArr[i][0] - k
//                 }
//             }
//         }
//         // }
//         return x
//     }
//     return res.sort((a, b) => a - b)[res.length - 1]
// };


// console.log(maxProfit([1, 4, 1, 4, 3, 1]));

// console.log(String(0));