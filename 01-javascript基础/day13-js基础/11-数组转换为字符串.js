// 3.   数组转换为字符串
// 需求：将数组 ['red', 'green', 'blue', 'pink'] 转换为字符串，并且用 | 或其他符号分割
// 步骤
// 1.声明一个数组
var colors = ['red', 'green', 'blue', 'pink'] ; 
// 2. 声明一个变量  空字符串 
var str='';
// 3. 循环遍历数组
for (var  i = 0; i < colors.length; i++) {
    // 4.  把遍历的数组的值添加到空字符串中
    str+=colors[i];
    // 4.1 判断是不是最后一个下标
    if(i!=colors.length-1){

        // 4.2 如果不是就+上|
        str+='|'
    }
}
// 5. 打印
console.log(str);