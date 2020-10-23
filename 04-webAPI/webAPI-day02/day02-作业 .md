# 选择题

1. 下列代码可以正确设置文本颜色的是（A）

A、document.getElementById('d1').style.color="red";

B、document.getElementById('d1').style.=(color:"red");

C、document.getElementById('d1').style.css=(color:"red");

D、document.getElementById('d1').style.cssText=color:"red";

2. 下列哪项 JavaScript 代码可以显示 Html 页面中包含 id 为"cover"的层（A）

A、document.getElementById("cover").style.display="block";

B、document.getElementById("cover").style.display="none";

C、document.getElementsByTagName("cover").style.display="visible";

D、document.getElementsByTagName("cover").style.display="hidden";

3. 假设已经定义好 show 表示显示样式，hide 表示隐藏样式，鼠标移入要完成显示，移出隐藏功能，补充 1.处代码（B）

```js
<script>
  var oBtn = document.getElementById('btn');
  var oImg = document.getElementById('img');
  oBtn.onmouseover = function () {
   1.补充代码
  }
  oBtn.onmouseout = function () {
  oImg.className = 'hide';

}
</script>
```

A、oImg.style.class = show;

B、oImg.className = 'show';

C、oImg.className == 'show';

D、oImg.style.class = "show"

4. 下面的 HTML 结构中，获取 div 元素的 innerHTML 和 innerText 的结果分别是（C ）

```html
<div>存在即<span>合理</span><strong></strong></div>
```

A、存在即合理     存在即<span>合理</span>

B、存在即<span>合理</span>    存在即合理

C、存在即<span>合理</span><strong></strong>    存在即合理

D、<span>合理</span>   存在即<span>合理</span><strong></strong>

5. 为了实现修改 img 标签中的 title 属性值为“我是大王图片”，补充 1 处的代码（B）

```js
<input type="button" value="点我看看" id="btn">
<img id="img" src="./image/1.jpg" alt="这是谁?" title="这是一张图片">
<script>
var oBtn = document.getElementById("btn");
oBtn.onclick = function () {
  var oImg = document.getElementById('img');
  1.补充代码
}
</script>
```

A、oImg[title] = "我是大王图片"
B、oImg.title = "我是大王图片"
C、title = "我是大王图片";
D、oImg.alt = "我是大王图片";

# 简答题

第 1 题. 操作元素常见属性有哪些？

```js
title;
id;
src;
alt;
href;
```

第 2 题. 操作元素内容的属性是什么，并且区别是什么？

```js
   innerHTML: W3C标准  识别标签(会解析标签 换行等等)       获取内容的时候 包括标签和内容
    innerText: 非标准    不识别标签(只会把标签当作文本 不识别换行)  获取内容的时候 不包括标签
```

第 3 题. 操作元素类名有几种方式，分别是什么,把类名添加，删除，切换，是否包含这个类语法都写出来?

```js

  1.添加类名
    1.1 元素.className = "值1 值2 值3";
    1.2 元素.classList.add('类的名字')
        返回值: 无
        参数: 起的类的名字
        兼容性: 不能在低版本浏览器使用
  2.移除类名
    2.1 元素.className = "值1 值2"
    2.2 元素.classList.remove('要删除的类的名字')
        返回值: 无
        参数: 要删除的类的名字
        兼容性: 不能在低版本浏览器使用
  3.切换类名
    3.1 元素.classList.toggle('要切换的类的名字')
        返回值: 无
        参数: 要切换的类的名字(切换的意思是有则删除 无则添加)
        兼容性: 不能在低版本浏览器使用
  4.判断是否包含某类名
    4.1 元素.classList.contains('要判断的类的名字')
        返回值: 布尔值 true代表有  false代表没有
        参数:要判断的类的名字
        兼容性: 不能在低版本浏览器使用
```

# 编程题

需求 1. div 的显示和隐藏效果：(用 2 种方式实现)

- 页面中有一个 div,2 个按钮，一个按钮的文字是"显示"，一个按钮的文字是"隐藏"
- 点击隐藏按钮，那么 div 就会在页面中隐藏
- 点击显示按钮，那么 div 就会在页面中显示

```html
<!-- 方法1 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <!-- 需求1. div的显示和隐藏效果：(用2种方式实现)
- 页面中有一个div,2个按钮，一个按钮的文字是"显示"，一个按钮的文字是"隐藏"
- 点击隐藏按钮，那么div就会在页面中隐藏
- 点击显示按钮，那么div就会在页面中显示 -->
    <button id="show">显示</button>
    <button id="hide">隐藏</button>
    <div></div>
  </body>
  <script>
    var show = document.getElementById("show");
    var hide = document.getElementById("hide");
    var div = document.querySelector("div");
    show.onclick = function() {
      div.style.display = "block";
    };
    hide.onclick = function() {
      div.style.display = "none";
    };
  </script>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: red;
        display: block;
      }

      .box {
        display: none;
      }
    </style>
  </head>

  <body>
    <button id="show">显示</button>
    <button id="hide">隐藏</button>
    <div></div>
  </body>
  <script>
    let div = document.querySelector("div");
    console.log(div);
    let show = document.getElementById("show");
    let hide = document.getElementById("hide");
    show.onclick = function() {
      div.classList.remove("box");
    };
    hide.onclick = function() {
      div.classList.add("box");
    };
  </script>
</html>
```

需求 2. 实现网页的开关灯效果:

- 页面有一个按钮，按钮上面的文字是”开”，点击后变成”关”，同时网页的背景色是黑色，再次点击就变成”开”,同时网页的背景色是白色，如此反复循环

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
  </head>

  <body>
    <!-- 需求2. 实现网页的开关灯效果:
  - 页面有一个按钮，按钮上面的文字是”开”，点击后变成”关”，同时网页的背景色是黑色，再次点击就变成”开”,同时网页的背景色是白色，如此反复循环-->
    <button id="btn">关</button>
  </body>
  <script>
    var btn = document.getElementById("btn");
    var body = document.querySelector("body");
    console.log(body);
    btn.onclick = function() {
      if (btn.innerText == "开") {
        body.style.backgroundColor = "#fff";
        btn.innerText = "关";
      } else {
        btn.innerText = "开";
        body.style.backgroundColor = "#000";
      }
    };
  </script>
</html>
```
