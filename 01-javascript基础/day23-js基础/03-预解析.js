// // 3.下列代码控制台打印出的值是多少？写出执行过程
// function test() {
//     b();
//     var a = 1;
//     function b() {
//         console.log(a);  // ？
//         var a = 2;
//     }
// }
// test();  // ?

// // 执行时的代码


// function test() {
//     function b() {
//         var a;
//         console.log(a);  // undefined
//         a = 2;
//     }
//     b();
//     var a;
//     a = 1;

// }
// test();  


// 先将test中的b函数提升 在将变量a提升  在将b函数中的a提升   所以打印结果就是undefined