// 02. 写一个函数，求任意数组的所有元素的和
// 步骤
// 1. 声明一个函数 设置一个形参 
function sum(arr) {
    // 2. 声明一个变量 保存和
    var sum=0;
    // 3.  循环遍历数组
    for(var i=0;i<arr.length;i++){
        // 4. 累加
        sum+=arr[i];
    }
    // 5. 返回和
    return sum;
}

var arr = [18, 45, 333, 5, 6, 1, 5];
console.log(sum(arr));