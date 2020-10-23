// 32.现在有2个数组,var arr1 = [1,7,9,11,8,15,10,19],
// var arr2 =[2,1,6,8,10]将2个数组合并为一个数组,并将数组去重,然后按照升序进行排列
// 步骤
// 1. 声明一个数组
var arr1 = [1, 7, 9, 11, 8, 15, 10, 19];
// 2. 声明另一个数组

var arr2 = [2, 1, 6, 8, 10];
// 3. 合并数组 用concat 方法
var arr3=arr1.concat(arr2);
// 4. 声明一个空数组 
var arr4=[];
// 5. 去重
for (var i = 0; i < arr3.length; i++) {
    if (arr4.indexOf(arr3[i]) === -1) {
      arr4.push(arr3[i]);
    }
  }
  // 6. 排序
  for (var i = 0; i < arr4.length - 1; i++) {
      for (var j = 0; j < arr4.length - 1 - i; j++) {
          if (arr4[j] > arr4[j + 1]) {
              var temp = arr4[j];
              arr4[j] = arr4[j + 1];
              arr4[j + 1] = temp;
            }
        }
    }
    console.log(arr4);