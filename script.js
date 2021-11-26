// video 5 - variable

/*
var x = "Hemant"
var y = 5.5
var z = 5

document.write(x)
document.write(y)
document.write(z+y)

// snake case
var first_name = "aman"
document.write(first_name)

//camel case
var firstName = "aman"
document.write(firstName)

var first_name_99 = "aman"
document.write(first_name_99)

var 99firstname = "aman"
document.write(99firstname)
*/



// Video 6 - Let & const


// let
// Uncaught SyntaxError: Identifier 'name1' has already been declared
/*let name1 ="gajendra"
let name1="aman"
document.write(name1)*/

/*let name1 ="gajendra"
name1="aman"
document.write(name1)

//const
/*const aaa= "ANwar"
aaa= "60"
document.write(aaa)

const aaa= "ANwar"
const aaa= "60"
document.write(aaa)*/

// video 7 - Data type

/*var x = "yahoo baba" //string
document.write(x)
document.write(typeof x)

var x = 34 // Number
document.write(x)
document.write(typeof x)

var x = true // boolean
document.write(x)
document.write(typeof x)

var xx = ["html","css","js"]; //object
document.write(xx)
document.write(typeof xx)
document.write("<br>");


var xyz ={      //object
    firstName : "gajendra",
    country : "india"

}
document.write(xyz)
document.write(typeof xyz)

var x; // variable Declaration 
document.write(x)
document.write(typeof x)

var a = null //null
document.write(a)
document.write(typeof a) */

/* video 8 - Arthmetic Operator */

//add
/*
var a = 10
var b = 15
var c= a+b;

document.write(c)
document.write("<br>")

// sub
var a = 10
var b = 15
var c= a-b;

document.write(c)
document.write("<br>")

// multiply
var a = 10
var b = 15
var c= a*b;

document.write(c)
document.write("<br>")


// divide
var a = 100
var b = 15
var c= a/b;

document.write(c)
document.write("<br>")

// mod
var a = 100
var b = 15
var c= a%b;

document.write(c)
document.write("<br>")
    
// power
var a = 2
var b = 3
var c= a**b;

document.write(c)
document.write("<br>")

// increment
var a = 2
var b = 3


document.write(a+b)
document.write("<br>")
a++
document.write(a)

// decrement
var a = 20
var b = 3


document.write(a+b)
document.write("<br>")
a--
document.write(a)*/



/* video 9- Assgnment operator*/

/*var a = 10
var b = 3

a +=b 
document.write(a) // 13

var a = 10
var b = 3

a -=b 
document.write(a)  // 7   */



/* video 10- console 

var b= 70
console.log(b)
console.time("hmmm")
console.table([1,2,3])
console.error("this is bug")
console.warn("this is warning")
console.warn("this is warning")
console.warn("this is warning")
//console.clear()
console.timeEnd("hmmm")*/

//document.getElementById("abc")
//<h1 id=​"abc">​heading​</h1>​

//document.getElementById("abc").innerText
//'headingpage'

//document.getElementById("abc").innerHTML
//'heading<span>page</span>'




/* video 11 - comparison operator */

/*var a = 20; 
var b = "20";

console.log(a==b) //true (equal to)
console.log(a===b) // false (value and datatype is equal to)
console.log( 2 !=3 );// true
console.log (2!=="3")// true value and datatype is not equal to)
console.log(2>4) // false
console.log(2<4)// true
console.log(20>=40)//false
console.log(20<=40)//true
console.log(null==undefined)*/

/* video 12 - if statement */

/*var a = 100;
var b = 20;

if(a>b){
    document.write("a is greator") 
}*/ // a is greator

/*var a = 100
var b = "100"
if(a===b){
    document.write("a is greator") 
} // condition false not print */


/* video 13 - logical operators */


/*var age = 20
if(age >= 18 && age <=21){
    console.log("you are eligible")
} // and condition you are eligible */

/* var age = 22
if(age >= 18 && age <=21){
    console.log("you are eligible")
}  // no print */


/*var age = 22
if(age >= 18 || age <=21){
    console.log("you are eligible")
} // you are eligible */

/*var a = 10;
var b = 15;

if(a >= 11 || b <= 14){
    console.log("you are eligible")
} // you are eligible */


/* video 14 - if else statement */

/* var x = 55;

if(x > 30){
    document.write("x is Greter");
}
else{
    document.write("x is smaller");
} // x is Greter

var x = 5;

if(x > 30){
    document.write("x is Greter");
}
else{
    document.write("x is smaller");
} // x is smaller 

var x = 100;

if(x == 100){
    document.write("x is same");
}
else{
    document.write("x is not same");
} // x is same


var x = "100";

if(x == 100){
    document.write("x is same");
}
else{
    document.write("x is not same");
} // x is same

var x = "100";

if(x === 100){
    document.write("x is same");
}
else{
    document.write("x is not same");
} // x is not same

var name = "yahoo baba";
var gender ="male";

if(gender =="male"){
    document.write("hello mr." + name);
}else {
    document.write("hello miss"+name)
}


var name = "yahoo baba";
var gender ="female";

if(gender =="male"){
    document.write("hello mr." + name);
}else {
    document.write("hello miss"+name)
} */


/*  video 15- if else if 

 var per = 45;

 if(per >= 80 && per <=100){
     document.write("you are in merit")
 }else if(per >=60 && per <=80){
     document.write("you are in first div")
 }else if(per >=45 && per <=60){
    document.write("you are in second div")
 }
 else if(per >=33 && per <=45){
    document.write("you are in third div")
 }else if(per <=33){
    document.write("you are fail")
 }
 else{
     document.write("please enter a valid percent")
 } */

/* video 16 - ternary operator 

var a = 100;
var b;
(a==100)? b ="true" : b = "false";
document.write(b); // true

var a = 100;
var b;
(a==500)? b ="true" : b = "false";
document.write(b); // false
 
var a = 100;
var b= (a==500)? "true":"false";
document.write(b); // false */

/* video 17 - switch statement 

var day = 3;
switch(day){
    case 0:
        document.write("today is monday");
    break;
    case 1:
        document.write("today is tuesday");
    break;
    case 2:
        document.write("today is wednesday");
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
*/

/* var day = 0; // without break
 switch(day){
     case 0:
         document.write("today is monday");
     
     case 1:
         document.write("today is tuesday");
     
     case 2:
         document.write("today is wednesday");
     
     case 3:
         document.write("today is thrusday");
     
     case 4:
         document.write("today is friday");
     
     case 5:
         document.write("today is saturday");
     
     case 6:
         document.write("today is sunday");
     break;
     default:
         document.write("invalid day");
 } */

/* same statement 
var day = 4;
switch(day){
    case 0:case 1:case 2:case 3:
        document.write("today is monday");
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
    
} */

/* switch case conditional operator 

var age = 18;
switch (true){
    case(age >= 15 && age <= 20):
    document.write("you are eligible");
    break;
    case(age >= 21 && age <=30):
    document.write("you are not eligible");
    break;
    default:
    document.write("enter the valid age");
}*/

/* video  18 - alert box */

/*var a = 10;
var b = 05;

if(a>b){
    alert("a is Greater");
}else{
    alert("b is greater");
} // msg print a is greater    */

/* 
var a = 10;
var b = 05;

if(a>b){
    alert(a);
}else{
    alert(b);
} // value print 10 */



/* video 19 - confirm box */

// confirm("do u like our website");
/*
var a = confirm("do u like  our website")
// console.log(a) true/false
if(a){   
    alert("thanks");
}else{
    alert("sorry");
}*/



/* video 20 - prompt box */

/* 
var a = prompt("what is ur name");
//  console.log(typeof a)  string
document.write(a);
*/

/*
var per = prompt("enter the percentage");

 if(per >= 80 && per <=100){
     document.write("you are in merit")
 }else if(per >=60 && per <=80){
     document.write("you are in first div")
 }else if(per >=45 && per <=60){
    document.write("you are in second div")
 }
 else if(per >=33 && per <=45){
    document.write("you are in third div")
 }else if(per <=33){
    document.write("you are fail")
 }
 else{
     document.write("please enter a valid percent")
 } 
*/

/* video 21 - function 

function hello(){
    document.write("helloooooo everybody")
}
function yahoo(){
    document.write("hello yahoo baba")
}
hello()
document.write("<br>")
hello()
yahoo()
hello()
hello()
*/

/* video 22- function with parameter */

/*function hello(fname,lname){
    document.write("hello"+fname + " "+ lname)
}
hello("aman","gajen") // hello aman gajen

function hello(fname,lname){
    document.write("hello"+fname + " "+ lname)
}
hello() // hello undefined undefined */

/*
function hello(fname="yahoo",lname="baba"){
    document.write("hello"+fname + " "+ lname)
}
hello() // hello yahoo baba

function hello(fname="yahoo",lname="baba"){
    document.write("hello"+fname + " "+ lname + "<br>")
}
function sum(a,b){
    document.write(a+b)
}

hello("ram","singh") // hello ram singh
hello("salman","khan") // hello salman khan
sum(20,15); */

/* video 23 - function return */

// function fullname(fname ="yahoo",lname="baba"){
//       var a= fname+ " "+ lname;
//       return a;
// }
// var fn = fullname("ram","singh");
// document.write(fn) 

/*
function fullname(fname,lname){
      return "hello " +  fname + " " +   lname;
}
console.log(fullname("ram","singh"));
console.log(fullname("Anwar","Moazam"));


 function sum(math,eng,sc){
     return math+eng+sc;
 }
 console.log(sum(45,60,60))
 */

/* video 24 - globle & local variable */

// debugger

/*
var a = "aman bhai"  //globle variable
function hello (){
   var a = "yahoo baba"
    console.log(a + "<br>"); //yahoo baba
    

}
console.log(hello());
console.log(a)   // aman bhai
*/


/*

 function hello (){
    var a = "yahoo baba" // local variable yahoo baba
     console.log(a + "<br>");
 }
 hello();
 console.log(a) // a is not defined
*/

/* video 25 - event */

/*
var button= document.getElementById("myid")
console.log(button)
// button.addEventListener("click",hello)
// button.addEventListener("dblclick",hello)
button.addEventListener("mouseover",hello) // ctrl + space

function hello (){
    console.log("hello everyone")
}

*/



/* video 26 - while loop */

/*
var a = 1;

while(a <= 10){
    document.write("<li>" + a   + "hello developer </li> ")
    a=a+1;
} // 1 to 10 print 1hello developer

var a = 10;

while(a >=1){
    document.write("<li>" + a   + "hello developer </li> ")
    a=a-1;
} //10 to 1 10hello developer
*/


/* video 27- do while loop */
/*
var a = 1;
do{
    document.write(a + "hello yahoo developer <br>");
    a++;
}
while(a <= 10)
// 1hello yahoo developer
*/


/* video 28 - for loop */
/*debugger
for (var a = 1; a<=10;a++){
    document.write("hello yahoo developer boss <br>")
} //hello yahoo developer boss


/* video 29 - break & Continue statement */
/*  
for (var a = 1; a<=10;a++){
    if(a==3){
       document.write("hey : "+ a + "<br>") 
       continue;
    }
    document.write("number :" + a + "<br>")
} 
*/

/*
for (var a = 1; a<=10;a++){
    if(a==3){
       document.write("hey : "+ a + "<br>") 
       break;
    }
    document.write("number :" + a + "<br>")
} */

/* video - 30 even odd number */
/*
for(var a=1;a<=100;a++){
    if(a%2==0){
        document.write(a + "<br>")
    }
} // even
*/

/*
for(var a=1;a<=100;a++){
    if(a%2!=0){
        document.write(a + "<br>")
    }
} // odd
*/

/* video 31- Nested Loop */

/*

for(var a=1; a<=100; a=a+10){
    for(var b=a; b <a+10; b++){
    document.write(b  + " "); 
}
document.write("<br>")
}
*/


/* video 32- nested loop */


/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

for(var i = 1; i <= 5; i++) {
    for(var j = 1; j <= i; j++) {
        document.write(j + " ")
    }
    document.write("<br>")
} */

/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1


for(var i = 5; i >= 1; i--) {
    for(var j = 1; j <= i; j++) {
        document.write(j + " ")
    }
    document.write("<br>")
} 
*/

/*
5 5 5 5 5
4 4 4 4
3 3 3
2 2
1

for(var i = 5; i >= 1; i--) {
    for(var j = 1; j <= i; j++) {
        document.write(i + " ")
    }
    document.write("<br>")
} 

*/

/* video 33- array */


/*
var arr=[10,20,30,40,50];
 document.write(arr) // 10,20,30,40,50
 */ 


/*
 var arr = [10,20,30,40,50]
 document.write(arr[3]) // 40
 */

 /*
 var arr = [10,20,30,40,50]
 for(var a =0;a<=4;a++){
     document.write(arr[a]+ "<br>")
 }

10
20
30
40
50
*/

// sum of array 

/*
var sum=0;
var arr=[10,20,30,40,50]
for(var i=0;i<arr.length;i++){
    document.write(arr[i]+ " "+"<br>")
    sum=sum+arr[i];
}

document.write(sum+ "<br>")
*/

/* video 34- array method */

/*
var arr = new Array();
arr[0]=10;
arr[1]="harry";
arr[2]=true;

for(var a=0;a<5;a++){
    document.write(arr[a])
} 
// 10harrytrueundefinedundefined
*/ 


// array value from user 
/*
var arr = new Array(3);
for(var g=0;g<3;g++){
    arr[g]=prompt("enter the value")
}

for(var a=0;a<5;a++){
    document.write(arr[a])
} 
// tomharry50undefinedundefined 
*/

/* multidimenional array */
/*
var arr =[
    ["harry",18,"male","bcom"],
    ["sunny",19,"male","bca"],
    ["sarah",21,"female","bca"],
];

for(var a=0;a<4;a++){
    for(var b=0;b<4;b++){
        document.write(arr[a][b]);
    }
    document.write("<br>")
}
*/
