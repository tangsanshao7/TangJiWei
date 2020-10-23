// 3.求2000-3000年之间的所有的闰年以及个数

var num = 0;

for (var i = 2000; i <= 3000; i++) {
  if (i % 400 == 0 || (i % 4 == 0 && i % 100 != 0)) {
    console.log(i);
    num++;
  }
}

console.log(num);
