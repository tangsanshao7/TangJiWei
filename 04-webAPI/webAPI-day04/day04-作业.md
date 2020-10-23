# 选择题

1. 下列关于传统自定义属性的操作说法错误的是(D)

   A、元素.setAttribute("属性名","值")无返回值，可以实现给元素添加自定义属性

   B、元素.removeAttribute("属性名")会将自定义属性删除

   C、元素.getAttribute("属性名")的返回值是自定义属性的值

   D、元素.setAttribute("属性名","值")只可以实现自定义属性的添加，不能实现自定义属性的修改

2. 关于属性值的获取或设置说法错误的是(C)

   A、 document.getElementById(id).属性=新值

   B、 document.getAttribute(‘属性名’)

   C、 setAttribute()不允许对属性节点值做修改

   D、 document.setAttribute(‘属性名’,'值')

3. 下列通过 H5 自定义属性获取`my-index`的值正确的写法是(D)

```html
<div id="dv" data-my-index="1">我是盒子</div>
<script>
  var dvObj = document.querySelector("div");
</script>
```

A、dvObj.dataset.my-index

B、dvObj.dataset["my-index"]

C、dvObj.dataset[myIndex]

D、dvObj.dataset.myIndex

4. 下列通过 H5 自定义属性说法不正确的是(A)

A、元素.dataset.自定义属性名= "值"只能给元素添加一个自定义属性，不能修改自定义属性

B、delete 元素.dataset.自定义属性名是将对应的自定义属性删除

C、元素.dataset 可以获取某个标签上面的所有自定义属性，返回值是一个对象

D、元素.dataset.自定义属性，在获取自定义属性的时候需要采用驼峰命名法获取

5. 补充代码，当失去焦点清空 input 中的 value 值（B）

```html
<input type="text" id="search" value="在Google中搜索，或输入网址" />
<script>
  var oInput = document.querySelector('#search');
  oInput.onfocus = function() {
  1.补充代码
  }
  oInput.onblur = function() {
  if (this.value.length == 0) {
  this.value = "在Google中搜索，或输入网址";
  }
  }
</script>
```

A、 value = "";

B、 this.value = "";
C、 this.value == "";
D、 value =="";

# 简答题

第 1 题. 请简述一下排他思想的核心？

```js
先清除其他所有元素的样式，在设置自己的样式。
```

第 2 题. 请简述传统自定义属性的相关操作(增加、删除、修改、获取)？

```js
增
语法: 元素.setAttribute("自定义属性的名字","自定义属性的值")
参数: 自定义属性的名 自定义属性的值
返回值: 无返回值
删
语法: 元素.removeAttribute("自定义属性的名字")
参数: 自定义属性的名字
返回值: 无
改，查
语法: 元素.getAttribute("自定义属性的名字")
参数: 自定义属性的名字
返回值: 自定义属性的值
```

第 3 题. 请简述 H5 自定义属性的语法，和相关的操作(增加、删除、修改、获取)？

```js
增
 语法: 元素.dataset.自定义属性的名字 =值
删
 语法: delete 元素.dataset.自定义属性的名字
改
 语法: 元素.dataset.自定义属性的名字 =值
查
 语法: let 变量 = 元素.dataset.自定义属性的名字
```

# 编程题

需求 1. 突出显示效果实现(素材在附件中):

- 布局和功能都需要自己完成
- 当鼠标移入对应的小方格图片上面，当前的图片高亮显示，其余的图片变暗
- 当鼠标离开整个大方格内，所有的图片都变亮

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        width: 100px;
        height: 100px;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        background-color: #000;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      ul {
        width: 600px;
        height: 400px;
        margin: 100px auto;
      }

      li {
        float: left;
        height: 200px;
        width: 200px;
      }

      img {
        width: 100%;
        height: 100%;
        border: 2px solid #fff;
        box-sizing: border-box;
      }

      .light {
        opacity: 0.5;
      }
    </style>
  </head>

  <body>
    <ul>
      <li><img src="./images/01.jpg" alt="" /></li>
      <li><img src="./images/02.jpg" alt="" /></li>
      <li><img src="./images/03.jpg" alt="" /></li>
      <li><img src="./images/04.jpg" alt="" /></li>
      <li><img src="./images/05.jpg" alt="" /></li>
      <li><img src="./images/06.jpg" alt="" /></li>
    </ul>
    <script>
      var aImg = document.querySelectorAll("img");
      for (let i = 0; i < aImg.length; i++) {
        aImg[i].onmousemove = function() {
          for (let j = 0; j < aImg.length; j++) {
            aImg[j].classList.remove("light");
          }
          this.classList.add("light");
        };
      }
    </script>
  </body>
</html>
```

需求 2. 全选、反选、取消全选效果实现(素材在案例中):

- 布局已经给了，直接完成功能就可以
- 勾选全选复选框，列表中的选项都被选中，取消全选复选框的勾选，列表中的选项都被取消选中
- 点击全选按钮，列表中的选项都被选中
- 点击取消全选按钮，列表中的选项都被取消选中
- 点击反选按钮，列表中选项选结果呈相反选中结果（原来选择的都取消选择，原来未选择的都变为选择）
- 点击列表中的复选框(备注：中间那四个复选框)，当列表中的复选框全部选中，上面的全选复选框也选中，反之不选中

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Untitled Document</title>
    <style type="text/css">
      .one {
        background-color: #9bf7d5;
      }

      .two {
        background-color: #f3e99a;
      }

      .over {
        background-color: #ef7125;
      }

      table {
        border: #249bdb 1px solid;
        width: 500px;
        border-collapse: collapse;
      }

      table td {
        border: #249bdb 1px solid;
        padding: 10px;
      }

      table th {
        border: #249bdb 1px solid;
        padding: 10px;
        background-color: rgb(200, 200, 200);
      }
    </style>
  </head>

  <body>
    <table id="mailtable">
      <tr>
        <th><input type="checkbox" name="all" />全选</th>
        <th>发件人</th>
        <th>邮件名称</th>
        <th>邮件附属信息</th>
      </tr>
      <tr class="one">
        <td>
          <input type="checkbox" name="mail" />
        </td>
        <td>张三11</td>
        <td>我是邮件11</td>
        <td>我是附属信息11</td>
      </tr>
      <tr class="two">
        <td>
          <input type="checkbox" name="mail" />
        </td>
        <td>张三22</td>
        <td>我是邮件22</td>
        <td>我是附属信息22</td>
      </tr>
      <tr class="one">
        <td>
          <input type="checkbox" name="mail" />
        </td>
        <td>张三33</td>
        <td>我是邮件33</td>
        <td>我是附属信息33</td>
      </tr>
      <tr class="two">
        <td>
          <input type="checkbox" name="mail" />
        </td>
        <td>张三44</td>
        <td>我是邮件44</td>
        <td>我是附属信息44</td>
      </tr>
      <tr>
        <th></th>
        <th colspan="3">
          <input type="button" id="checkAll" value="全选" />
          <input type="button" id="unCheckAll" value="取消全选" />
          <input type="button" id="reverseCheck" value="反选" />
        </th>
      </tr>
    </table>

    <script>
      // 1.勾选全选复选框，列表中的选项都被选中，取消全选复选框的勾选，列表中的选项都被取消选中
      // 2.点击全选按钮，列表中的选项都被选中
      // 3.点击取消全选按钮，列表中的选项都被取消选中
      // 4.点击反选按钮，列表中选项选结果呈相反选中结果（原来选择的都取消选择，原来未选择的都变为选择）
      let checkList = document.getElementsByName("mail");
      let selectAllState = document.getElementsByName("all")[0];
      var checkAll = document.getElementById("checkAll");
      let unCheckAll = document.getElementById("unCheckAll");
      let reverseCheck = document.getElementById("reverseCheck");

      selectAllState.onclick = function() {
        for (var i = 0; i < checkList.length; i++) {
          checkList[i].checked = this.checked;
        }
      };

      for (var i = 0; i < checkList.length; i++) {
        checkList[i].onclick = function() {
          var isAllOk = true;
          for (var j = 0; j < checkList.length; j++) {
            if (checkList[j].checked != true) {
              isAllOk = false;
            }
          }
          selectAllState.checked = isAllOk;
        };
      }

      checkAll.onclick = function() {
        for (var i = 0; i < checkList.length; i++) {
          checkList[i].checked = true;
          selectAllState.checked = true;
        }
      };

      unCheckAll.onclick = function() {
        for (var i = 0; i < checkList.length; i++) {
          checkList[i].checked = false;
          selectAllState.checked = false;
        }
      };

      reverseCheck.onclick = function() {
        var sum = 0;
        for (var i = 0; i < checkList.length; i++) {
          if (checkList[i].checked == true) {
            checkList[i].checked = false;
          } else {
            checkList[i].checked = true;
            sum++;
          }
        }
        if (sum == 4) {
          
          selectAllState.checked = true;
        } else {
          selectAllState.checked = false;
        }
      };
    </script>
  </body>
</html>
```
