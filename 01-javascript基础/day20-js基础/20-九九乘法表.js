// 20.写一个函数，打印九九乘法表
//声明一个函数
function getNine(){
    //创建for循环嵌套
    for(var i = 1 ; i <= 9 ; i++){
        //创建空字符串  保存九九乘法表格式
        var str = "";
        for(var j = 1 ; j <= i ; j++){
            //将格式 赋值给空字符串
            str += i + " * " + j + " = " +  i*j + "  ";
        }
        //打印字符串
        console.log(str);  
    }
}

getNine();