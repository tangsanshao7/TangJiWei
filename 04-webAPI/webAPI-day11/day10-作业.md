# 选择题

1. 下列关于 offsetleft 和 style.left 说法中正确的是（B）

   A、offsetleft 返回的是字符串，style.left 返回的是数值

   B、style.left 是读写的，offsetleft 是只读的，所以要改变 div 的位置，只能修改 style.left

   C、offsetleft 的值需要事先定义，否则读取到的值为空

   D、如果父 div 的 position 定义为 relative，子 div 的 position 定义为 absolute，那么子 div 的 style.left 的值是相对于父 div 的值，这与 offsetleft 是相同的

2. 下列关于 offsetWidth 和 offsetHeight 的说法正确的是(A)

   A、可以获取行内及内嵌的宽高

   B、获取到的值是一个 string 类型，带单位

   C、获取的宽高包含 border 和 padding 和 margin

   D、不仅能读取，还能设置值

3. 下列关于 offsetParent 说法错误的是(D)

   A、如果元素自身是固定定位（fixed），则定位父级是 null

   B、如果元素自身是非固定定位,并且父元素有定位，那么它的定位父级是最近的那个父级元素

   C、如果元素自身是非固定定位,并且所有的父元素都没有定位，那么它的定位父级是 body

   D、body 的定位父级是 html

4. 下列关于 offset 系列说法错误的是(D)

   A、offsetWidth 用于获取元素的真实宽度(除了 margin 以外的宽度)

   B、offsetLeft 可以用于获取元素到最近的定位父盒子的左侧距离

   C、offsetParent 用于获取该元素中有定位的最近父级元素

   D、offsetLeft 和 offsetTop 只能获取到有定位元素的 left 值和 top 值

5. 下列哪个属性不是事件对象 的属性(C )

   A、clientX

   B、pageX

   C、offsetLeft

   D、target

# 简答题

第 1 题. offset 和 style 的区别是什么？

```js
元素.style.属性名 只能获取行内样式 获取不了样式表或style标签中的样式
```

第 2 题. offsetWidth 与 offsetHeight 的注意点有哪些？

```js
offsetWidth 获取某个元素的尺寸 是宽度+padding+border 不包括margin 不带单位
offsetHeight 获取某个元素的尺寸 是高度+padding+border 不包括margin 不带单位
```

第 3 题. offsetLeft 与 offsetTop 的注意点有哪些？

```js
offsetLeft 找到自身相对于定位父级的left值
offsetTop 找到自身相对于定位父级的top值
如果不存在任何定位的元素 呢么就从body计算
不断的去找有定位的父元素 直到找到 找不到 算body是定位父级
```

# 编程题

今天的综合案例敲三遍，讲的综合案例每句代码上面写上注释，明天交给组长的就是综合案例和这个.md 文件的代码
