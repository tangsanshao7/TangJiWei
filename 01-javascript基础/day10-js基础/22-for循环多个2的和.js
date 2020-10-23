// 需求: 用for循环求2+22+222+2222+22222的和

var num = 2;
var sum = 2;  
for (var i = 0; i < 4; i++) {  
    num = num * 10 + 2;
    sum += num
} 
console.log(sum);