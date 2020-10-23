// 2. 用户输入一个数字，列出所有它能够整除的数字。

var num =10;
for(var i=1;i<=num;i++){
  if(num%i==0){
    console.log(i);
  }
}