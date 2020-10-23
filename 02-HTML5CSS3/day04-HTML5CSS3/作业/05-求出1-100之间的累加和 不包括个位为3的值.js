// 5. 求整数1～100的累加值，但要求跳过所有个位为3的数【用continue实现】
var sum = 0;
for (var i = 1; i <= 100; i++) {
  var ge=i%10;
  if (ge==3) {
    continue;
  } else {
    sum += i;
  }
}
console.log(sum);