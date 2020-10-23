// 6. 一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，编程实现获取它在 第10次落地时，共经过多少米？第10次反弹多高？

// 步骤
// 1. 声明一个变量  保存球的高度
var height = 100;
// 2. 声明一个变量  保存球落地十次后共经过多少米
var sum = 0;
// 3. 用一个for循环 
for (var i = 0; i < 10; i++) {
    // 5. 累加
    sum += height;
    console.log(height);
    // 4. 获得每次落地的高度
    height = height / 2;
    // 5. 累加
    sum += height;
    console.log(height);

}
// 6. 打印
console.log(sum);
console.log(height);