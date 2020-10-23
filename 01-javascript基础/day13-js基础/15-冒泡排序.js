// 7.   冒泡排序
// 需求： 把数组[12, 3, 45, 26, 19, 61, 4]按从大到小的顺序排列
var num = [12, 3, 45, 26, 19, 61, 4];
//  外层循环控制循环的趟数
for (var j = 0; j < num.length - 1; j++) {
    // 内层循环控制每趟的次数
    for (var i = 0; i < num.length - 1 - j; i++) {
        // 每一次用当前数字跟下一个数字做比较，大的放前面，小的放后面
        if (num[i] < num[i + 1]) {
            var temp = num[i];
            num[i] = num[i + 1];
            num[i + 1] = temp;
        }
    }
}
console.log(num);
