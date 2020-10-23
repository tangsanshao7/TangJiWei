// 1.导入fs模块
const fs = require('fs');

// 2.使用fs模块的写入文件内容的方法 writeFile
let content = '<h1>我通过writeFile把内容写入了index.html</h1>';

fs.writeFile('./index.html', content, function (err){
    if (err != null) {
            console.log(err);
            return;
    }

    console.log('文件写入成功')
})