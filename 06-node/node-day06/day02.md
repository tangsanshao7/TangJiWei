# 简答题

1. 请简述ajax请求的时候get 和post方式的区别?
```js
1.Post传输数据时，不需要在知URL中显示出来，而Get方法要在URL中显示。
2.Post传输的数据量大，可以达到2M，而Get方法由于受到URL长度的限制,只能传递大约1024字节道.
3.Post顾名思义,就是为了将数据传送到服务器段,Get就是为了从服务器段取得数据.而Get之所以也能传送数据,只是用来设计告诉服务器,你到底需要什么样的数据.Post的信息作为http请求的内容，版而Get是在Http头部传输的。
```

2. ajax都有哪些优点和缺点？

```js
优点：
1.Ajax用在项目中 次数特别的多
2.不是一个新技术 是老技术的新应用
3.网速慢的情况下，页面加载时间长，用户只能等待
4.表单提交后，如果一项内容不合格，需要重新填写所有表单内容(提升用户体验)
5.页面跳转，重新加载页面，造成资源浪费，增加用户等待时间
6.局部刷新
缺点：
如果网速慢，则会出现ajax请求缓慢，页面空白的情况，对客户的体验不好。ajax请求不利于搜索引擎优化，一般搜不到ajax添加到页面的信息
```
3. 简述ajax的工作原理?

```js
Ajax 相当于浏览器发送请求与接收响应的代理人，以实现在不影响用户浏览页面的情况下，局部更新页面数据，从而提高用户体验。
```
4. readyState的值有哪些,分别代表什么意思?
```js
hr.readyState = 0时，（未初始化）还没有调用send()方法
xhr.readyState = 1时，（载入）已调用send()方法，正在发送请求
xhr.readyState = 2时，（载入完成）send()方法执行完成，已经接收到全部响应内容
xhr.readyState = 3时，（交互）正在解析响应内容
xhr.readyState = 4时，（完成）响应内容解析完成，可以在客户端调用了
```

# 编程题

1题: 实现看笑话功能

```js

- 请求地址：https://autumnfish.cn/api/joke
- 请求方法：get

1. 点击页面中的"点我看笑话"按钮,`.joke-text`盒子中就会出现获取到的笑话

```

2题: 实现用户注册功能
```js

用户验证
- 请求地址：https://autumnfish.cn/api/user/check
- 请求方法：post
- 请求参数：username

1. 文本框失去焦点事件
2. 获取文本框的value值
3. 类名为.info的盒子内容就会变为: 验证中...
4. 调用用户验证接口
5. 数据返回之后设置内容到类名为.info的盒子内

用户注册
- 请求地址：https://autumnfish.cn/api/user/register
- 请求方法：post
- 请求参数：username

1. 点击注册按钮
2. 获取文本框的value值
3. 类名为.info的盒子内容就会变成: 注册中...
4. 调用用户注册接口
5. 数据返回之后设置内容到类名为.info的盒子内

```