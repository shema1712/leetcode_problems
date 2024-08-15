var x = -121;

var isPalindrome = function (x) {
  var str = x.toString();
  var result = str.split("").reverse().join("");
  return str === result;
};
