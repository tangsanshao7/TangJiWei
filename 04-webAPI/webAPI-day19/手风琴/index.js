 // 获取任何元素在任何浏览器中的任何属性的值的方法
    /**
     * 
     * @param {Obejct} element 要获取哪个元素的属性
     * @param {String} attr  要获取元素的哪个属性
     */
    function getStyle(element, attr) {
      // 你支持这个方法吗window.getComputedStyle
      if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
      } else {
        // 不支持 就代表是 ie8
        return element.currentStyle[attr];
      }
    }

    // 缓动动画的函数
    /**
     *
     * @param {Obejct} element 要获取哪个元素的属性
     * @param {String} attr  要获取元素的哪个属性
     * @param {Number} target 目标值
     */
    function animate(element, attrObj) {
      // 1.清除定时器
      clearInterval(element.timer);
      // 2.开启定时器
      element.timer = setInterval(function () {
        // 假设目标全部达到了
        // let flag = true;
        for (let attr in attrObj) {
          // 2.1 获取一下元素当前的所有属性值(不知道当前是那些属性 所以要从 传进来的对象中找到 对应的属性)
          // width： 200 height:200 left: 0
          let current = parseInt(getStyle(element, attr));
          // console.log(current);
          // 获取到目标值 400  400 800
          let target = attrObj[attr];
          // console.log(target);
          // 2.2 计算一下步长
          let step = parseInt(target - current) / 10;
          // 2.3 判断步长是不是一个小数
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          // 2.4 要在当前位置和步长进行叠加
          current += step;
          // 2.5 计算完的值赋值给元素
          element.style[attr] = current + 'px';
          // 2.6判断一下是否到目标位置了 清除定时器 这里if判断循环了很多次 不好 要进行修正
          // if (current !== target) {
          //   flag = false;
          // }

          if (current == target) {
            clearInterval(element.timer)
          }
        }
        // 避免出现多次判断
        // if (flag) {
        //   clearInterval(element.timer);
        // }

      }, 20)


    }
