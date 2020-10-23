# 选择题

1. 下列选项关于 window 对象方法的说法错误的是（d)

A、window 对象包括 location 对象、history 对象和 docuement 对象

B、window.onload 会在一个页面中所有资源加载完成后执行

C、window.onresize 会在窗口被调整大小时发生

D、document.DomContentLoaded 会在一个页面中所有图片加载完后执行

2. 下列选项关于 onload 事件说法正确的是(c)

A、onload 事件会在媒体或图片加载完成后执行

B、onload 事件会在图片加载完之后执行

C、onload 事件会在页面中所有资源加载完毕之后执行

D、onload 事件会在页面中 dom 文档树加载完之后执行

3. 下列选项关于定时器的说法正确的是( b)

A、setTimeout(函数名,时间)能够多次执行

B、var timer = setInterval(函数名,时间)执行之后，timer 接收的结果是一个数字

C、setTimeout 创建的定时器，需要通过 clearInterval()来停止定时器

D、setTimeout(函数名,时间)可以创建一个定时器

4. 下列关于周期性定时器的书写方式错误的是(c)

A、setInterval(function(){},1000)

B、setInterval(test,1000);function test(){console.log(1)}

C、setInterval(test(),1000);function test(){}

5. 下列选项关于定时器说法不正确的是(b）

A、用于指定在一段特定的时间后执行某段程序

B、setTimeout(“<表达式>”，毫秒数)其功能是在经过毫秒数后执行多次<表达式>

C、clearTimeout()和 clearInterval()都是是用于终止一个定时器

D、setInterval(“<表达式>”，毫秒)的功能是每隔毫秒数重复执行<表达式>，直至窗口被关闭或执行 clearInterval 定时器关闭。

# 简答题

第 1 题. BOM 是什么的缩写，BOM 的顶级对象是什么？

```js
browser object model
window
```

第 2 题. DOMContentLoaded 事件和 onload 事件的区别是什么？

```js
DOMContentLoaded事件是等页面中的dom结构加载完以后执行;
onload是页面中的所有东西加载完以后执行;
```

第 3 题. 定时器分为几种，有什么区别，怎么清除定时器


```js

延时定时器和周期定时器 延时定时器只执行一次 周期定时器一直执行
延时定时器：clearTimeout（定时器名字）
周期定时器：clearInterval（定时器名字）
```

# 编程题

1. 实现美女时钟效果(附件)：

- 页面和功能都需要自己完成
- 页面中会不断变换美女，并且美女手里拿的日历的小时和秒是和系统当前的时间是一样的

2. 随机点名器效果(附件)：

- 点击"开始点名"按钮，文字就会改成"停止点名",上面就会不断替换名字
- 再次点击按钮，文字就会改成"开始点名",上面就显示当前选中的名字
