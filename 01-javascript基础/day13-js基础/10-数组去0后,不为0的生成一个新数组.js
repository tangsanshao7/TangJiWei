// 10.var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
//     要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
//     var newArr=[1,3,4,5,6,6,5,4,7,6,7,5];

// 步骤
// 1.声明一个数组
var oldArr=[1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5]; 
// 2.声明一个空数组
var newArr=[];
// 3. 用循环遍历数组
for (let i = 0; i < oldArr.length; i++) {
    // 4.  判断数组的每一个值 是不是=0
    if(oldArr[i]!=0){
        // 4.1 如果不等于0 就添加进空数组中
        newArr.push(oldArr[i]);
    }
}
// 5. 打印
console.log(newArr);