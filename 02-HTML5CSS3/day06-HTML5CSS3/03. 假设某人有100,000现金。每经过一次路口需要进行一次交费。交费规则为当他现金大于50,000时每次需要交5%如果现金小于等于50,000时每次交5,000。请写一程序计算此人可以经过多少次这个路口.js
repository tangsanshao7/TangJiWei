// 3. 假设某人有100,000现金。每经过一次路口需要进行一次交费。交费规则为当他现金大于50,000时每次需要交5%如果现金小于等于50,000时每次交5,000。请写一程序计算此人可以经过多少次这个路口

var money = 100000;
var num = 0;
while (true) {
  if (money > 50000) {
    money = money - money * 0.05;
    num++;
  } else if (money < 50000 && money > 5000) {
    money -= 5000;
    num++;
  } else {
    console.log(money);
    break;

  }

}

console.log(num);