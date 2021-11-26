/*/* video 21 do while loop

var x=5;

do{

    document.write(x + "alo <br />");
    x++;
}while (x<=20);*/

/* video 22 event handler */
/* video 24 objects */

/*  
var guddu ="hi i m softenggineer";
document.write(guddu.length);*/

/* video 25 create ur own objects
function person(name, age){

    this.name = name;
    this.age = age;
}
var bucky = new person("buckey roberts", 24);
var taylor = new person("taylor swift", 20);

document.write(bucky.name);*/
 
/*object initializers 

 bucky = (name: "Bucky roberts" , age: 24);
 taylor = (name: "taylor Swift", age : 20);

document.write(bucky.name + " loves " + taylor.names + " because she is" + taylor.age); */

/* adding methods to our objects 

function people(name,age){

    this.name = name;
    this.age = age;
    this.yearsuntilRetire = yearsleft;
}

function yearsleft(){

    var numyears =65 - this.age;
    return numyears;
}

var natalie = new people("natalie portman",20);
var bucky = new people("bucky",31);

documents.write(bucky.yearsuntilRetire()); */

/* video 28 array */

/*
var people = new Array("Ram","rahim","jacob","jolly","mirdha");
document.write(people[0]); */
/* video 30 concate array
var dudes = new Array("bucky","dan","Randy");
var chicks = new Array("liss","eric","mitty");

var people = dudes.concat(chicks);

document.write(people[3]);*/

/* Video 31 join and pop */
 
/* var movies = new Array("karma" ,"Baazigar","khiladi420", "hero");
var string1 = movies.join(" - ");

document.write(string1);
document.write(movies[1]/br);
movies.pop();
document.write(movies[2]); */

/* reverse push sort 

var bp= new Array("gajendra", "mukesh","rakesh","Sunil");
bp.reverse();
bp.push("nitesh", "mohit");
bp.sort();

var string1= bp.join();
document.write(string1);*/

/* 33 Add array element using loop */
/*
var crap = new Array(3);
for(i=0;i<3;i++){
crap[i]=prompt("add element", "");

}
document.write(crap[0]+crap[1]+crap[2]); 

var stuff = new Array("apples","pears","tuna","ham");
stuff.sort();
for(i=0;i<stuff.length;i++){

document.write(`${stuff[i]}<br>`);

}
 /* math object */
/*

 let submitDOM = document.querySelector(".submit-btn")

 console.log(submitDOM);

 submitDOM.addEventListener("click", printText);

 function printText(){
     alert("Submit Button clicked");
 }*/
console.log("Hello World");
 const monthlyrent = 500;
 console.log(monthlyrent);
 const yearlyrent= monthlyrent*12;
 console.log(yearlyrent);