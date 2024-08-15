var x = "-121";
var isPalindrome = function (x) {
  var count = 0;
  var len = x.length;
  while (count < len / 2) {
    if (x[count] != x[len - 1 - count]) {
      return false;
    }
    count++;
  }
  return true;
};
console.log(isPalindrome(x));
