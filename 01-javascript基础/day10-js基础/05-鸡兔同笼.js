// 需求: 鸡兔同笼：鸡和兔子一共35只，笼子里一共有94只脚，用程序计算出鸡和兔子分别多少只


// 步骤
// 1. 先声明两个变量  代表鸡的腿和兔的腿
var ji = 2;
var tu = 4;
// 2. 用循环来找出鸡和兔各有多少只
for (var i = 1; i <= 35; i++) {  // 35代表鸡和兔子一共有多少只
    if (ji * i + tu * (35 - i) == 94) {//在这里i代表鸡有多少只  35-i代表兔子有多少只
        console.log('鸡有'+i+'只');
        console.log('兔子有'+(35-i)+'只');
        
    }
}