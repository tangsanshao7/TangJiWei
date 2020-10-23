//  1.一小和尚挑水，要把水缸装满，而且每次只能挑5升水，水缸能容纳80升水。问：小和尚要挑几次才能把水缸挑满？


  var num =0;
  var sum=0;
  while (true) {
    if(sum==80){
      break;
    }else{
      num++;
      sum+=5;
    }
  }
  console.log(num);