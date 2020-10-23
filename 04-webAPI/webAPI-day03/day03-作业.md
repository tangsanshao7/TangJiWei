# 选择题

1. 下面关于获取表单的 value 值正确的写法是（c）

```html
<input type="text" value="我是表单" />
```

A、document.querySelector('input').innerText

B、document.querySelector('input').innerHTML

C、document.querySelector('input').value

D、document.querySelector('input').style.innerText

2. 在 JavaScript 中，下面关于表单的事件说法错误的是(c )

A、onfocus 是当获取到焦点时触发

B、onblur 是当表单失去焦点时触发

C、onclick 这个事件，表单元素是不具备的

D、oninput 是当用户在表单中输入值时触发

3. 要完成禁用按钮效果，补充 1.处代码（b）

```js
<button id="btn">禁用文本框</button>

<input type="text" id="txt" value="你好">

<script>
var oBtn = document.getElementById('btn');

var oTxt = document.getElementById('txt');

oBtn.onclick = function () {

1.补充代码

}

</script>
```

A、oTxt.disabled = “”
B、oTxt.disabled = true
C、oTxt.disabled = disabled
D、oTxt.disabled = false

4. 下面对于 JavaScript 中的复选框(checkbox)的说法不正确的是：(a)

A、如果需将一个复选框选中，可以将复选框的 selected 属性设为 true

B、如果需将一个复选框选中，可以将复选框的 checked 属性设为 true

C、如果需将一个复选框选中，可以将复选框的 checked 属性设为"true"

D、如果需将一个复选框选中，可以将复选框的 checked 属性设为 checked

5.         在JavaScript中，下面代码表示获取到文本框的值，则下列选项中验证文本框为空的条件表达式不正确的是 (  c)

```js
var usrName = document.getElementById("txtName").value;
```

A、usrName ==""

B、usrName.length<=0

C、usrName=""

D、usrName.length==0

# 简答题

第 1 题. 操作表单元素常用属性有哪些，分别说明作用是什么？

```js
value属性  更改值
type属性   更改类型
checked属性    修改选中
selected属性    规定在页面加载时预先选定该选项
disabled属性  让控件变成灰色不能点的样子
```

第 2 题. 操作元素显示和隐藏的方式有哪些?

```js
display：none
visible：hidden
```

# 编程题

需求 1. 实现隔行变色的效果(效果在附件):

- 页面中有一个按钮和一个 ul,ul 里面有 10 个 li 元素
- 点击按钮，实现 10 个 li 的隔行变色效果，奇数行是红色，偶数行是黄色
- 鼠标经过 li 元素上面，当前的这个 li 就是绿色，鼠标离开这个 li，这个 li 显示原来的颜色

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <button>按钮</button>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
    <script>
      let btn = document.querySelector("button");
      let oldColor;
      let liList = document.getElementsByTagName("li");
      btn.onclick = function() {
        for (let i = 0; i < liList.length; i++) {
          if (i % 2 == 0) {
            liList[i].style.backgroundColor = "red";
          } else {
            liList[i].style.backgroundColor = "yellow";
          }
          liList[i].onmouseover = function() {
            oldColor = this.style.backgroundColor;
            this.style.backgroundColor = "green";
          };
          liList[i].onmouseout = function() {
            this.style.backgroundColor = oldColor;
          };
        }
      };
    </script>
  </body>
</html>
```

需求 2. 简单 js 表单校验效果(素材和效果在附件里面)：布局和功能都需要自己完成

- 具体需求请看 word 里面。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      div {
        width: 600px;
        margin: 100px auto;
      }

      .score {
        display: inline-block;
        font-size: 12px;
        color: #999;
        background: url(..附件/image/mess.png) no-repeat left center;
        padding-left: 20px;
      }

      .wrong {
        color: red;
        background-image: url(..附件/image/wrong.png);
      }

      .right {
        color: green;
        background-image: url(images/right.png);
      }
    </style>
  </head>

  <body>
    <div class="register">
      <input type="text" class="inp" placeholder="请输入你的成绩" />
      <p class="score">请输入你的成绩</p>
    </div>
    <script>
      // 1.获取元素
      var inp = document.querySelector(".inp");
      var score = document.querySelector(".score");
      //2. 注册事件 失去焦点
      inp.onblur = function() {
        if (typeof this.value == Number) {
          if (this.value >= 0 && this.value <= 100) {
            score.className = "score right";
            score.innerHTML = "您输入成绩正确";
          } else if (this.value <= 0) {
            score.className = "score wrong";
            score.innerHTML = "输入成绩不能小于0";
          } else if (this.value >= 100) {
            score.className = "score wrong";
            score.innerHTML = "输入成绩不能大于100";
          }
        } else if (typeof this.value != Number) {
          score.className = "score wrong";
          score.innerHTML = "请您输入数字";
        }
      };
    </script>
  </body>
</html>
```
