// 1. 1-100之间所有数的总和 与 平均值(while实现)


var sum=0;
var i=1;
while (i<=100) {
    sum+=i;
    i++;
}

console.log(sum);
console.log(sum/(i-1));