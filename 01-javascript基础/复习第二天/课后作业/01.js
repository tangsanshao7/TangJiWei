// // var n = +prompt("请输入输入数字")
// var n=10;
//   if (n % 2 == 0) {
//     var sum = 1;
//     for (var i = 2; i <= n; i += 2) {
//       sum += 1 / i;
//     }
//     console.log(sum);
//   } else {
//     var sum = 1;
//     for (var i = 3; i <= n; i += 2) {
//       sum += 1 / i;
//     }
//     console.log(sum);
//   }


function a(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "fizzbuzz";
  } else if (num % 3 == 0) {
    return "fizz";
  } else if (num % 5 == 0) {
    return "buzz";
  } else if (isNaN(num)) {
    return "false";
  } else {
    return num;
  }

}
a(6)

console.log(a(6));