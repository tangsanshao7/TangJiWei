// 11.写一个函数，求任意一个数的阶乘
// 声明一个函数  设置一个形参
function jc(num) {
    //  声明变量 保存阶乘
    var sum=1;
    // 循环n-num之间的所有值
    for(var i=1;i<=num;i++){
        计算阶乘
        sum*=i;
    }
    return sum;
}

console.log(jc(10));

