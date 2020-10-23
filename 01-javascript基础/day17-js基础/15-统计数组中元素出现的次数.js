// 15.找出一个数组中有哪些重复元素，并且这些元素各重复了几次,var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]

// 步骤
// 1. 声明一个变量  保存数组
var arr = [0, 1, 3, 1, 1, 5, 5, 8, 8, 8, 0, 9, 5];
// 2. 排序
arr.sort(function(a,b){return a-b});
// 3. 声明一个空字符串
var str ='';
// 4. 循环数组
for (var i = 0; i < arr.length;) {
    // 5. 保存重复的值
    var count = 0;
    // 6. 循环数组 
    for (var j = i; j < arr.length; j++) {
        // 7. 判断数组的值是否重复 
        if (arr[i] == arr[j]) {
            // 7.1 如果重复就count++ 
            count++;
        }
    }
    // 8. 判断count如果大于1 就是重复的值
    if (count > 1) {
       console.log('重复元素'+ arr[i]+', 重复次数'+ count);
    }

    // 9. 如果数组中的某个值判断过了就不再重复判断了 所以i加上count就不会判断已经判断过的值
    i += count
}