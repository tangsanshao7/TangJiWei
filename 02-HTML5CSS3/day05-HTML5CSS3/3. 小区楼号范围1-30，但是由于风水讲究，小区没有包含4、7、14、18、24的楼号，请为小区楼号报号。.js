// 3. 小区楼号范围1-30，但是由于风水讲究，小区没有包含4、7、14、18、24的楼号，请为小区楼号报号。
for(var i=1;i<=30;i++){
    switch (i) {
      case 4:
      case 7:
      case 14:
      case 18:
      case 24:     
      break;
      default:
        console.log(i);
        break;
    }
}