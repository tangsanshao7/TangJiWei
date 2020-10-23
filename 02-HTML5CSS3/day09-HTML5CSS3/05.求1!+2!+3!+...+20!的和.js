// 5.求1!+2!+3!+...+20!的和
var sum = 0;
for (var i = 1; i <= 20; i++) {
  var jc = 1;
  for (var j = 1; j <= i; j++) {
    jc *= j;
  }
  sum += jc;
}
console.log(sum);