// 7、利用JavaScript完成如下九九乘法表

// 步骤 
// 1. 外层循环控制行数
for (var i = 1; i <= 9; i++) {
    // 2. 声明一个空字符串
    var str='';
    // 3. 内层循环控制列数
    for (var j = 1; j <= i; j++) {
        // 4. 字符串拼接
        str+=j + '*' + i + '=' + i * j+' ';
    }
    // 5. 打印
    console.log(str);
}
