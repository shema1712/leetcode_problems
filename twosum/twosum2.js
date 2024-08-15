var nums = [6, 7, 8, 6];
target = 14;
//output(0,2)
var twoSum = (nums, target) => {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
console.log(twoSum(nums, target));
