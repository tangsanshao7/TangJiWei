// 7.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
// 解析过程


// function a(b}) {
// var s;
//     console.log(b});  // function c() { return 123 }
//        s = b();
//     console.log(123)  // 123
//   }
// a(c);
// function c() { return 123 };

// ----------------------------------

// function a(b) {
//     console.log(b);  //function c() { return 123 }
//     var s = b();
//     console.log(s)  //123 
//   }
// a(c);
// function c() { return 123 }