  // 2、在控制台实现下列图形:
// 55555
// 4444
// 333
// 22
// 1
// 22
// 333
// 4444
// 55555

for (var i = 5; i > 0; i--) {
  var str = "";
  for (var j = 0; j < i; j++) {
    str += i;
  }
  console.log(str);
}
for (var k = 2; k < 5 + 1; k++) {
  var str2 = "";
  for (var l = 0; l < k; l++) {
    str2 += k;
  }
  console.log(str2);
}