// 3、定义一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
// 步骤
// 1. 声明一个变量
var num = 12332;
// 2. 判断num变量 是不是大于等于10000并小于100000  如果是就是一个五位数
if(num>=10000&&num<100000){
    // 3.1 求个位的值
    var ge = num % 10;
    // 3.2 求十位的值
    var shi = parseInt(num / 10 % 10)
    // 3.3 求百位的值
    var bai = parseInt(num / 100 % 10)
    // 3.4 求千位的值
    var qian = parseInt(num / 1000 % 10)
    // 3.5 求万位的值
    var wan = parseInt(num / 10000)
    // 4. 判断个位是否于万位相等并且十位是否于千位相等 如果是这个数就是一个回文数
    if (ge == wan && shi == qian) {
        // 4.1 打印
        console.log(num + '是为回文数');
    }

}