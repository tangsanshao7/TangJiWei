# 选择题
1. 有关获取元素方法的说法错误的是（   ）

   A、getElementById()返回的是单个DOM对象

   B、getElementsByTagName()返回的是多个DOM对象

   C、querySelectorAll()返回的是多个DOM对象

   D、document.body等价于document.getElementsByTagName("body")

2. 下面HTML代码中，可以正确获取p元素的方法是（   ）
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
    <p></p>
    <strong></strong>
</body>
</html>

```

   A、document.getElementsByTagName("p")

   B、document.getElementsByTagName("p")[0]

   C、document.getElementsByTagName("p")[1]

   D、getElementsByTagName("p")[0]

3. 下列关于DOM模型节点访问说法正确是（）

   A、可以根据节点ID访问多个对象

   B、getElementsByTagName方法是根据节点的name属性访问节点

   C、querySelector方法的作用是获取一个指定name属性值的对象集合

   D、getElementsById的我们作用是根据name值获取对象集合集合

4. 下面HTML代码中，可以正确获取第二个ul元素的方法是（   ）
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
       <li>
           <ul>
              <li>31</li>
              <li>32</li>   
           </ul>
       </li>
  </ul>
</body>
</html>
```
   A、document.querySelectorAll('ul')[0]

   B、document.querySelector('ul')[1]

   C、document.getElementsByTagName('ul')[0]

   D、document.querySelectorAll('ul')[1]

5. 执行以下代码后的结果是（）
```html
  <button id="oyx">按钮</button>
  <script>
    var btn = document.querySelectorAll("button")
    btn.onclick = function(){
       console.log("11")
    }
  </script>
```


  A、没有反应

  B、在控制台输出11

  C、在页面弹出框显示11

  D、“按钮”文字变成11


# 简答题

1. js由哪几部分构成，DOM的顶级对象是谁？
```js

```
2. 列举获取DOM元素的方法？
```js

```
3. 获取html和body标签的方式是什么？
```js

```
4. 事件三要素是什么？并举几个常见的事件类型? 
```js

```

# 编程题

需求1.获取元素:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="mod-tabs">
    <ul>
        <li>list1</li>
        <li>list2</li>
        <li id="list3">list3</li>
        <li>
           <ul>
              <li>list41</li>
              <li>list42</li>
           </ul>
        </li>
        <li>list5</li>
    </ul>
    <button class="btn">点我</button>
 </div>
</body>
</html>
```
1. 获取上面代码中的html元素
```js

```
2. 获取上面代码中的body元素
```js

```
3. 获取上面代码中的按钮,通过三种方式
```js

```
4. 获取上面代码中所有的li元素,用2种方式
```js

```
5. 获取上面代码中list3元素
```js

```
6. 获取第二个ul中的所有li
```js

```

需求2. 鼠标的事件:
- 在页面中创建一个div，给这个div添加点击事件，在页面中显示，我被点击了，
- 鼠标进入事件，在页面中显示，鼠标移入到了盒子上，
- 鼠标离开事件，在页面中显示，鼠标离开了盒子
