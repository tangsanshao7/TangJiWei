// 14.写一个函数,去掉任意数组中重复的元素
// 声明一个函数  设置一个形参
function qc(arr) {
    // 创建一个新数组
    var newarr = [];
    //  下循环遍历数组
    for (var i = 0; i < arr.length; i++) {
        // 判断新数组中有没有某个值  如果==-1 就是没有 就添加就新数组
        if (newarr.indexOf(arr[i]) === -1) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

var arr = [1, 5, 4, 4, 7, 6, 6];
console.log(qc(arr));