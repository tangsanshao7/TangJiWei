// 5.  求100到200之间所有的奇数的和（while实现）
var sum=0;
var i=100;
while (i<=200) {
    if(i%2!=0){
        sum+=i;
    }
    i++;
}
console.log(sum);