// string L va R dan tashkil topgan .stringning l va r belgilar soni bir biriga teng . stringni shunday kichik stringlarga ajratingki
// ularda ham L r lar bir xil bolsin . joylashuv ozgarib ketmasligi kk
// RLRRLLRLRL => 4
// RLRRRLLRLL => 2
var balancedStringSplit = function (s) {
    
    let counter = 0;
    let bal = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] == 'L' ? bal-- : bal++;
        if(bal == 0) {
             counter++;
        }   
    }
    return counter;
    };
    
    balancedStringSplit('RLRRLLRLRL')
    