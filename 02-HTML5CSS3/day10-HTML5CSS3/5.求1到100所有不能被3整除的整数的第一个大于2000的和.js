// 5.求1到100所有不能被3整除的整数的第一个大于2000的和
var sum=0;
for(var i=0;i<=100;i++){
  sum+=i;
  if(sum>2000){
    console.log(sum);
    break;
  }
}