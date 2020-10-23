// 需求: 利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成） （拔高题）
//  ---*
//  --***
//  -*****
//  *******
//  -*****
//  --***
//  ---*



// 上
for (var s = 0; s < 3; s++) {
    var str = "";
    // i: 3 2 1
    for (var i = 0; i < 3 - s; i++) {
        str += "-"
    }
    // j: 1 3 5
    for (var j = 0; j < 2 * s + 1; j++) {
        str += "*"
    }
    console.log(str);
}
// 中
console.log("*******")
// 下
for (var s = 0; s < 3; s++) {
    var str = "";
    // i: 1 2 3 
    for (var i = 0; i <= s; i++) {
        str += "-"
    }
    // j: 5 3 1
    for (var j = 0; j <= -(2 * s + 1) + 5; j++) {
        str += "*"
    }
    console.log(str);
}

