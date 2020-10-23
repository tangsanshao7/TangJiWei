// 7.  求1到100之间的累加值，其中不包含个位数为9的数字（while实现）


var sum = 0;
var i = 1;
while (i <= 100) {
    var num = i % 10;
    if (num != 9) {
        sum += i;
    }
    i++;
}
console.log(sum);
