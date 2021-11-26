let runningtotal = 0;
let buffer = "0";
let previousOperator = null;
const screen = document.querySelector(".screen");

document.querySelector('.calc-buttons').addEventListener("click", function (event) {

    buttonclick(event.target.value);

})

function buttonclick(value) {
    console.log(value);
    if (isNaN(parseInt(value))) {
        handlesymbol(value);
    } else {
        handleNumber(value);
    }
}
function handlenumber(value) {
    if (buffer === '0') {
        buffer = value;
    } else {
        buffer += value;
    }
    rerender();
}

function handlesymbol(value) {
    switch (value) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            previousOpertor = null;
            break;
        case "=":
            if (previosOpertor === null) {

                return;
            }
            flushOpertation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningtotal;
            runningtotal = 0;
            break;
        case " < --":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        default:
            handlemath(value);
            break;
    }
}

function handlemath(value) {
    const intbuffer = parseInt(buffer);
    if (runningtotal === 0) {
        runningtotal = intbuffer;
    } else {
        flushOpertation(intbuffer);
    }
    previousOperator = value;
    buffer = "0";
}


function flushOpertation(intbuffer) {
    if (previousOperator === "+") {
        runningtotal += intbuffer;
    } else if (previousOperator === "-") {
        runningtotal -= intbuffer;
    } else if (previousOperator === "*") {
        runningtotal *= intbuffer;
    }else {
    runningtotal /= intbuffer;
}
}
    function rerender() {


        screen.innertext = buffer;
    }