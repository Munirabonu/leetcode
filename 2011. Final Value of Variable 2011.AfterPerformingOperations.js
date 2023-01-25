var finalValueAfterOperations = function (operations) {
  let res = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "++X" || operations[i] === "X++") {
      res += 1;
    } else if (operations[i] === "--X" || operations[i] === "X--") {
      res -= 1;
    } else {
      continue;
    }
  }
  return res;
};

console.log(finalValueAfterOperations(["++X", "--X", "X++"]));
