// 需求: 鸡兔同笼：鸡和兔子一共35只，笼子里一共有94只脚，用程序计算出鸡和兔子分别多少只

// 步骤:
// 1.定义一个变量 表示一只鸡有几只脚
var ji = 2;
// 2.定义一个变量 表示一只兔子有几只脚
var tu = 4;
// 3. 用for循环来判断鸡和兔各有多少只
for (var i=1;i<=35;i++){ //在这里 i 代表鸡的个数  35-i代表兔的个数
    if(ji*i+tu*(35-i)==94){  //判断鸡的个数乘鸡的脚加上兔的个数乘兔的脚 ==94只脚
        console.log('鸡有'+i+'只,兔子有'+(35-i)+'只');
    }
}