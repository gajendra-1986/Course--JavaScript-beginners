/*var newarr =[1,2,"3"]
var sum=1;

for(var i=0;i< newarr.length;i++) {
   var element = newarr[i]
   sum *= element;
}

console.log("total",sum)
console.log(i)*/


function addition(arr){
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // console.log(sum,arr[i],"=",sum+arr[i])
      sum += Number(arr[i])
      
    }
    return sum
}


// const sum = addition(4,2)
// console.log(sum)
// let arr = [1,2,3,4]
// console.log(addition(101))
// console.log(addition("hello my name"))
// console.log(addition(true))
// console.log(addition([1,2,3,4]))
// console.log(addition([10,20,30,40]))
// console.log(addition([100,"20",30,"40"]))
// console.log(addition({name:"gajendra"}))

function myfun(a,b,...rest) {
  console.log(a,b,rest)
  // console.log(arguments)
  // console.log(a,b,c)
}
myfun("hello",25,"pali",15,16,25,"bye")

// ctrl + c+v
// alt + upkey/downkey
// shift + ctrl + home/end
// shift + home/end
// shift + ctrl + left/right
// ctrl + /
// ctrl + D
