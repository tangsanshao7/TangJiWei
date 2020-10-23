// 24.10个整数{9,10,6,6,1,9,3,5,6,4},保存到数组中。
//       1.去除数组中重复的内容,只保留唯一的元素。
//       2.以下列格式打印数组：[9,10,6,1,3,5,4]

// 步骤:
// 1.声明10个整数的数组
var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4];
// 2.声明空数组
var newArr = [];
// 3.循环遍历10个整数的数组
for (var i = 0; i < arr.length; i++) {
  // 4.判断空数组中有没有遍历的那个数
  if (newArr.indexOf(arr[i]) === -1) {
    // 4.1 如果没有 就把遍历的那个数添加到空数组中
    newArr.push(arr[i]);
  }

}
// 5.打印空数组
console.log(newArr);

