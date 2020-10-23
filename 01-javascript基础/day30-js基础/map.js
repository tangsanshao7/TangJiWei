let map = new Map();

map.set('name', 'zs');
map.set('age', 18);

// console.log(map.size);
// console.log(map.has('name1'));
// console.log(map);

// 遍历键
for (let key of map.keys()) {
    console.log(key);
}

// 遍历值
for (let value of map.values()) {
    console.log(value);
}

// 遍历键值对
for(let item of map.entries()){
    console.log(item[0]+'--------'+item[1]);
}

//forEach方法
map.forEach(function (value, key ) {
    console.log(key+'--------'+value);
})