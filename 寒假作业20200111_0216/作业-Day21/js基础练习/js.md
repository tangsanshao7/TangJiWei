1. ## js解答题

   1. 字符串的特性是什么？

      ```
      1.对象性
      2.不可变性
      ```

   2. 使用字符串方法返回指定下标(索引) 对应的字符和不使用字符串方法返回字符的方式分别是什么？

      ```
      使用字符串方法返回指定下标(索引) 对应的字符: 字符串.charAt('索引');
      不使用字符串方法返回字符的方式: 字符串['索引'];
      ```

   3. 查看某个字符串是否存在于字符串中的某个方法是？其返回值为-1或者0分别代表的是什么？

      ```
      字符串.indexOf()
      返回值为-1: 该字符串中不存在某字符串
      返回值为 0: 某字符串 在字符串中首次出现的位置是下标为0位置
      ```

   4. 截取字符的三种方法是什么，分别有什么不同？

      ```
      // 截取字符的三种方法
      1.字符串.slice('开始','结束')  // 从开始下标截取到结束下标的前一个
      2.字符串.substr('开始','个数') // 从开始下标截取固定个数。若无个数则从开始截取到完 
      3.字符串.substring('开始','结束') // 从开始下标截取到结束下标的前一个。然而不同之处是：substring的开始和结束可以互换位置。
      ```

   ## js编程题

   1. 将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"

   ```
   var str = "abcdefgh";
   var arr = str.split('');
   arr.reverse();
   var strNew = arr.join('')
   console.log(strNew);
   ```

   1. 截取字符串 “我爱中华人民共和国” 中 '中华' 输出到控制台中

   ```
   var str = "我爱中华人民共和国";
   console.log(str.slice(2, 4));
   console.log(str.substr(2, 2));
   console.log(str.substring(2, 4));
   console.log(str.substring(4, 2));
   ```

   1. 获取url中的用户名和密码 https://www.test.com/login?name=zs&pwd=123,并且控制台输出对象的格式{name:'zs',pwd:123}

   ```
   var url = "https://www.test.com/login?name=zs&pwd=123";
   var arr = url.split('?')[1].split('&');
   var obj = {};
   for (var i = 0; i < arr.length; i++) {
       let arr1 = arr[i].split('=');
       obj[arr1[0]] = arr1[1];
   }
   console.log(obj);
   ```

   1. var str= 'qweqweoeqweroqweqweodfsfdo' 1)查找字符串中所有字母 'o'出现的位置 2)把字符串中的所有字母'o'替换成 '-';

   ```
   var str = 'qweqweoeqweroqweqweodfsfdo';
   for (var i = 0; i < str.length; i++) {
     if (str[i] == 'o') {
         console.log(`索引为${i}处出现o`);
     }
   }
   var str2 = str.replace(/o/g, '-');
   console.log(str2);
   ```