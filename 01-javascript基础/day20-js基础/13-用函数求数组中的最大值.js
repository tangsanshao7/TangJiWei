// 13.写一个函数,求任意数组中的最大值, 
// 声明一个函数  设置一个形参
function arrmax(arr) {
    // 假设一个最大值
    var max=arr[0];
    // 循环遍历数组
    for(var i=0;i<arr.length;i++){
        // 判断大小
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

var arr = [18, 45, 0, 58, 32,59];
console.log(arrmax(arr));