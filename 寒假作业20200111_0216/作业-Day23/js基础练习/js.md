1.  使用循环打印九九乘法表

        ```js
        for (var i = 1; i <= 9; i++) {

    var str = " ";
    for (var j = 1; j <= i; j++) {
    str += j + '_' + i + '=' + i _ j + ' ';
    }
    console.log(str);
    }

        ```

2.  使用循环打印图形
    `*`
    `**`
    `***`

        ```js
        for (var i = 1; i <= 3; i++) {

    var str = "";
    for (var j = 1; j <= i; j++) {
    str += "\*";
    }
    console.log(str);
    }

    ```


3)  使用循环打印图形
    `***`
    `**`
    `*`

    ```js
    for (var i = 0; i < 3; i++) {
    var str = "";
    for (var j = 3; j > i; j--) {
    str += "*";
    }
    console.log(str);
    }

    ```


4.  使用循环打印图形
    `***`
    `**`
    `*`
    `*`
    `**`
    `***`

    ```js

      for (var i = 0; i < 3; i++) {
      var str = "";
      for (var j = 3; j > i; j--) {
      str += "*";
      }
      console.log(str);
      }

      for (var i = 1; i <= 3; i++) {
      var str = "";
      for (var j = 1; j <= i; j++) {
      str += "*";
      }
      console.log(str);
      }

    ```

5.  使用循环打印图形
    `-***`
    `--**`
    `---*`

    ```js
    for (var i = 1; i <= 3; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
    str += "-";
    }
    for (var k = 0; k <= 3 - i; k++) {
    str += "*";
    }
    console.log(str);
    }

    ```

6.  使用循环打印图形
    `* ====`
    `** ===`
    `*** ==`
    `**** =`

        ```js
        for (var i = 1; i <= 4; i++) {

    var str = "";
    for (var j = 1; j <= i; j++) {
    str += "*";
    }
    for (var k = 0; k <= 4 - i; k++) {
    str += "=";
    }
    console.log(str);
    }

    ```

