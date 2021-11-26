/*Return the Sum of Two Numbers */
function sum(a, b) {
    return a + b;
}
console.log("sum:-", sum(4, 2));
/* 6 */

/*Write a function that takes an integer minutes and converts it to seconds.*/

function getminute(n) {

    return n * 60;

}
console.log("second is :", getminute(5));
/* 300 */

/* Return the Next Number from the Integer Passed*/

function addition(n) {
    return n + 1;
}
console.log(" addition :-", addition(99));
/* addition :- 100 */

/*Write a function that takes the base and height of a triangle and return its area.*/

function area(b, h) {

    return (b * h) / 2;
}
console.log("area is :", area(7, 4));
/* area is : 14 */

/* 5 .Create a function that takes the age in years and returns the age in days */

function agedays(n) {
    return n * 365;
}
console.log("age in days is :-", agedays(65));
/* age in days is :- 23725 */

/*Fix the code in the code tab to pass this challenge (only syntax errors). 
Look at the examples below to get an idea of what the function should do. 
cubes(3) ➞ 27
cubes(5) ➞ 125*/

function cube(n) {

    return n * n * n;
}
console.log("cube value is :- ", cube(5));
/* cube value is :- 125 */

/*Create a function that takes a number as its only argument and returns true if it's less than or equal to zero,
 otherwise return false.*/

function lessthenorequaltozero(num) {
    if (num <= 0) {
        return true;
    }
    else {
        return false;
    }

}
console.log("lessthen or equal to zero -", lessthenorequaltozero(4));


/* 8 Create a function that takes an array containing only numbers and return the first element */

function getfirstvalue(arr) {
    return arr[0]

}
getfirstvalue([1, 2, 3])

/* 9 Create a function that takes voltage and current and returns the calculated power */

function power(v, c) {

    return v * c;
}
console.log("power is :-", power(4, 5));

/* 10 Write a function that converts hours into seconds. */

function convertseconds(h) {

    return h * 60 * 60;
}
console.log("seconds in given hours is :-", convertseconds(2));

/* Create a function that finds the maximum range of a triangle's third edge, 
where the side lengths are all integers. */

function max(s1, s2) {

    return (s1 + s2) - 1;
}
console.log("max range of triangle :-", max(9, 2));
console.log("max range of triangle :-", max(8, 10));

/* Return the Remainder from Two Numbers */

function remainder(a, b) {
    return a % b;

}
console.log("remainder is :-", remainder(5, 5));
console.log("remainder is :-", remainder(1, 5));
console.log("remainder is :-", remainder(13, 5)); console.log("remainder is :-", remainder(-9, 45));

/* Create a function that takes length and width and finds the perimeter of a rectangle.*/

function perimeter(l, w) {

    return 2 * (l + w);
}
console.log("rectangle perimeter is :-", perimeter(6, 7));
console.log("rectangle perimeter is :-", perimeter(2, 9));

/* Write a function that returns the string "something" joined with a space " " and the given argument a.

function returnvalue(){
    
return 

}*/

/* Correct the Mistakes
Fix the code in the code tab to pass this challenge (only syntax errors). 
Look at the examples below to get an idea of what the function should do. */

function square(n) {
    return n * n;
}
console.log("square value is :- ", square(9));

/* Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, 
otherwise return false.*/

function lessthen(n) {
    if (n <= 0) {
        return true;
    }
    else {
        return false;
    }

}
console.log("lessthenequalto =", lessthen(5));
console.log("lessthenequalto =", lessthen(-5));

/* Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).*/

function polygon(n) {

    return (n - 2) * 180;
}
console.log("polygon is :-", polygon(4));

/* A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. 
He needs your help to fix this code.*/

/*function namestring(name){
var b = "edabit" ;
var result = name+b ;
return result ;
}
console.log("namestring:-", namestring());*/

/* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.*/

function sumnumber(a, b) {

    if ((a + b) <= 100) {
        return true;
    }
    else {
        return false;
    }


}
console.log("less than 100:-", sumnumber(202, 15));