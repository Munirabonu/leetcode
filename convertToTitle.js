var convertToTitle = function (columnNumber) {
    function title(key) {
        key = key.toString()
        switch (key) {
            case "1": return 'A'; break;
            case "2": return 'B'; break;
            case "3": return 'C'; break;
            case "4": return 'D'; break;
            case "5": return 'E'; break;
            case "6": return 'F'; break;
            case "7": return 'G'; break;
            case "8": return 'H'; break;
            case "9": return 'I'; break;
            case "10": return "J"; break;
            case "11": return 'K'; break;
            case "12": return 'L'; break;
            case "13": return 'M'; break;
            case "14": return 'N'; break;
            case "15": return 'O'; break;
            case "16": return 'P'; break;
            case "17": return 'Q'; break;
            case "18": return 'R'; break;
            case "19": return 'S'; break;
            case "20": return 'T'; break;
            case "21": return 'U'; break;
            case "22": return 'V'; break;
            case "23": return 'W'; break;
            case "24": return 'X'; break;
            case "25": return 'Y'; break;
            case "26": return 'Z'; break;
            default: return ""
                break;
        }
    }
    let str = ''
    function check(columnNumber) {
        if (columnNumber > 26) {
            q = columnNumber % 26
            q == 0 ? q = 26 : columnNumber % 26
            str += title(q);
            k = (columnNumber - q) / 26
            console.log(k);
            if (k > 26) {
                return check(k)
            }
            else if (k == 26) {
                str += title(26)
            }
            else {
                x = k % 26
                str += title(x)
            }
        }
        else {
            str += title(columnNumber)
        }
        return str

    }
    return check(columnNumber).split('').reverse().join('')
};

// 52 => AZ
// A= 1

