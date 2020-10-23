// 5. 下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来

// 解析过程
// var a;
// a = 25;
// function f1() {
//     var a;
//     c = 9;
//     b = c;
//     a = b;
//     console.log(a);    //9
//     console.log(b);    // 9
//     console.log(c);    // 9
// }
// f1();
// console.log(a);    //25
// console.log(b);     // 9
// console.log(c);     // 9

// -------------------------------------------------------------

// var a = 25;
// function f1() {
//   var a = b = c = 9;
//   console.log(a);       //9
//   console.log(b);       // 9
//   console.log(c);       // 9
// }
//  f1();
//  console.log(a);    //25
// console.log(b);      // 9
//  console.log(c);     // 9
