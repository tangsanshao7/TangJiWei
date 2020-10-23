// .用函数实现任意数组从小到大的排序，不允许使用sort 
 //声明一个函数  设置一个形参
function getSortArr(arr) {
    // 循环遍历数组  外层循环是要比较的个数
    for (var i = 0; i < arr.length - 1; i++) {
        // 内层循环是要比较的次数
        for (var j = 0; j < arr.length - 1 - i; j++) {
            //  比较大小
            if (arr[j] > arr[j + 1]) {
                // 交换位置
                var num = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
            }
        }
    }
    //返回排序后的数组
    return arr;
}


var arr = [31, 42, 73, 53, 13, 63, 131];
console.log(getSortArr(arr));