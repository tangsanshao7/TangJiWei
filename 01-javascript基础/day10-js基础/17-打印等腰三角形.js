// 需求: 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成)
for (var k = 0; k < 5; k++) {
    var str = "";
    for (var i = 0; i < 4 - k; i++) {
        str += " ";
    }
    for (var j = 0; j <= k; j++) {
        str += "* ";
    }
    console.log(str);
}