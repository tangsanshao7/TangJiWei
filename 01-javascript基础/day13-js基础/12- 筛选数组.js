// 4.   筛选数组
// 需求：将数组 [2, 0, 6, 1, 77, 0, 52, 0, 25, 7] 中大于等于 10 的元素选出来，放入新数组。
// 步骤
// 1.声明一个数组
var nums = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
// 2. 声明一个空数组
var newnums = [];
// 3. 用循环遍历数组
for (var i = 0; i < nums.length; i++) {
    // 4. 判断数组中的每个值是否大于10
    if (nums[i] > 10) {
        // 4.1 如果大于10 就添加就空数组中
        newnums.push(nums[i])
    }
}
// 5. 打印
console.log(newnums);