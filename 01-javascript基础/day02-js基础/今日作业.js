// 1.利用JavaScript的console实现在控制台输出”我是传智学院的一名学生，我为自己代言”

// console.log('我是传智学院的一名学生，我为自己代言');

// 2.利用JavaScript定义变量a，赋值为88，并且在控制台打印输出变量a的值

// var a =88;
// console.log(a);




// 3.利用JavaScript定义6个不同类型的变量，赋值，并且在控制台打印输出变量的类型

// var num = 100;
// var str = "字符串";
// var booler = true;
// var undef;
// Var kong=null;
// var obj = {
//    name : 'jack',
//    age :20
// };

// console.log(typeof num) ;
// console.log(typeof str) ;
// console.log(typeof booler) ;
// console.log(typeof undef) ;
// console.log(typeof kong) ;
// console.log(typeof obj) ;

// 4.声明两个变量,第一个变量为num1,值为123,第二个变量为num2,值为456,实现两个变量值的交换,即让num1为456,让num2为123;
// 要求，用2种方式实现

// // 4.1 第一种方法
// var num1= 123;
// var num2 =456;
// var num3=num1;
// num1=num2;
// num2=num3;
// console.log(num1);
// console.log(num2);

// // 4.2第二种方法

// var num1= 123;
// var num2 =456;
// var arr=[];
// arr[0]=num1;
// arr[1]=num2;
// num1=arr[1];
// num2=arr[0];
// console.log(num1);
// console.log(num2);

// // 5.输出如下代码的执行结果:
//  var myVarVariable = 666
//  const myConstVariable = 2;
//  console.log(myVarVariable); //666
//  console.log(myConstVariable); // 2
//  myVarVariable = 888;
//  myConstVariable = 5;
//  console.log(myVarVariable); //报错 因为常量不能更改   但是程序是从上往下执行  所以这一行也会报错
//  console.log(myConstVariable); //报错   常量不能更改

// // 6.自定义一个对象：对象拥有年龄，学号，姓名，身高，体重，手机号等属性(这个代码敲三遍，创建3个不同的对象，非常重要)
// // 要求：
// //   1. 通过2种方式定义对象
// //   2. 通过2种方式给对象添加一个属性 gender,值是"男"
// //   3. 获取属性姓名和年龄的值
// //   4. 删除属性体重

//  var people ={
//     name: 'jack',
//     age:18,
//     xuehao:111,
//     height:'180',
//     weight:'60KG',
//     shoujihao:123456
// }

// var people1 = new Object({
//     name : 'ace',
//     age:20,
//     xuehao:222,
//     height: '160',
//     weight: '75KG',
//     shoujihao:456789
// })
// var people2 = {
//     name : 'rose',
//     age:16,
//     xuehao:333,
//     height: '160',
//     weight: '50KG',
//     shoujihao:123789
// }
// // 6.2 通过2种方式给对象添加一个属性 gender,值是"男"
// people.gender='男';
// var attrName = 'gender';
// people1[attrName]='男';

// // 6.3 获取属性姓名和年龄的值
// console.log(people1.name);
// console.log(people1.age);

// // 6.4 删除属性体重
// delete people.weight;
// delete people1.weight;
// delete people2.weight;

// console.log(people);
// console.log(people1);
// console.log(people2);

// // 7.
// var name = 'zs';
// var age;
// console.log(name);// zs
// console.log(age);// undefind  因为没有赋值所以打印出来的是undefind

// // 8.	将下列字符串按照句号分段显示，不要一行显示，
// // 要求：使用2种方式实现：
// // 8.1 第一种方式
// var shi1 ="君不见，黄河之水天上来，奔流到海不复回。\
// 君不见，高堂明镜悲白发，朝如青丝暮成雪。\
// 人生得意须尽欢，莫使金樽空对月。\
// 天生我材必有用，千金散尽还复来。\
// 烹羊宰牛且为乐，会须一饮三百杯。\
// 岑夫子，丹丘生，将进酒，杯莫停。\
// 与君歌一曲，请君为我倾耳听。"

// // 8.2 第二种方式
// var shi2= `
// 君不见，黄河之水天上来，奔流到海不复回。
//   君不见，高堂明镜悲白发，朝如青丝暮成雪。
//   人生得意须尽欢，莫使金樽空对月。
//   天生我材必有用，千金散尽还复来。
//   烹羊宰牛且为乐，会须一饮三百杯。
//   岑夫子，丹丘生，将进酒，杯莫停。
//   与君歌一曲，请君为我倾耳听。
// `

// console.log(shi1);
// console.log(shi2);

// // 9.	将字符串我是"我是中国人"，我爱我的祖国"种的中国人需要加上引号再控制台打印出来，
// // 要求：使用2种方式实现
// // 9.1 第一种方式
// console.log("我是'中国人'，我爱我的祖国");

// // 9.2 第二种方式
// console.log('我是\'中国人\'，我爱我的祖国');

// 10.	定义一个数组，里面放都是数字的类型
// 要求：
// 1.把下标是3对应的元素获取到
// 2.把数组第一个元素修改成数字666
// 3.求出下标是2和4对应的元素的和赋值给下表是1

// var arr= [1,2,3,4,5,6,7];
// console.log(arr[3]);
// arr[0]=666;

// console.log(arr[1]=arr[2]+arr[4]);
// console.log(arr);

// // 11.定义一个数组，里面的元素要把今天所学的数据类型都用到

// var arr = [123,'string',true,undefined,null,{
//     name:'jack',
//     age:20
// }]

// 12.定义一个数组，数组里面放2个对象，对象的属性有name,age,gender,studentId,属性值自己写
// 要求：
// 1.	输出第二个对象里面的属性name的值
// 2.	将第一个对象里面的属性gender的值修改成数字18
// 3.	算出2个对象里面属性是age的和

// var arr = [
//   {
//     name: "rose",
//     age: 16,
//     gender: "女",
//     studentId: 123
//   },
//   {
//     name: "jack",
//     age: 18,
//     gender: "男",
//     studentId: 456
//   }
// ];

// console.log(arr[1].name);
// arr[0].gender=18;
// console.log(arr[0].age+arr[1].age);
// console.log(arr);

// // 13.	定义一个数组，数组里面有一个对象，对象里面有属性price,num,name,colors,colors的值是一个数组，获取colors数组下标是1的值

// var arr =[
//     {
//         price:100,
//         num:3,
//         name:'ace',
//         colors:[red,pink,skyblue]
//     }
// ]

// console.log(arr[0].colors[1]);
