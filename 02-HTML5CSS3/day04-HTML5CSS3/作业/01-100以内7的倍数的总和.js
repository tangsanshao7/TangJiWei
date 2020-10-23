// 1. 100以内7的倍数的总和

var sum = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 7 == 0) {
    sum += i;
  }
}
console.log(sum);