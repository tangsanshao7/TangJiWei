// 16.写一个函数, 实现字符串反转,输入：["h","e","l","l","o"],输出：["o","l","l","e","h"]
// 声明一个函数  设置一个形参
function fz(arr) {
    // 声明一个新数组
    var newarr = [];
    // 循环倒叙遍历数组
    for (var i = arr.length - 1; i >= 0; i--) {
        // 添加进新数组中
        newarr.push(arr[i])
        
    }
    
    return newarr;
}
var arr = ["h", "e", "l", "l", "o"];

console.log(fz(arr));