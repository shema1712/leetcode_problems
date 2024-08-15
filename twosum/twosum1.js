// var x = -121;
// var isPalindrome = function (x) {
//   var str = x. toString();
//   var result = str.split("").reverse().join("");
//   return str === result;
// };

// console.log(isPalindrome(x));

var arr = [5, 2, 8, 5, 6, 7];
target = 9;
//output=1,9
var twoSums = function (arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSums(arr, target));
