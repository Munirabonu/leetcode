// 0-9 raqamlardan tashkil topgan son berilgan. 
// soning raqamlardan faqat bittasini shunday almashtringki soni max qiymati kelib chiqsin.
// soning raqamlardan faqat bittasini shunday almashtringki soni min qiymati kelib chiqsin.
// max va min oraligida qancha masofa borligini aniqlansin 
// Example
// 99293302 =>  99790007
// min=00203302 max=99993309

var minMaxDifference = function (num) {
    num = num.toString()
    let max = 0
    let element = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] != '9') {
            element = num[i]
            break;
        }
        
    }
    max = num.replaceAll(element, "9") 
    let min = num.replaceAll(num[0], "0")
    console.log(max,min);
    return max - min
};

console.log(minMaxDifference(99293302));



// 99293302 => 99790007