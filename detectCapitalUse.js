var detectCapitalUse = function (word) {
    if (word.toLocaleUpperCase() == word) {
        return true
    }
    else if (word.toLocaleLowerCase() == word) {
        return true
    }
    else if (word[0].toLocaleUpperCase() == word[0] && word.slice(1).toLocaleLowerCase() == word.slice(1)) {
        return true
    }
    else {
        return false
    }
};
console.log(detectCapitalUse("USA"));