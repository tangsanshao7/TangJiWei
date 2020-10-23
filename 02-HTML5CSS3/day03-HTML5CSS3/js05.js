// 5.打印九九乘法表

for (var i = 1; i <= 9; i++) {
  var str = '';
  for (var j = 1; j <= i; j++) {
    str += j + '*' + i + '=' + j * i + ' ';
  }
  console.log(str);
}
