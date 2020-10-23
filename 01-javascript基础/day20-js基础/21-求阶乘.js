// 21.写一个函数，实现n的阶层的和求1+2!+3!+...+n!的和
//创建方法
function getFactorial(num) {
    //创建用户输入
    var num = Number(prompt("请输入一个数"));
    //定义 变量 sum
    var sum = 0;
    //创建 变量  作为阶乘
    var jie = 1;
    //创建循环 从 1 循环 到 num
    for (var i = 1; i <= num; i++) {
        jie *= i;
        sum += jie;
    }
    //返回sum
    return sum;
}

//调用方法
alert("阶乘和为: " + getFactorial(num));