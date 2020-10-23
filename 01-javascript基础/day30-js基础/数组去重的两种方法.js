// // 方法1 
// // 步骤
// //   声明一个数组
// let arr = [1, 23, 4, 5, 3, 2, 12, 53, 3, 2, 23];
// //  声明一个set集合  将数组放进集合中
// let set = new Set(arr);
// //  声明一个新数组
// let arr1 = [];
// //   循环遍历set集合
// for(let value of set.values()){
// // 将set集合中的每一个值放进新数组中
//     arr1.push(value)
// }
// // 打印新数组
// console.log(arr1);

// // 方法2 
// // 步骤
// //   声明一个数组
// let arr = [1, 23, 4, 5, 3, 2, 12, 53, 3, 2, 23];
// //  声明一个新数组
// let arr1 = [];
// //  循环遍历数组
// for (let i = 0; i < arr.length; i++) {
//     //  判断新数组中有没有旧数组中的值 如果等于-1 就是没有  
//     if (arr1.indexOf(arr[i]) == -1) {
//         // 如果没有就把那个值放进新数组中
//         arr1.push(arr[i]);
//     }
// }
// // 打印新数组
// console.log(arr1);