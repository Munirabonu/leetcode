// 26*in+inI

// 'AAA' => 703
// (1+26)*26+s[s.length-1]

// c = (x * 26)


// len tugab qolmasa 26 ga kopayvoti va keyingi indexga qoshilvoti 
// ((1*26 + 2)*26 + 2) * 26 + 3

console.log((1 * 26 + 1) * 26 + 1);
var titleToNumber = function (columnTitle) {
    function title(key) {
        key = key?.toLocaleUpperCase()
        switch (key) {
            case 'A': return 1; break;
            case 'B': return 2; break;
            case 'C': return 3; break;
            case 'D': return 4; break;
            case 'E': return 5; break;
            case 'F': return 6; break;
            case 'G': return 7; break;
            case 'H': return 8; break;
            case 'I': return 9; break;
            case "J": return 10; break;
            case 'K': return 11; break;
            case 'L': return 12; break;
            case 'M': return 13; break;
            case 'N': return 14; break;
            case 'O': return 15; break;
            case 'P': return 16; break;
            case 'Q': return 17; break;
            case 'R': return 18; break;
            case 'S': return 19; break;
            case 'T': return 20; break;
            case 'U': return 21; break;
            case 'V': return 22; break;
            case 'W': return 23; break;
            case 'X': return 24; break;
            case 'Y': return 25; break;
            case 'Z': return 26; break;
            default: return 0
                break;
        }
    }
    let count = 0
    if (columnTitle.length > 1) {
        check(0, 0)
        function check(v, s) {
            if (s !== columnTitle.length) {
                count = v * 26 + title(columnTitle[s])
                return check(count, s + 1)
            }
            else return count
        }
        return count
    }
    else return title(columnTitle)
}
console.log(titleToNumber('AAA'));