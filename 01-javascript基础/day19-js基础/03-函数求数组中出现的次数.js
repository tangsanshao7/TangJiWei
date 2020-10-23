// 03. 写一个函数，求出3在数组 var arr = {3,4,3,5,7,9};中出现的次数
// 步骤
// 1. 声明一个函数 设置一个形参 
function count(arr) {
    // 2. 声明一个变量  保存次数
    var c=0
    // 3. 循环遍历数组
    for(var i=0;i<arr.length;i++){
        // 4. 比较数组中的值是否等于3 
        if (arr[i]==3){
            // 4.1 如果等于 次数+1
            c++;
        }
    }
    // 5. 返回次数
    return c;
}

var arr=[3,4,3,5,7,9];
console.log(count(arr));