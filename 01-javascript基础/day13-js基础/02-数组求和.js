// 2. 定义数组 var arr = [11,22,33,44,55],要求：求数组中所有的元素的和

// 步骤
// 1.声明一个数组

var arr = [11,22,33,44,55];
// 2.声明一个变量 累加
var sum =0;
// 3.用for循环遍历数组
for(var i=0;i<arr.length;i++){
    // 4.累加
    sum+=arr[i]
}
// 5.打印
console.log(sum);