// 4.  求整数1～100的累加值，但要求跳过所有个位为3的数(while实现)

var sum = 0;
var i = 1;
while (i <= 100) {
    var num = i % 10;
    if (num != 3) {
        sum += i;
    }

    i++;
}

console.log(sum);

