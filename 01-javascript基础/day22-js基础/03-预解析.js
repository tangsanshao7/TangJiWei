// 3. 输出下列代码name3的值分别是多少？并且把预解析的过程写出来
// 解析过程

// var name3;
// name3 = "zs";
// function f3() {
//     var name3;
//     name3 = "ls";
//     function f4() {
//         name3 = "ww";
//     }
//     f4();
//     console.log(name3);   // ww
// }
// f3();
// console.log(name3); // zs

// -------------------------------------------------------------

// var name3 = "zs";
// function f3() {
//     var name3 = "ls";
//     function f4() {
//         name3 = "ww";
//     }
//     f4();
//     console.log(name3);   // ww
// }
// f3();
// console.log(name3); // zs