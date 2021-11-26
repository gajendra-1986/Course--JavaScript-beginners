console.log("this is tutorial");
/*
//let a = window.document;
//window.alert("hello harry");
//a= prompt('enter you name');
//a = confirm('are you want to exit');
//let element = document.getElementById('my first');
//element = element.childNodes;
//element.style.color = 'red';
//element.innerText = 'harry is a good boy';

//console.log(element);

//let sel = document.querySelector('#my first');
//sel = document.querySelector('child1');
//console.log(sel)

//let elems = document.getelementsByClassName('child');
//console.log(elems[0])
//let cont = document.querySelector('.n');
//console.log(cont);
/*let element = document.createElement('li');
element.className = 'child1';
element.setAttribute('title','mytitle');
let ul = document.querySelector('ul.this');
ul.appendchild(element);
console.log(ul);
console.log(element)*/
/*
var day = 0;

switch (day) {

  case 0:
    document.write("today is monday");
    break;
  case 1:
    document.write("today is tuesday");
    break;
  case 2:
    document.write("today is wednesay");
    break;
  case 3:
    document.write("today is thrusday");
    break;
  case 4:
    document.write("today is friday");
    break;
  case 5:
    document.write("today is saturday");
    break;
  case 6:
    document.write("today is sunday");
    break;
  default:

    document.write("invalid day");


}

//alert('hi this is my page');
var a = 15;
var b = 20;
if (a < b) {

  alert("value is" + a);
} else {
  alert("value is " + b);
}

function hello(fname, lname) {

  console.log("my name is" + fname + ' ' + lname);
}
hello("gajendra", "sharma");
hello();
function sum(a, b) {
  console.log(a + b);
}
hello();
hello();
sum(5, 5);

function sum(a, b, c) {
  return (a + b + c)
}

console.log(sum(6, 7, 8));

var  a=1;
while(a<=10){
  document.write("How are you <Br>");
  a=a+1;
}*/
/*
var a = 1;
do {
  console.log("hello MR");
  a = a + 1;
} while (a <= 10)*/

/*
for (a = 0; a < 10; a++) {
  if (a % 2 == 0) {
    document.write(a + "</br>");
  }

}*/
/*
function test1(number,min,max) {
  //console.log("test");
  for (let i = min; i <= max; i++) {
    //console.log(i)
    if (i % number == 0) {
      console.log(i);
    }
  }
}
test1(5,-25,105);

function value(arr) {
  return arr[0];

}
value([1, 2, 3]);

for (let a = 1; a <= 100; a = a + 10) {
  for (let b = a; b < a + 10; b++) {
    document.write(b + " ");
  }
  document.write("<br>")
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write("<br>");
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }
  document.write("<br>");
}
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }
  document.write("<br>");
}
for (let i = 5; i >= 1; i--) {
  for (let j = i; j >= 1; j--) {
    document.write(j);
  }
  document.write("<br>");
}

/*var ary=[10,20,30,40,50];
document.write(ary);

var ary=[10,20,30,40,50];
sum=0;
for(let i=0;i<=4;i++){

document.write(ary[i]+ " ");
sum=sum+ary[i];
}"<br>"
document.write(sum);

var ary = new Array(3);
for (let g = 0; g < 3; g++) {
  ary[g] = prompt("enter the value");
}
for (let i = 0; i < 3; i++) {
  document.write(ary[i]);
}

var ary = [
  ["harry", 18, "male", "bcom"],
  ["sarah", 20, "female", "mba"],
  ["harry", 22, "male", "bcom"],
  ["sarah", 18, "female", "mba"]
];
// document.write(ary);
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    document.write(ary[i][j] + " ");
  }
  document.write("<br>");
}
var a = ["sanjay", "manu", "aman", "viaks"];
document.write(a + "<br>");
a.sort();
document.write(a);
a.reverse();
document.write(a+ "<br>");
a.pop();
document.write(a+ "<br>");
a.push("rahul");
document.write(a+ "<br>");
a.shift();
document.write(a+ "<br>");
a.unshift("rahul");
document.write(a+ "<br>");
var b =["hemant","mahesh","salman","mohsin"];
var c= a.concat(b);
document.write(c+ "<br>");
var d=c.join("/ ");
document.write(d);

/*slice
var sh=["jayant","hemant","karan","aman"];
document.write(sh + "<br>");
var slc=sh.slice(1,3);
document.write(slc +"<br>");

 /*splice

 var a =["jayant","hemant","karan","aman"];
 document.write(a + "<br");
 a.splice(2,2,"sonu","monu");
 document.write(a); */

/*isArray*/
/*
 var a =["ram","laxman","Bhart","shatrughan"];
 document.write(a + "<br");
 
 var b =Array.isArray(a);
 document.write(b);*/

/*
 var a =["ram","laxman","Bhart","shatrughan"];
 document.write(a + "<br");
 
 var b =  a.indexOf("laxman");
 document.write(b);*/

/* lastindex 
var a = ["ram", "laxman", "Bhart", "shatrughan"];
document.write(a + "<br")
var b = a.lastIndexndexOf("laxman");
document.write(b); */

/*
var a = ["ram", "laxman", "Bhart", "shatrughan"];
document.write(a + "<br");

var b = a.includes("laxman");
document.write(b);*/

/*var a = ["ram", "laxman", "Bhart", "shatrughan"];
a.toString();

document.write(a);*/
/*
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]*/


function makePair(a, b) {
  return [a, b];
}
console.log(makePair(51, 21));

/*Given an object containing counts of both upvotes and downvotes, 
return what vote count should be displayed. This is calculated by subtracting the number of downvotes 
from upvotes.

Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0*/

function getVoteCount(a) {
  return a.upvotes - a.downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

/*Write a function to reverse an array.

Examples
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []*/

function reverse(arr) {
  let result=[]
  for (let i = arr.length - 1; i >= 0; i--) {
    //console.log(arr[i]);
    result.push(arr[i])
  }
return result
}
console.log(reverse([1, 2, 3, 4])) // [4, 3, 2, 1])
//console.log(reverse([9, 9, 2, 3, 4])) // [4, 3, 2, 9,9])
//console.log(reverse([])) // []))

/*Help fix all the bugs in the function incrementItems!
 It is intended to add 1 to every element in the array!

Examples
incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]*/

function incrementItems(arr){
  for(let i=0;i< arr.length;i++){
    //console.log(arr[i])
    arr[i]=arr[i]+1;
    
  }
  return arr
}
console.log(incrementItems([0, 1, 2, 3]));

/*You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2*/
/*Given an index and an array, return the value of the 
array with the given index.

Examples
valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6

valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5

valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4*/

function valueAt(arr,index){
 
return arr[Math.floor(index)]
}

console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)) // 6

console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)) //5


console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)) //  4*/

/*Fix the code in the code tab to pass this challenge 
(only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
sumArray([1, 2, 3, 4, 5]) ➞ 15

sumArray([-1, 0, 1]) ➞ 0

sumArray([0, 4, 8, 12]) ➞ 24*/

function sumArray(arr) {
	let sum =0	
  for (let i=0; i<arr.length; i++) {
	  sum+=arr[i]
	}
  return sum
}
console.log(sumArray([1, 2, 3, 4, 5])) // 15

console.log(sumArray([-1, 0, 1])) // 0

console.log(sumArray([0, 4, 8, 12])) // 24*/
console.log(sumArray([-1])) // 0
/*
Create a function that takes an array of numbers or letters and 
returns a string.

Examples
arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"*/
function arrayToString(arr){
  let str=""
  for(let i=0;i<arr.length;i++){
    str+= arr[i]
  }
return str;
}
console.log(arrayToString([1, 2, 3, 4, 5, 6])) // "123456"

console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) // ➞ "abcdef"

console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))// ➞ "123asdAAAA"*

/*Create a function to concatenate two integer arrays.

Examples
concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]*/

function concat(a,b){
  //return [...a,...b]
  let result=[]
  for(let i=0;i<a.length;i++){
    result.push(a[i])
  }
  for(let i=0;i<b.length;i++){
    result.push(b[i])
  }
  return result
}
console.log(concat([1, 3, 5], [2, 6, 8]))// ➞ [1, 3, 5, 2, 6, 8]

console.log(concat([7, 8], [10, 9, 1, 1, 2])) //➞ [7, 8, 10, 9, 1, 1, 2]

console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))// ➞ [4, 5, 1, 3, 3, 3, 3, 3]*/

/*object*/
var a= {

fname :'yahoo',
lname : 'baba',
age :25,
favMovies : ['dhoom','sholay','hum']
}
console.log(a.fname)
console.log(a.favMovies[1])

var person = new Object();

person.firstname= 'ram';
person.lastname='kumar';
person.age=25;

document.write(person) 
console.log(person.firstname)
console.log(person.age)

/*Array of object*/

var student = [
 {name: 'ram',age :15},
 {name:'karan',age :13},
 {name:'rahul',age :14},
];

console.log(student);
for(let i=0;i<student.length;i++){
  document.write(student[i].name + " " +student[i].age );
} 
/*const variable with array & oject*/

//const air =[10,20,30];
//air= 50;
//air[0]=70;
//console.log(air);
const air ={
  name:"ram",
  age:31
};
air.name="yahoo baba";
console.log(air);
/* for/in loop*/
var obj={
firstname:"yahoo",
lastname:"baba",
age:25,
email:"hello@yahoobaba.net"
};
for(var i in obj){
  document.write(obj[i] + "<br>");
}
/* map method*/
/*var ary=[11,4,9,16];
var b=ary.map(test);
document.write(b);
function test(x){
  return x*10;
}*/
var ary=[
  {fname:"yahoo",lname:"baba"},
  {fname:"imran",lname:"khan"},
  {fname:"mithun",lname:"minhas"}
];
var b=ary.map(test);
document.write(b);
function test(x){
  return x.fname  + " " + x.lname + "<br>";
}
/* string method */
var str = "Javascript is Great is lang";
var str1 = "hello";
var a=str.length;
var a=str.toLowerCase(); //
var a=str.toUpperCase(); //
var a=str.includes("GREAT"); // TRUE
var a=str.startsWith("Javascript"); //true
var a=str.endsWith("Lang"); // false
var a=str.search("is"); //11
var a=str.match(/is/g);//is,is
var a=str.concat(str1); //Javascript is Great is langhello
var a=str.split(" "); //Javascript,is,Great,is,lang
document.write(a);

/* number method*/
var a ="99";
var num=Number(a);
document.write(num); // 99 true 1 false 0

var a ="10.33";
var num=parseInt(a);
document.write(num); // 10*/ */


var a = ["sanjay", "manu", "aman", "viaks"];
document.write(a + "<br>");
a.sort();
document.write(a); // aman,manu,sanjay,viaks
a.reverse();
document.write(a+ "<br>"); // viaks,sanjay,manu,aman
a.pop();
document.write(a+ "<br>"); // viaks,sanjay,manu
a.push("rahul","salman");

document.write(a+ "<br>"); // viaks,sanjay,manu,rahul,salman

a.shift();
document.write(a+ "<br>"); // sanjay,manu,rahul,salman

a.unshift("rahul");
document.write(a+ "<br>"); // rahul,sanjay,manu,rahul,salman

var b =["hemant","mahesh","salman","mohsin"];
var c= a.concat(b);
document.write(c+ "<br>"); // rahul,sanjay,manu,rahul,salman,hemant,mahesh,salman,mohsin

var d=c.join("/ ");
document.write(d); // rahul/ sanjay/ manu/ rahul/ salman/ hemant/ mahesh/ salman/ mohsin

/*slice*/
var sh=["jayant","hemant","karan","aman"];
document.write(sh + "<br>");
var slc=sh.slice(0,2);
document.write(slc +"<br>");

 /*splice 

 var a =["jayant","hemant","karan","aman"];
 console.log(a);
//  document.write(a + "<br");
 a.splice(2,0,"Anwar","Raju");
 console.log(a);

 document.write(a); //*/

 var a =["jayant","hemant","karan","aman"];
 document.write(a + "<br");
 
 var b =  a.indexOf("aman",1);
 console.log(b);
 document.write(b);

 
 /*lastindex */
var a = ["jayant","hemant","karan","aman"];

document.write(a + "<br")
// var b = a.lastIndexndexOf("karan");
document.write(b); 



