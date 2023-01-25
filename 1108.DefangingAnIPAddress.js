// 1-way

let defangIPaddr = function (address) {
  let res = "";
  for (const item of address) {
    if (item === ".") {
      res += "[.]";
    } else {
      res += item;
    }
  }
  return res;
};

// 2-way

// let defangIPaddr = function (address) {
//   return address.split(".").join("[.]");
// };
console.log(defangIPaddr("1.1.1.1"));
