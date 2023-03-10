// n  berilgan n va 2 ga bolinadigan eng kichik butun soni qaytaring

// n=6 => 6
// n=5 => 10

var smallestEvenMultiple = function (n) {
    if (n % 2 == 0) return n
    else return n * 2
};

console.log(smallestEvenMultiple(6));
