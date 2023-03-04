// n gacha bolgan sonlar ichida bir biriga bolganda qoldiq 1 boladigan sonlarni toping

// n=5 => 2,3,4,5 5 % 4 = 1 , 5 % 2 = 1 , 4 % 3 = 1  
// n=6 => 6,5,4,3,2 5 % 4 = 1 , 5 % 2 = 1 , 4 % 3 = 1,6 % 5

var distinctIntegers = function (n) {
    return n == 1 ? 1 : n - 1
};