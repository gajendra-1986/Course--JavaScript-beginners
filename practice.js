const myname = `brian holt`;
console.log(myname);

const firstname = "brian";
const lastname = "holt";

const sentence = "hello " + firstname + " " + lastname + " how are you";
const sentencewithtemplate = `hello ${firstname}  ${lastname} ! how are you`;

console.log(sentence);
console.log(sentencewithtemplate);

const skyisblue = true;

if (skyisblue) {
    console.log("the sky is blue");
}
else {
    console.log("the sky is not blue");
}
const tempratuetoday = 86;

if (tempratuetoday === 86) {
    console.log("its too damn hot");
}
else {
    console.log("its too fine");
}

const party = 10;
if (party === 0) {
    console.log("nachos");
} else if (party <= 5) {
    console.log("mario kart");
}
else {
    console.log("dance");
}

function addtwo(num) {
    return num + 2;
}
console.log(addtwo(5));

function addtwo() {

    return 9 + 2;
}
console.log(addtwo());

const myhomecity = "salt lake city";
const myhomestate = "utah";
const myhomecountry = "usa";

function logoutyourhome(city, state, country) {
    console.log(`you are from ${city}, ${state} ${country}`);

}

logoutyourhome(myhomecity, myhomestate, myhomecountry);
logoutyourhome("udaipur", "Rajasthan", "india");



const word = "this Has werid Casting on it";
console.log(word.toUpperCase());

const name = "Brain holt";
console.log(name.substr(4));

function greet(firstname, lastname, honorific, greeting) {
    return `${greeting} ${honorific} ${lastname}! i m happy to join with us, ${firstname}`
}

console.log(greet("brain", "holt", "lord", "salutation"));

var ary = [10, "hsrry", "sarah", true, null];

for (var a = 0; a < 5; a++) {
    console.log("<li>" + ary[a] + "</li>");

}

var ary = new Array(3);
for (var g = 0; g < 3; g++) {

    ary[g] = prompt("enter the value:-");
}
for (var a = 0; a < 3; a++) {
    console.log(ary[a]);

}

var ary = [
    ["harry", 18, "male", "bcom"],
    ["sunny", 19, "male", "bcm"],
    ["sarah", 10, "male", "bbm"]
];
for (var a = 0; a < 3; a++) {
    for (var b = 0; b < 3; b++) {
        console.log(ary[a][b] + " ");
    }
    console.log("<br>");
}


