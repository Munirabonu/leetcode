// 2-masala
// raqamni teskarisiga joylashtirganda ham oziga teng bolishini tekshiring
// 121=> true
// -121 => false

var isPalindrome = function (x) {
    let str = x.toString().split('').reverse().join('');

    return str == x
};

console.log(
    isPalindrome(-1211)
);
