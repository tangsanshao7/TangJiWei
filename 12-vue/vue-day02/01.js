// 例: 3!=6 4!=24

function jc(n) {
// 1的阶乘
  if (n == 1) {
    return 1;
  }
  return n * jc(n - 1)
}

console.log(jc(3));
