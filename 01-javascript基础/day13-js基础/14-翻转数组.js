// 6.   翻转数组
// 需求： 将数组 ['top', 'right', 'bottom', 'left', 'center'] 的内容反过来存放

// 步骤
// 1.声明一个数组
var str = ['top', 'right', 'bottom', 'left', 'center'];
// 2.声明一个空数组
var newstr = [];
// 3. 用循环遍历数组
for (var i = str.length - 1; i >= 0; i--) {
    // 4. 将遍历的值添加在空数组中
    newstr.push(str[i])
}
// 5. 打印
console.log(newstr);