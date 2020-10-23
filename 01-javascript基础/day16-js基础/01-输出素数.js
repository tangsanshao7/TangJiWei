// 1、输出2-100之间的所有素数（素数就是只能被1和其本身整除的数）
// 步骤
// 1. 循环2-100之间所有的数
for (var i = 2; i <= 100; i++) {
    // 2. 声明一个变量 默认是素数
    var flag = true;
    // 3. 循环i之前所有的数
    for (var j = 2; j < i; j++) {
        // 3.1 判断能不能被整除 
        if (i % j == 0) {
            // 3.1.1 如果能就把flag赋值为false 不是不是素数
            flag = false;
        }
    }
    // 4. 判断flag是不是true 如果是就打印
    if (flag) {
        console.log(i);
    }

}