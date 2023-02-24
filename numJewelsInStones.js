// 2 ta string berilgan birinchi string elementlari marvaridlar. 2-string sizdagi bor toshlar royhati. sizning nechta toshingiz marvarid ekanligini aniqlang
// str1='wF' str2='WFFaass' => 2 
// str1='wF' str2='wFFaass' => 3 
var numJewelsInStones = function (jewels, stones) {
    let c = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            c += 1
        }
    }
    return c
};
console.log(numJewelsInStones('z','ZZZbbbb'));
