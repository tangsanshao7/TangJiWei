// 需求: 求1!+2!+3!+...+10!的和

var sum=0;
for(var i=1;i<=10;i++){
    var jie=1;
    for(var j=1;j<=i;j++){
        jie*=j;
    }
    sum+=jie;
}
console.log(sum);