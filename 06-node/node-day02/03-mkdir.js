// 创建一个文件夹



// 1.引入fs模块
const fs = require('fs');

// 2.使用fs的mkdir  创建文件夹的意思
fs.mkdir('E:/FullStack/day77-Node基础/code/wanlum1/', { recursive: true }, function (err){
    // err为null说明没有错误 不为null说明有错
        if (err != null) {
            console.log(err);
            return;
        }
        // E:\FullStack\day77-Node基础\code\03-mkdir.js
        console.log('创建成功')
})