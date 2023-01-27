// ishlolmadim ((((((
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