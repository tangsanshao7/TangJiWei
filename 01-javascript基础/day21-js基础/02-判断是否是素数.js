 // 写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)
 //声明一个函数  设置一个形参
 function Snum(num) {
     //循环遍历2 到num之间所有的数  因为素数是从2开始的
     for (var i = 2; i < num; i++) {
         //判断如果有 能整除 num 的 元素  就返回false
         if (num % i == 0) {
             return false;
            }
        }
        //否则 返回 true
        return true;
    }
 
    console.log(Snum(5));