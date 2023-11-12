let display = document.getElementById("display");
let numbers = document.getElementsByClassName("numbers")
let equalIsClicked = false;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", numbersOnDisplay);
}

function numbersOnDisplay(number) {
    if(equalIsClicked == true){
        display.innerText = number.target.innerText
        equalIsClicked = false
        return
    }
    if (display.innerText.length >= 17) {
        return
    }
    else if (display.innerText == "Error") {
        display.innerText = "";
    }
    if(display.innerText == 0){
        display.innerText = number.target.innerText
        return
    }
    display.innerText += number.target.innerText;
}

function clearAll() {
    display.innerText = "";
}


function equality() {
    equalIsClicked = true;
    if (display.innerText.includes("+")) {
        let split = display.innerText.split("+");
        display.innerText = Number(split[0]) + Number(split[1]);
    }
    else if (display.innerText.includes("x")) {
        let split = display.innerText.split("x");
        display.innerText = Number(split[0]) * Number(split[1]);
    }
    else if (display.innerText.includes("÷")) {
        let split = display.innerText.split("÷");
        if (split[1] == 0) {
            display.innerText = "Error";
        }
        else {
            display.innerText = Number(split[0]) / Number(split[1]);
        }
    }
    else if (display.innerText.includes("%")) {
        let split = display.innerText.split("%");
        display.innerText = (Number(split[0]) * Number(split[1])) / 100;
    }
    else if (display.innerText.includes("-")) {
        if (display.innerText.startsWith("-")) {
            let split = display.innerText.substring(1).split("-")
            if (split.length > 1) {
                display.innerText = -Number(split[0]) - Number(split[1]);
            }
        }
        else {
            let split = display.innerText.split("-");
            display.innerText = Number(split[0]) - Number(split[1]);
        }
    }
}


function mathOperations(operator) {
    if (display.innerText == "" || display.innerText == "Error") {
        display.innerText += operator;
    }
    else {
        equality();
        display.innerText += operator;
    }
    equalIsClicked = false;
}