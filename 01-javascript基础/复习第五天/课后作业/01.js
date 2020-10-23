
// function getStr(str) {
//   var str = str.toLowerCase().split("");
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].substring(1, str[i].length);
//     var string = str.join("");
//     return string;
//   }
// }
// var str = "helloWORLD";
// console.log(getStr(str));
// var str = "how are you";
// function getStr(str) {
//   var newstr = str.split("").reverse().join("");//最后把数组变成字符串
//   var str = newstr.split(" ");
//   str = str.reverse().join("");
//   return str;
// }
// console.log(getStr(str));

var flower = [
  {
    type: '多肉植物',
    name: '金手指',
    price: 30,
    addr: '中国'

  },
  {
    type: '多肉植物',
    name: '仙人掌',
    price: 10,
    addr: '中国'

  },
  {
    type: '观花植物',
    name: '风信子',
    price: 28,
    addr: '法国'

  },
  {
    type: '观花植物',
    name: '紫罗兰',
    price: 19,
    addr: '法国'

  },
  {
    type: '水培植物',
    name: '米兰花',
    price: 20,
    addr: '俄罗斯'

  },
  {
    type: '水培植物',
    name: '铁兰',
    price: 26,
    addr: '俄罗斯'

  }
];


var f1 = {
  type: '多肉植物',
  name: '金手指',
  price: 30,
  addr: '中国'

};
var f2 = {
  type: '多肉植物',
  name: '仙人掌',
  price: 10,
  addr: '中国'

};
var f3 = {
  type: '观花植物',
  name: '风信子',
  price: 28,
  addr: '法国'

};
var f4 = {
  type: '观花植物',
  name: '紫罗兰',
  price: 19,
  addr: '法国'

};
var f5 = {
  type: '水培植物',
  name: '米兰花',
  price: 20,
  addr: '俄罗斯'

};
var f6 = {
  type: '水培植物',
  name: '铁兰',
  price: 26,
  addr: '俄罗斯'

};


function getFlowers() {
  var arr = [];

  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }

  return arr;
}

function printAvgPrice(flowerList, flowerType) {

  var sum = 0;

  for (var i = 0; i < flowerList.length; i++) {
    if (flowerList[i].type == flowerType) {
      sum += flowerList[i].price;
    }
  }

  return flowerType + ":" + sum + "元";
}

function getMinAddr(flowerList) {


  var min = flowerList[0].price;

  for (var i = 0; i < flowerList.length; i++) {
    min = min < flowerList[i].price ? min : flowerList[i].price;
  }

  for (var i = 0; i < flowerList.length; i++) {

    if (min == flowerList[i].price) {
      return flowerList[i].addr;
    }
  }
}

var flowerList = getFlowers(f1, f2, f3, f4, f5, f6);

console.log(printAvgPrice(flowerList, "观花植物"));

console.log(getMinAddr(flowerList));