// 18.给定一个整数，写一个函数来判断它是否是 3 的幂次方

// 声明一个函数
function cm(num) {
    // 声明一共变量  保存基数
    var j = 1;
    // 循环1-要判断的数之间所有的数
    for (var i = 0; i < num; i++) {
        // 没循环一次就让基数乘3  
        j *= 3;
        // 判断要判断的数是否等于乘过的基数
        if (j == num) {
            return true;
        }
        if (j > num) {
            return false;
        }
    }

}

console.log(cm(3));
