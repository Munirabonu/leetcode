var canConstruct = function (ransomNote, magazine) {


    for (let i = 0; i < ransomNote.length; i++) {
        if (magazine.includes(ransomNote[i])) {
            magazine= magazine.replace(ransomNote[i], '')
            console.log(ransomNote[i]);
        }
        else return false
    }
    return true
};

console.log(canConstruct("aa", "ab"));
