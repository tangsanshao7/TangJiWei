// 22. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]
// 步骤
// 1. 声明一个数组
var arr = [11, 32, 55, 47, 79, 23];
// 2. 声明一个变量 保存最大值
var max = arr[0];
// 3. 声明一个变量 保存最小值
var min = arr[0];
// 4. 循环遍历数组
for (var i = 0; i < arr.length; i++) {
    // 4.1 判断数组的值是否大于最大值
    // 4.1.1 如果大于就把最大值赋值给max
    if (arr[i] > max) {
        max = arr[i];
    }
    
    // 4.2 判断数组的值是否小于最小值
    if (arr[i] < min) {
        // 4.2.1 如果小于就把最小值赋值给min
        min = arr[i];
    }
}

console.log('最大值为'+max+'最小值为'+min);