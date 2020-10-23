// 26.  将下面的数组元素前后互换
//          [11, 32,55, 47,79,23]	
//           置换后的数组元素为：
//           [23, 79, 47, 55, 32, 11]


// 步骤
// 1. 声明一个数组
var arr = [11, 32, 55, 47, 79, 23];
// 2.循环遍历数组 遍历的范围是 数组的长度/2;
for (var i = 0; i < arr.length / 2; i++) {
    // 3.定义临时变量 让其等于当前数
    var temp = arr[i];
    // 4.让当前数等于 arr[arr.length-1-i]
    arr[i] = arr[arr.length - 1 - i];
    // 5.让arr[arr.length-1-i]数等于临时变量
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);