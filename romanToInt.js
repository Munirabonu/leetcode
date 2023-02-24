// #object,#switch #case 
// rim raqamlarini sonlarg otkazing


// agar 1,10.. raqamlaridan keyin 5 raqamlari kelib qolsa ulardan bir ayrib hisoblanadi "IV" 5-1=4 

// III 3
// VIIII 7 
// MCMXCIV 1994 
function select(num) {
    switch (num) {
        case 'I': return 1; break;
        case 'IV': return 4; break;
        case 'V': return 5; break;
        case 'IX': return 9; break;
        case 'X': return 10; break;
        case 'XL': return 40; break;
        case 'L': return 50; break;
        case 'XC': return 90; break;
        case 'C': return 100; break;
        case 'CD': return 400; break;
        case 'D': return 500; break;
        case 'CM': return 900; break;
        case 'M': return 1000; break;
        default: 0; break;
    }
}

var romanToInt = function (s) {
    let obj = {}
    let x = 0
    let n = ''
    for (let i = 0; i < s.length; i++) {
        console.log(i !== s.length - 1, s[i]);
        if (i !== s.length && (s[i] + s[i + 1] == 'IV' || s[i] + s[i + 1] == 'IX' || s[i] + s[i + 1] == 'XL' || s[i] + s[i + 1] == 'XC' || s[i] + s[i + 1] == 'CD' || s[i] + s[i + 1] == 'CM')) {
            n = s[i] + s[i + 1]
            obj[n] = select(n)
            x += obj[n]
        }
        else if (!obj[s[i]]) {
            if (n == '') {
                obj[s[i]] = select(s[i])
                x += obj[s[i]]
            }
            else if (n.length > 0 && n[1] !== s[i]) {
                obj[s[i]] = select(s[i])
                x += obj[s[i]]
            }
        }
        else if (obj[s[i]] && s[i] !== n[1]) {
            x += obj[s[i]]
        }
    }
    return x

};

console.log(romanToInt('MCMXCIV'));
