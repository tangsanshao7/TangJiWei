# 选择题

1. 有关 DOM 操作的说法正确的是(C)

   A、children、firstElementChild、lastElementChild 都是包含元素节点以及文本节点的

   B、innerHTML 获取的仅仅是文本内容

   C、可以使用 nodeType 属性来判断节点的类型

   D、nodeType 属性返回值是一个字符串

2. 下面的 HTML 代码中，如果已经获取到 p 元素，其 DOM 对象名为 obj，则有关 DOM 遍历的说法正确的是(A)


```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <div></div>
    <div></div>
    <p><span><span></p>
    <strong></strong>
</body>
</html>
```

A、 如果只想获取 p 的父元素节点，可以使用 obj.parentNode

B、 如果只想获取 p 的上一个兄弟元素节点，可以使用 obj.previousSibling

C、 如果只想获取 p 的下一个兄弟元素节点，可以使用 obj.nextSibling

D、 如果只想获取 p 的所有子元素节点，可以使用 obj.childNodes

3. 下面的 HTML 代码中,只获取 ul 里面的所有 li 元素，其中 ul 已经获取到，下面说法不正确的是(C)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <script>
      var ulobj = document.querySelector("ul");
    </script>
  </body>
</html>
```

A、ulobj.getElementsByTagName('li')

B、ulobj.children

C、ulobj.childNodes

C、ulobj.querySelectorAll('li')

4. A.appendChild(B)这一句代码表示（D ）

   A、把 A 插入到 B 的内部开始

   B、把 A 插入到 B 的内部末尾

   C、把 B 插入到 A 的内部开始

   D、把 B 插入到 A 的内部末尾

5) 下面关于 DOM 节点操作说法不正确的是(D)

A、document.creatElement("A")是创建一个名为 A 的新元素节点

B、ANode.appendChlid(BNode)是把 B 节点追加到 A 节点的子元素的末尾

C、ANode.removeChild(BNode)是删除 A 节点下的子节点 B

D、PNode.insertBefore(ANode,BNode)是在 PNode 的父盒子中将 A 节点插到 B 节点之后

# 简答题

第 1 题. js 的节点创建有几种方式，分别是什么？

```js
js的节点创建有三种方式:
 1: 元素.innerHTML
 2: document.write()
 3: document.createElement()

```

第 2 题. 在 js 中查找节点的操作有哪些？

```js
查找父节点;
查找子节点;
查找所有子节点;
查找第一个子节点;
查找最后一个子节点;
查找兄弟节点;
查找上一个兄弟节点;
查找下一个兄弟节点;
```

第 3 题. 在 js 中操作 DOM 的节点的方式有哪些，语法分别是什么(节点的创建，插入，删除，获取，题换，复制)？

```js
 节点创建

 方法 1: 元素.innerHTML
语法: 元素.innerHTML =`元素`
 方法 2: document.write()
语法: document.write()
 方法 3: document.createElement()
语法: let 元素对象 = document.createElement()

 节点插入

 父元素.appendChild()

 父元素.insertBefore(newChild,refChild)

 节点删除
语法: 父元素.removeChild(子节点)

 节点查找

 查找父节点

方法 1: 元素.parentElement
方法 2: 元素.parentNode(推荐用这个 因为节点包括元素)

 查找子节点

 查找所有子节点

方法 1: 元素.childNodes 获取元素的所有节点
方法 2: 元素.children 获取元素节点(推荐用这个)

 查找第一个子节点

方法 1: 元素.firstChild 获取所有节点
方法 2: 元素.firstElementChild (获取元素节点)
方法 3: 元素.children[0](推荐)

 查找最后一个子节点

方法 1: 元素.lastChild 获取所有节点
方法 2: 元素.lastElementChild (获取元素节点)
方法 3: 元素.children[元素.children.length-1](推荐使用)

 查找兄弟节点

 查找上一个兄弟节点

方法 1: 元素.previousElementSibling(推荐)
方法 2: 元素.previouSibing

 查找下一个兄弟节点

方法 1: 元素.nextElementSibling(推荐)
方法 2: 元素.nextSibling;

 节点替换

方法: 父元素.replaceChild(新元素,旧元素);
参数: 新元素 旧元素

 节点复制

方法: 自身元素.cloneNode()
参数: true 代表深拷贝 false 代表浅拷贝 注意 ⚠️:false 可以不写

```

# 编程题

需求 1. 实现 qq 留言板的效果(附件:qq 留言板和 gif):

- 只需要完成功能，页面已经给定
- 用户在留言框内输入内容，点击发表，就会在留言区域内添加一条留言的内容
- 留言的内容格式在“留言区”已经给定，发表留言的格式请根据这个创建
- 如果留言框的内容为空，那么弹出“您还没有输入任何内容”，就不会添加空的内容在留言区
- 注意:“留言区”的时间是当前的日期时间

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>漠丶叹尘的空间</title>
  <link rel="icon" sizes="any" mask href="http://qzonestyle.gtimg.cn/qzone/v8/img/Qzone.svg">
  <link rel="stylesheet" type="text/css" href="css/index.css">
</head>

<body>
  <div class="header"> This is the head nav </div>
  <div class="topInfo">
    <span class="edit">编辑</span>
    <div class="zoneName">
      <h2>漠丶叹尘 的空间</h2>
      <p>知我者，谓我心忧。不知我者，谓我何求。</p>
    </div>
    <div class="support">
      <img src="image/support_1.png" alt="赞">
      <span class="num">7</span>
    </div>
    <div class="tips">7人赞过</div>
    <!-- bottom nav -->
    <div class="top_bottom">
      <div class="photo">
        <img src="http://qlogo3.store.qq.com/qzone/1262283870/1262283870/100?1481718124">
      </div>
      <div class="uploadphoto">修改头像</div>
      <div class="container">
        <ul class="section">
          <li>主页</li>
          <li>日志</li>
          <li>相册</li>
          <li>留言板</li>
          <li>说说</li>
          <li>个人档</li>
          <li>音乐</li>
          <li>更多</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 下面实现留言板功能 -->
  <div class="mainframe">
    <div class="title">留言板</div>
    <div class="message">主人寄语</div>
    <div class="info"> 这是主人留下的寄语~ </div>
    <div class="content" contenteditable="true"></div>
    <input type="button" name="submit" value="发表" class="subbtn">
    <div class="numofmessage">留言(0)</div>
    <!-- 下面是留言区 -->
    <div class="msgFrame">
      <!-- <div class="content_1">
        <img class="name" src="http://qlogo3.store.qq.com/qzone/1262283870/1262283870/100?1481718124" alt="photo">
          <div class="mainInfo">
            <div class="userId"><a href="#">zipple</a></div>
            <div class="conInfo"> 这是一条留言。 </div>
            <div class="time">2016-12-19 23:46:11</div>
          </div> -->
    </div>
  </div>
  </div>
</body>
<script>
  var text = document.querySelector(".content");
  var inp = document.querySelector(".subbtn");
  var mainframe = document.querySelector(".mainframe");
  var msgFrame = document.querySelector(".msgFrame");
  var numofmessage = document.querySelector(".numofmessage");
  var content_1 = document.querySelector(".content_1");

  var num = 0;
  inp.onclick = function () {
    if (text.innerText == '') {
      alert('您没有输入内容');
      return false;
    } else {
      num++;
      var box = document.createElement("div");
      box.innerHTML = `<div class="content_1">
        <img class="name" src="http://qlogo3.store.qq.com/qzone/1262283870/1262283870/100?1481718124" alt="photo">
          <div class="mainInfo">
            <div class="userId"><a href="#">zipple</a></div>
            <div class="conInfo"> ${text.innerText} </div>
            <div class="time">2016-12-19 23:46:11</div>
          </div>`;
      numofmessage.innerText = `留言(${num})`;
      text.innerText = '';
      msgFrame.insertBefore(box, msgFrame.children[0]);
    }
  }
</script>

</html>
```

需求 2. 实现许愿墙效果(附件:许愿墙和 gif):

- 只需要完成功能，页面已经给定
- 功能一：根据给定的数据，在页面中创建对应的许愿签，(页面中已经给定一个许愿签的格式，参照那个格式创建许愿签)，参照完之后将页面的这个许愿签删除了
- 功能二：许愿签的位置是随机的
- 功能三：点击右上角的小 x，会将对应的这个许愿签关闭
- 功能四：双击许愿签的头部，也会将对应的这个许愿签关闭

```html
<!DOCTYPE html>
<html>
  <head lang="en">
    <meta charset="UTF-8" />
    <title></title>
    <style>
      body {
        margin: 0 auto;
        padding: 0px;
        font-size: 12px;
        background: url(images/bg.gif) repeat center 36px;
        text-align: center;
        background-color: #c30230;
      }

      #content {
        margin: 0 auto;
        width: 960px;
        background: url(images/content_bg.jpg) no-repeat left top;
        height: 627px;
        position: relative;
      }

      #content .tip1,
      #content .tip2,
      #content .tip3,
      #content .tip4,
      #content .tip5,
      #content .tip6,
      #content .tip7,
      #content .tip8 {
        position: absolute;
        width: 227px;
        left: 200px;
        top: 100px;
      }

      #content .tip1 .tip_h {
        background: url(images/tip1_h.gif) no-repeat left top;
      }

      #content .tip1 .tip_h,
      #content .tip2 .tip_h,
      #content .tip3 .tip_h,
      #content .tip4 .tip_h,
      #content .tip5 .tip_h,
      #content .tip6 .tip_h,
      #content .tip7 .tip_h,
      #content .tip8 .tip_h {
        width: 227px;
        padding-top: 45px;
        height: 23px;
        text-align: left;
        cursor: move;
      }

      #content .tip1 .tip_c {
        background: url(images/tip1_c.gif) repeat-y;
      }

      #content .tip1 .tip_c,
      #content .tip2 .tip_c,
      #content .tip3 .tip_c,
      #content .tip4 .tip_c,
      #content .tip5 .tip_c,
      #content .tip6 .tip_c,
      #content .tip7 .tip_c,
      #content .tip8 .tip_c {
        width: 200px;
        padding-left: 12px;
        padding-right: 15px;
        min-height: 40px;
        text-align: left;
        line-height: 20px;
        max-height: 160px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
      }

      #content .tip1 .tip_f {
        background: url(images/tip1_f.gif) no-repeat left top;
      }

      #content .tip1 .tip_f,
      #content .tip2 .tip_f,
      #content .tip3 .tip_f,
      #content .tip4 .tip_f,
      #content .tip5 .tip_f,
      #content .tip6 .tip_f,
      #content .tip7 .tip_f,
      #content .tip8 .tip_f {
        width: 227px;
        height: 53px;
        padding-top: 20px;
      }

      #content .close,
      #content .close2 {
        float: left;
        font-size: 12px;
        cursor: pointer;
        color: #000000;
      }

      .clr {
        clear: both;
        overflow: auto;
        display: block;
        height: 0px;
      }

      #content .icon {
        float: left;
        width: 35px;
        padding-left: 15px;
        height: 35px;
        text-align: center;
      }

      #content .name {
        float: right;
        padding-right: 15px;
        text-align: right;
        font-size: 14px;
        line-height: 35px;
        color: #c0f;
      }

      #content .num {
        float: left;
        padding-left: 7px;
        width: 195px;
      }
    </style>
  </head>

  <body>
    <!--纸条墙-->
    <div id="content">
      <div class="tip1" id="tip7" style="top: 63px; left: 82px;">
        <!-- <div class="tip_h" title="双击关闭纸条">
        <div class="num">第[49568]条 2020-03-13 16:30:00</div>
        <div class="close" title="关闭纸条">×</div>
        <div class="clr"></div>
      </div>
      <div class="tip_c">希望早点在学校相聚,我在沭阳等你们</div>
      <div class="tip_f">
        <div class="icon"><img src="images/bpic_1.gif" alt="" title=""></div>
        <div class="name">拉拉留言</div>
        <div class="clr"></div>
      </div> -->
      </div>
    </div>
    <script>
      //模拟数据
      var messages = [
        {
          id: 1,
          name: "mahu",
          content: "今天你拿苹果支付了么",
          time: "2016-02-17 00:00:00"
        },
        {
          id: 2,
          name: "haha",
          content: "今天天气不错，风和日丽的",
          time: "2016-02-18 12:40:00"
        },
        {
          id: 3,
          name: "jjjj",
          content: "常要说的事儿是乐生于苦",
          time: "2016-03-18 12:40:00"
        },
        {
          id: 4,
          name: "9.8的妹纸",
          content: "把朋友家厕所拉堵了 不敢出去 掏了半小时了都",
          time: "2016-03-18 12:40:00"
        },
        {
          id: 5,
          name: "雷锋ii.",
          content: "元宵节快乐",
          time: "2016-02-22 12:40:00"
        },
        {
          id: 6,
          name: "哎呦哥哥.",
          content:
            "据说今晚央视的元宵晚会导演和春晚导演是同一个人，真是躲得过初一，躲不过十五。",
          time: "2016-02-22 01:30:00"
        },
        {
          id: 7,
          name: "没猴哥，不春晚",
          content:
            "班主任:“小明，你都十二岁了，还是三年级，不觉得羞愧吗”？。小明:“一点也不觉得，老师你都四十多岁了，不也是年年在三年级混日子吗？羞愧的应该是你”。老师:……",
          time: "2016-02-22 01:30:00"
        },
        {
          id: 8,
          name: "哎呦杰杰.",
          content:
            "真搞不懂你们地球人，月亮有什么好看的，全是坑，还是对面那哥们好看，",
          time: "2016-02-22 01:30:00"
        }
      ];

      var content = document.getElementById("content");

      for (var i = 0; i < messages.length; i++) {
        var obj = messages[i];
        var tip = document.createElement("div");
        tip.className = "tip1";
        tip.innerHTML = `
      <div class="tip_h clearfix" title="双击关闭纸条">
        <div class="num">第[${obj.id}]条 ${obj.time}</div>
        <div class="close" title="关闭纸条">×</div>
        <div class="clr"></div>
      </div>
      <div class="tip_c">${obj.content}</div>
      <div class="tip_f">
        <div class="icon"><img src="images/bpic_1.gif" alt="" title=""></div>
        <div class="name">${obj.name}</div>
        <div class="clr"></div>
    </div>`;

        var x = parseInt(Math.random() * 734);
        var y = parseInt(Math.random() * 441);
        tip.style.left = x + "px";
        tip.style.top = y + "px";
        console.log(tip);
        content.appendChild(tip);
        var zIndex = 0;

        tip.onclick = function() {
          zIndex++;
          this.style.zIndex = zIndex;
        };

        tip.children[0].ondblclick = function() {
          content.removeChild(this.parentNode);
        };
        tip.children[0].children[1].onclick = function() {
          content.removeChild(this.parentNode.parentNode);
        };
      }
    </script>
  </body>
</html>
```
