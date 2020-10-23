// 5.编写一个add函数，实现如下效果:
 // console.log(add(1, 2)); // 3
// console.log(add(1)(2)); // 3 



// 使用单个函数求和

function getSum(a,b){

    return a + b;
}


//使用嵌套函数求和

function num1(a) { 


    function num2(b) { 

        return a + b;
    }
    
    return num2;
 }

 console.log(num1(1)(2));