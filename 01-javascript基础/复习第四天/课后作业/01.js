// function getsum(){
//   var sum=0;
//   for(var i=0;i<arguments.length;i++){
//     sum+=arguments[i];
//   }
//   return sum;
// }

// console.log(getsum(1,2,3));


// // 2.	写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）

// function getSum(num){
// var  sum=0;
// for(var i=1;i<=num;i++){
//   if(num%i==0){
//     sum+=i;
//   }

// }
// return sum;
// }

// console.log(getSum(6));


// 3.编写一个函数，计算任意两个数字之间所能组成的奇数个数，数字必须是个位数。


// function getJi(a, b) {
//   var count = 0;
//   var sun = '';
//   for (var i = a; i <= b; i++) {
//     for (var j = a; j <= b; j++) {
//       if ( parseInt(i + "" + j) % 2 !== 0) {
//         count++;
//         sun += i + "" + j + ","
//       }
//     }
//   }
//   console.log(count);
//   return sun;
// }
// console.log(getJi(0, 3));


// 4
// var arr=[];
// var num1=+prompt("请输入第一个数字");
// var num2=+prompt("请输入第二个数字");
// var num3=+prompt("请输入第三个数字");
// var num4=+prompt("请输入第四个数字");
// var num5=+prompt("请输入第五个数字");

// arr.push(num1)
// arr.push(num2)
// arr.push(num3)
// arr.push(num4)
// arr.push(num5)

// console.log(arr);
// var num=+prompt("请输入一个整数");

// function getInfo (arr,num){
//   var sum=0;
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]<num){
//       if(arr[i]%2==0){
//         sum++;
//       }
//     }
//   }
//   return sum;
// }

// console.log(getInfo(arr,num));

// 5
// var hua=[
//   {type:"多肉植物",name:"金手指",price:30,addr:"中国"},
//   {type:"多肉植物",name:"仙人掌",price:10,addr:"中国"},
//   {type:"观花植物",name:"风信子",price:28,addr:"法国"},
//   {type:"观花植物",name:"紫罗兰",price:19,addr:"法国"},
//   {type:"水培植物",name:"米兰花",price:20,addr:"俄罗斯"},
//   {type:"水培植物",name:"铁兰",price:26,addr:"俄罗斯"}
// ];


