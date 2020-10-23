# 简答题（注意自己写，从下周开始我会在自习课的时候或者是周三抽查人企业微信写）

1. 目前你所学的请求方式有哪些？区别是什么？(不要直接把百度的粘上来，用自己的话总结)

```js
答:目前所学:
get;
post;

答:区别:
get存储内容小，不能超过2kb，有限；文件上传只能用post。
get不安全，显示在地址栏。
get效率高，因为post请求需要加密和解密的过程，get不需要。
在做数据查询时，建议用Get方式；而在做数据添加、修改或删除时，建议用Post方式；在提交一些不紧要信息时，使用get，效率高。

```

2. 原生的 ajax 怎么发请求?(get 和 post 的方式都写出来,每行写上注释)

```js
// 1.实例化ajax对象
var xhr = new XMLHttpRequest();
// 2.设置请求的方法和地址
xhr.open(方法, 地址);
// 3.设置请求头(post才需要)
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 4.注册回调函数
xhr.onload = function () {};
// 5.发送请求 post的数据在send中发送
xhr.send(数据);
```

3. jq 的 ajax 的语法是什么?并且写出来目前你用到的属性每个的含义?

```js
$.ajax({
  type: "", //设置请求方法
  url: "", //设置请求地址
  data: "", //设置请求数据
  success: function (response) {
    //请求成功回调
  },
});
```

4. 使用 art-template 模板引擎的步骤是什么？(用自己的话写，不要直接粘笔记)

```js
1.准备art-template文件
2.使用script引入模板文件,添加id type ="text/html",这样浏览器就不会把这个文件当做js解析了
代码:
<script type="text/template"  id="id的名字">
  <!-- 这里是html结构 -->
</script>
3.使用 渲染html =  template('模板ID', 对象);
代码:
  let htmlStr = template('id的名字', {
        content: title
      });
```

5. art-template 模板引擎的语法你知道的有哪些，并且总结出来?

```js
 1.输出:
 {{value}}
{{data.key}}
{{data['key']}}
{{a ? b : c}}
{{a || b}}
{{a + b}}
2.条件输出:
<!-- 单 if 判断 -->
{{if value}}
...
{{/if}}

<!-- if ... else ... 判断 -->
{{if v1}}
...
{{else if v2}}
 ...
{{/if}}

3.循环输出:
{{each target}}
  {{$index}} {{$value}}
{{/each}}
4.定义变量:
{{set temp = data.sub.content}}
5.模板继承:
{{extend './layout.html'}}
{{block 'head'}}
...
{{/block}}

```

6. 客户端和服务端的通信过程是怎么样的？

```js
    // 1.用户打开浏览器
    // 2.地址栏输入我们需要访问的网站地址(URL)
    // 3.浏览器通过DNS服务器 获取即将访问的网站的IP地址
    // 4.浏览器发起一个对这个IP地址的请求
    // 5.服务端监听指定的 端口 的服务器软件接收到这个请求，进行相应的处理
    // 6.服务端将处理完的结果返回给客户端浏览器(响应)
    // 7.浏览器将服务端返回的结果呈现到界面上
```

7. express 怎么开放静态资源?

```js
app.use(express.static(path.join(__dirname, "public")));
//该行代码是在express添加中间件，设置静态资源路径为public，所有的HTML、CSS、JS等文件都放在public下即可
```

8. express 怎么读文件和写文件?

```js
// fs 是 file-system 的简写，就是文件系统的意思
// 在 Node 中如果想要进行文件操作，就必须引入 fs 这个核心模块
// 在 fs 这个核心模块中，就提供了所有的文件操作相关的 API
// 例如：fs.readFile 就是用来读取文件的
fs.readFile("./data/hello.txt", function (error, data) {
  // 在这里就可以通过判断 error 来确认是否有错误发生
  if (error) {
    console.log("读取文件失败了");
  } else {
    console.log(data.toString());
  }
});

//写文件
// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
fs.writeFile("文件路径", "文件内容", function (error) {
  if (error) {
    console.log("写入失败");
  } else {
    console.log("写入成功了");
  }
});
```

9. JSON 对象和 JSON 字符串是怎么进行相互转换的?

```js
JSON.stringify(obj); //将JSON对象转为字符串。
JSON.parse(string); //将字符串转为JSON对象格式。
```

10. form 表单怎么的属性有哪些？分别是什么意思？

```js

<input type="text">:文本框,输入单行文本
<input type="password">:密码框,输入密码信息,所有输入的信息会隐藏显示
<input type="button">:普通按钮,一般用来完成javascript功能的
<input type="submit">:表单提交按钮,点此按钮提交表单
<input type="reset">:表单重置按钮,点此按钮表单中的数据回到填写之前.
<input type="radio">:单选按钮
<input type="checkbox">:多选按钮
<input type="hidden">:隐藏域,将一个值隐藏传递.
<input type="image">:功能和submit提交按钮相同,但可以显示图片.
<textarea></textare>:文本域,输入多行文本
<select>:下拉列表,需要结合option一起使用
<option>:通过该值为<select>设置选项

```

11. form 表单怎么序列化获取值表单的值？

```js
   document.querySelector('form标签选择器').serialize()
```

12. form 表单怎么阻止默认的提交行为?

```js
1.input标签type=submit属性修改为type=button
2. 使用preventDefault()
```

13. 在客户端怎么由 login.html 页面跳转到首页 index.html?

```js
   location.href='./index.html'
```
