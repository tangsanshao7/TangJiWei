// 8.下列代码控制台打印出的值是多少？并且把预解析的过程写出来

// 解析过程
// var n;
//  n = 0;
// function a() {
//     var n;
//      n = 10;
//     function b() {
//         n++;
//         console.log(n);//  11  
//     }
//     b();
//     return b;
// }
// var c = a();
// c(); //12
// console.log(n); //  0

// ----------------------------------



// var n = 0;
// function a() {
//     var n = 10;
//     function b() {
//         n++;
//         console.log(n);// 11
//     }
//     b();
//     return b;
// }
// var c = a();
// c(); //12
// console.log(n); //  0