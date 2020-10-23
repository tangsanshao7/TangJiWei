// 29. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
//       var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// 要求,把两个数组共同的元素放入一个新的数组, 并返回新的数组

// 步骤
// 1. 声明一个数组
var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
// 2. 声明另一个数组
var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// 3. 声明一个空数组 
var arr3 = [];
// 4. 循环遍历第一个数组
for (var i = 0; i < arr1.length; i++) {
    // 5. 循环遍历第二个数组
    for (var j = 0; j < arr2.length; j++) {
        //6. 判断如果第一个数组于第二个数组有值相等就添加进新数组中 
        if (arr1[i]==arr2[j]) {
            arr3.push(arr1[i])
        }
    }
}
console.log(arr3);