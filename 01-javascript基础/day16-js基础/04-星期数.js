// 4、利用JavaScript完成如下功能：如果今天是星期五，那么1000天后是星期几
// 步骤 
// 1. 声明一个变量 保存今天的星期数
var teday = 5;
// 2 声明一个变量 保存1000天
var data = 1000;
// 3. 声明一个变量 保存1000%7后 余下的天数
var x = data % 7;
// 4. 打印 今天的天数 加上余下的天数再减去一星期的天数  得到的就是 最后的星期数 
console.log('如果几天是星期五,那么今天是星期' + (teday + x - 7));
