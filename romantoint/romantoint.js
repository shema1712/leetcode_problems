s = "LVIII";
Output = 58;
var romanToInt = (s) => {
  let romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (var i = 0; i < s.length; i++) {
    if (romanNum[s[i]] < romanNum[s[i + 1]]) {
      total = total - romanNum[s[i]];
    } else {
      total = total + romanNum[s[i]];
    }
  }
  return total;
};
console.log(romanToInt(s));
