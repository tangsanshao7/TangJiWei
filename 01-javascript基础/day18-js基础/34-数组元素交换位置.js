// 34.请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，
// 然后打印数组内容, var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]
// 步骤
// 1. 声明一个数组
var arr = [1, 2, 4, 5, 7, 7, 666, 0, -1, -2, -3];
// 2. 声明一个变量 保存最小值
var min = arr[0];
// 3. 声明一个变量 保存最大值
var max = arr[0];
// 4. 循环遍历数组
for (var i = 0; i < arr.length; i++) {
    // 4.1 判断数组的值是否大于最大值
    if (arr[i] > max) {
        // 4.1.1 如果大于就把最大值赋值给max
        max = arr[i];
        // 找到这个值的下标
        var a = i;
    }
    // 4.2 判断数组的值是否小于最小值
    if (arr[i] < min) {
        // 4.2.1 如果小于就把最小值赋值给min
        min = arr[i];
        // 找到这个值的下标
        var c = i;
    }
}
// 5. 交换位置
var num = arr[a];
arr[a] = arr[0];
arr[0] = num;
var temp = arr[c];
arr[c] = arr[arr.length - 1];
arr[arr.length - 1] = temp;
console.log(arr);