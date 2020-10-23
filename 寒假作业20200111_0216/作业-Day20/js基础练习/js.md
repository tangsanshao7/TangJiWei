## js 解答题

1. Date 对象的语法格式是什么
   var date = new Date();

2. 如何使用 Date 对象获取当前的 年 月 日 小时 分钟 秒
   var date = new Date();
   //获取年
   var year = date.getFullYear();
   //获取月
   var month = date.getMonth() + 1;
   //获取日
   var day = date.getDate();
   //获取小时
   var day = date.getHours();
   //获取分钟
   var day = date.getMinutes();
   //获取秒
   var day = date.getSeconds();

3. 请举例说明 Date 对象自带的 8 个方法，并且说明方法的作用
   //1.以四位数字返回年份
   getFullYear();
   //2.返回月份 (0 ~ 11)。
   getMonth()
   //3.返回一个月中的某一天 (1 ~ 31)。
   getDate();
   //4.返回 Date 对象的小时 (0 ~ 23)
   getHours();
   //5.返回 Date 对象的分钟 (0 ~ 59)。
   getMinutes();
   //6.返回 Date 对象的秒数 (0 ~ 59)。
   getSeconds();
   //7.返回 Date 对象的毫秒(0 ~ 999)。
   getMilliseconds();

## js 编程题

1. 将通过 new Date() 获取到的时间格式成为`xxx年xxx月xxx日 xx时xx分xx秒`，例如: 2000 年 1 月 10 日 08 时:22 分:32 秒

```js
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1; // 月份+1
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
console.log(`${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`);
```

2. 编写 function parseDatetime(var datetime)方法
   功能描述：传入参数的日期对象与当前日期比较：
   - 参数日期比当前日期大，返回”日期不符合要求”。
   - 参数日期比当前日期小，范围小于 1 分钟：返回“刚刚”；
   - 参数日期比当前日期小，差值范围大于等于 1 分钟：返回“x 分钟之前”；x 代表分钟数，
   - 参数日期比当前日期小，差值范围大于等于 1 小时：返回“x 小时之前”；x 代表小时数，
   - 参数日期比当前日期小，差值范围大于等于 1 天：返回“x 天之前”；
   - 参数日期比当前日期小，差值范围大于等于 7 天：返回“x 周之前”；
   - 参数日期比当前日期小，差值范围大于等于 30 天：返回“x 月之前”；
   - 参数日期比当前日期小，差值范围大于等于 365 天：返回“很久之前”。

```js
function parseDatetime(y, m, d, h, min, s) {
  // 1. 当前日期
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1; // 月份+1
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  // 2. 下面进行"粗略"判断
  if (
    y > year ||
    (y == year && m > month) ||
    (y == year && m == month && d > 31) ||
    (y == year && m == month && d == day && h > hours) ||
    (y == year && m == month && d == day && h == hours && min > minutes)
  ) {
    return "日期不符合要求";
  } else if (y < year && m <= month) {
    return "很久之前";
  } else if (y < year) {
    var num = 12 - m + month;
    return `${num}月之前`;
  } else if (y == year && m < month) {
    var num = month - m;
    return `${num}月之前`;
  } else if (m == month && day - d >= 7) {
    var num = parseInt((day - d) / 7);
    return `${num}周之前`;
  } else if (m == month && day - d >= 1) {
    var num = day - d;
    return `${num}天之前`;
  } else if (d == day && hours - h >= 1) {
    var num = hours - h;
    return `${num}小时之前`;
  } else if (d == day && h == hours && minutes - min >= 1) {
    var num = minutes - min;
    return `${num}分钟之前`;
  } else if (d == day && h == hours && min == minutes) {
    return `刚刚`;
  }
}
var result = parseDatetime(2020, 2, 8, 12, 00, 30);
console.log(result);
```

3. 利用 JavaScript 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位 数字立方和等于该数本身。

```js
for (var i = 100; i < 1000; i++) {
  var ge = i % 10;
  var shi = parseInt((i / 10) % 10);
  var bai = parseInt((i / 100) % 10);
  if (Math.pow(ge, 3) + Math.pow(shi, 3) + Math.pow(bai, 3) == i) {
    console.log(i);
  }
}
```

4.定义一个 1 到 10 之间的数字，让用户猜，用户有 3 次机会，猜中弹出恭喜并结束程序，猜错重新弹出输入框让用户输入，直到 3 次机会都用完弹出遗憾并结束程序。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>猜数字(1~10)</title>
  </head>

  <body>
    <script>
      var num = 8;
      var i = 0;
      while (true) {
        var guess = prompt("请猜一猜1~10我选的是哪一个数字");
        if (guess == num) {
          alert("你真棒！恭喜你猜对了");
          break;
        }
        i++;
        if (i == 3) {
          alert("很遗憾你的机会用完了");
          break;
        }
      }
    </script>
  </body>
</html>
```
