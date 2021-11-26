let runningTotal = 0;
let buffer = 0;
let previousOperator = null;

const screen = document.querySelector(".screen");

document.querySelector('.calc-buttons').addEventListener("click", function (event) {
    buttonclick(event.target.innerText);
});

function buttonclick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);

    }
    rerender();
}

function handleNumber(value) {
    if (buffer === '0') {
        buffer = value;
    } else {
        buffer += value;
    }
    
}

function handleSymbol(value) {
    switch (value) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            previousOperator = null;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            break;
        case "&larr;":
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

function handlemath(value){
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    }else {
        flushOperation(intBuffer);
    }
    previousOperation = value;

    buffer = "0";
}

function flushOperation (intBuffer){
    if(previousOperator === "+"){
        runningTotal += intBuffer;
    }else if (previousOperator === "-"){
        runningTotal -= intBuffer;
    } else if(previousOperator === "&times"){
        runningTotal "&times"= intBuffer;
    }else {
         runningTotal /= intBuffer;
    }
}

function rerender() {
    screen.innerText = buffer;
}
