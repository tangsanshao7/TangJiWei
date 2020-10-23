// 18.请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，然后打印数组内容, var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]

var arr = [1,2,4,5,7,7,666,0,-1,-2,-3];


// 最大值
var max = arr[0];
for(var i = 0;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

// 最小值
var min = arr[0];
for(var i = 0;i<arr.length;i++){
    if(arr[i] < min){
        min = arr[i];
    }
}

var temp=arr[0];
arr[0]=max;
arr[6]=temp;
var temp=arr[arr.length-1];
arr[arr.length-1]=min;
arr[arr.length-1]=temp;
console.log(arr);



