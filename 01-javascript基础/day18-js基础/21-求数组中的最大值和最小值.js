// 需求: 数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?

// 找出最大值
var arr = [10, 5, 34, 59, 98];
// 步骤:
// 1.假设一个最大值  为数组的第一个值
var max = arr[0];
// 2.循环遍历数组
for (var i = 0; i < arr.length; i++) {
    // 3.判断某个数是不是大于假设的最大值
    if (arr[i] > max) {
        // 4.如果是  让最大值等于某个数
        max = arr[i];
    }
}
console.log(max);

// 找出最小值
// 1.假设arr[0]为最小值
var min = arr[0];
// 2.初始化表达式
var i = 0;
// 3.while循环 如果初始值大于数组的长度 就让while循环停止
while (i < arr.length) {
    // 3.1 判断如果某个值小于最小值 
    if (arr[i] < min) {
        // 3.1.1 最小值等于某个值
        min = arr[i];
    }
    // 3.2 步进表达式
    i++;
}
console.log(min);


