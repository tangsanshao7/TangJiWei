// 6.下列代码控制台打印出的值是多少？并且把预解析的过程写出来

// 解析过程
// (function d(num) {
//     var num;
//     console.log(num); // 100
//      num = 10;
//     console.log(num);  // 10
// }(100))


// ----------------------------------

//     (function d(num) {
//         console.log(num);// 100
//         var num = 10;
//         console.log(num); // 10
//     }(100))