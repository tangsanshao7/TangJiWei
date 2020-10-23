// 17.写一个函数，实现无论用户传入几个数字，都可以求和，例如，console.log(add(1,2,3)); //6   console.log(add(1,2,3,4,5,6)); //21
// 声明一个函数
function sum() {
    // 声明一个遍历 保存累加和
    var sum=0;
    // 循环遍历arguments伪数组
    for (var i = 0; i < arguments.length; i++) {
        // 累加
        sum+=arguments[i];
    }
    return sum;
}

console.log(sum(1,2,3,4));
