// var longestPalindrome = function (s) {
//     let obj = {}
//     for (let i = 0; i < s.length; i++) {
//         obj[s[i]] = 1 + (obj[s[i]] || 0);
//     }
//     console.log(obj);
//     let x = 0
//     let min = 0
//     for (let item in obj) {
//         if (obj[item] % 2 === 0) x += obj[item]
//         else x = obj[item] - 1 + x
//     }
//     let vl=Object.values(obj)
//     if(vl.length==1) return vl[0]
//     return vl.includes(1) ? x + 1 : x
// };

// // console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
// console.log(longestPalindrome('ababababa'));

// operations = ["--X", "++X", "X++"]
// X = 0
// res = operations.map(item => {
//     eval(item)
// })
// console.log(X);

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let k = 0, obj = {}
    nums.map((item, index) => {
        obj[item] ? obj[item].push(index) : obj[item] = [index]
    })

    for (let item in obj) {
        let x = obj[item].length
        if (x > 1) {
            let s = x * 1 / 2 * (x - 1)
            k += s
        }
    }
    return k
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

// massivni 2tadan saralash kk 1-element kichik
// 3 [1,2,3] 12,13,23
// 4 [1,2,3,4] 12,13,14,23,24,34 3+2+1
// 5 [1,2,3,4,5] 12,13,14,15,23,24,25,34,35,45 4+3+2+1

// (a1+an)*n*1/2 4*(4-1)*1/2 

// other solution 
function numIdenticalPairs(nums) {
    let i=0
    let j=i+1
    let count=0
    nums.sort()
    while(i<j){
        if(nums[i]===nums[j]){
            count++;
            j++
        }
        else{
            i++
            j=i+1
            if(nums[j]===undefined)
                {
                    return count
                }
        }
    }
    return count
};


var isStrictlyPalindromic = function(n) {
    
};