// 2.求1-100之间所有偶数的和，以及偶数的个数

var sum = 0;
var num = 0;
for(var i=1;i<=100;i++){
  if(i%2==0){
    sum+=i;
    num++;
  }
}
console.log(sum);
console.log(num);