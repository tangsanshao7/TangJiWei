// 求出数组var arr = [1, 2, 4, 5, 10, 100, 2, -22]中最小元素的索引，
// 步骤:
// 1. 声明一个数组 
var arr = [1, 2, 4, 5, 10, 100, 2, -22];
// 2. 假设一个最小值
var min = arr[0];
// 3. 声明一个变量保存索引
var num=0;
// 4. 循环遍历数组
for (var i=0; i < arr.length; i++) {
    // 4.1 判断如果某个值小于最小值 
    if (arr[i] < min) {
        // 4.1.1 最小值等于某个值
        min = arr[i];
        // 4.1.2 找到最小值后给num赋值  这里i等于索引
        num=i;
    }
}

console.log('最小的元素是:'+min+'它的索引是'+num);