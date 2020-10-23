// 15.写一个函数，求100 - 200 之间所有数的和
// 声明一个函数  设置两个形参
function sum(n,m) {
    //  声明一个变量 保存累加和
    sum=0;
    //  循环遍历 n-m之间的所有的值
    for(var i=n;i<=m;i++){
        //  累加
        sum+=i;
    }
    return sum;
}

console.log(sum(100,200));