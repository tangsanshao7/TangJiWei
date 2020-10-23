// 需求: 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
//     *********
//    *******
//   *****
//  ***      
// *  



for (var i = 0; i < 5; i++) {
    var str = "";
    for (var j = 0; j < 5 - i; j++) {
        str += " ";
    }
    for (var k = 0;k <= -(2 * i + 1) + 9;k++) {
        str += "*";
    }
    console.log(str);
}