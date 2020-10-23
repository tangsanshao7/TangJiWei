// 头像 ---> public/uploads/avatar/xxx.jpg


// 拼接路径

// 1.引入模块
const path = require('path');

// 2.拼接路径
// 路径 
let finalPath =path.join('public', 'uploads','avatar','xxx.jpg');
console.log(finalPath);

console.log(111);