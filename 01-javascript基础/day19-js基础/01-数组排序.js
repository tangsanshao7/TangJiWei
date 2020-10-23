// 01. 写一个函数，实现对任意数组的排序
// 步骤
// 1. 声明一个函数 设置一个形参 
function mp(arr) {
    // 2.  外层循环决定 比较的次数   
    for(var i=0;i<arr.length-1;i++){
        // 3.  内层循环决定 比较的轮数
        for(var j=0;j<arr.length-1-i;j++){
            // 4. 比较大小
            if(arr[j]>arr[j+1]){
                // 5. 交换位置
                var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    // 6. 返回排序后的数组
    return arr;
}
var arr = [18, 45, 0, 58, 32,59];
console.log(mp(arr));