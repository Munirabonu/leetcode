// string time berilgan ? berilgan joy aniq bolmagan vaqt. shu joyga raqam qoyish orqali necha xil vaqtni chiqarishimiz mumkin
// "??:??" => 1440
// "?5:00" => 2 (05,15 25ni qabul qila olmaydi shu uchun 2ta)
// "0?:00" => 10 (0-9 oraligidagi istalgan raqam)


/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    let res = []
    let x = 1;
  
    for (let i = 0; i < time.length; i++) {
        if (time[i] == "?") { res.push(i) }
    }

    res.map((item) => {   
        if (item == 0) {
            if (res[item + 1] == 1) x = 24
            if (+time[1] < 4) x = 3
            else if (+time[1] >= 4) x = 2
        }
       
        else if (item == 1) {
            if (!res.includes(0)) {
                if (time[0] == 0 || time[0] == 1) x *= 10
                else if (time[0] == 2) x *= 4
            }
        }

        else if (item == 3) x *= 6
        else if (item == 4) x *= 10
    })

    return x
};


console.log(

    countTime("0?:22")
);