// 6.  var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。
// 步骤
// 1. 声明一个变量 保存次数
var c=0;
// 2. 声明一个数组
var arr = [1,1,2,2,3,4,5,4,3,2,1];
// 3. 循环遍历数组
for(var i=0;i<arr.length;i++){
    // 4. 判断数组中的某个值是否等于2 如果等于 次数就+1
    if (arr[i]==2) {
        c++;
    }
}

console.log('数字2出现的次数为'+c+'次');