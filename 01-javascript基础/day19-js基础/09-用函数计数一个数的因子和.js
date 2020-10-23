// 09. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）

// 步骤
// 1. 声明一个函数 设置一个形参 
function sum(num) {
    // 声明一个变量 保存因子和
    var sum=0;
    // 遍历1到这个数之间的所有数
    for(var i=1;i<=num;i++){
        // 判断这个数%i是否等于0  如果等于0 就的这个数的因子
        if(num%i==0){
            // 累加
            sum+=i;
        }
    }
    return sum;
}
var num=6;

console.log(sum(num));