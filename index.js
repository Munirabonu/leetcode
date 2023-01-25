// function select(num) {
//     switch (num) {
//         case 'I': return 1; break;
//         case 'IV': return 4; break;
//         case 'V': return 5; break;
//         case 'IX': return 9; break;
//         case 'X': return 10; break;
//         case 'XL': return 40; break;
//         case 'L': return 50; break;
//         case 'XC': return 90; break;
//         case 'C': return 100; break;
//         case 'CD': return 400; break;
//         case 'D': return 500; break;
//         case 'CM': return 900; break;
//         case 'M': return 1000; break;
//         default: 0; break;
//     }
// }

// var romanToInt = function (s) {
//     let obj = {}
//     let x = 0
//     let n = ''
//     for (let i = 0; i < s.length; i++) {
//         console.log(i !== s.length - 1, s[i]);
//         if (i !== s.length && (s[i] + s[i + 1] == 'IV' || s[i] + s[i + 1] == 'IX' || s[i] + s[i + 1] == 'XL' || s[i] + s[i + 1] == 'XC' || s[i] + s[i + 1] == 'CD' || s[i] + s[i + 1] == 'CM')) {
//             n = s[i] + s[i + 1]
//             obj[n] = select(n)
//             x += obj[n]
//         }
//         else if (!obj[s[i]]) {
//             if (n == '') {
//                 obj[s[i]] = select(s[i])
//                 x += obj[s[i]]
//             }
//             else if (n.length > 0 && n[1] !== s[i]) {
//                 obj[s[i]] = select(s[i])
//                 x += obj[s[i]]
//             }
//         }
//         else if (obj[s[i]] && s[i] !== n[1]) {
//             x += obj[s[i]]
//         }
//     }
//     return x

// };

// console.log(romanToInt('MCMXCIV'));


let arr = ['as'
    , 'asd', 'asdds'
]
var longestCommonPrefix = function (strs) {

    function loop(str1, str2,ind) {
        let x = ''
        for (let i = 0; i < str1.length + str2.length; i++) {
            if (str1 == str2) {
                x = str1
            }
            else if (str1[i] == str2[i]) {
                x += str1[i]
            }
            else {
if(ind+1!==strs.length){
    return loop(x, strs[ind+1],ind+1)
}
else
{

    return x
}
                break
            }
        }
        return x
    }
    
    return loop(strs[0], strs[1],1);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));


    // function loop(strs) {
    //     let x = ''
    //     for (let i = 0; i < strs[0].length + strs[1].length; i++) {
    //         if (strs[0] == strs[1]) {
    //             x = strs[0]
    //         }
    //         else if (strs[0][i] == strs[1][i]) {
    //             x += strs[0][i]
    //         }
    //         else
    //             return loop[x, strs[i]]
    //         break
    //     }
    //     return x
    // }
    
    // return loop(strs[0], strs[1]);
