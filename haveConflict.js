var haveConflict = function (event1, event2) {
    if (+event1[0].replace(':', '') > +event2[0].replace(":", '')) {
        let newarr = event1
        event1 = event2
        event2 = newarr
    }
    let hourOne = +event1[0].replace(':', '')
    let hourTwo = +event1[1].replace(':', '')
    let twohourOne = +event2[0].replace(":", '')
    let twohourTwo = +event2[1].replace(":", '')
    if (twohourOne <= hourTwo) {
        return true
    }
    else return false
};

console.log(
    haveConflict(["10:13", "13:02"]
        , ["1:17", "1:38"]));

