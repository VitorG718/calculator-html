let value1 = undefined;
let value2 = undefined;
let selectedOperation = undefined;
let hasResult = false

let display = document.getElementById('display')
display.value = "0"

function negative() {
    if (display.value.indexOf('-') == -1) {
        if (display.value != "0") {
            display.value = "-" + display.value
        }
    } else {
        display.value = display.value.slice(1, display.value.length)
    }
}

function writeDisplay(number) {
    if(hasResult) {
        display.value = "0"
        hasResult = false
    }
    if(display.value.length <= 14) {
        if(number == '.') {
            if(display.value.indexOf('.') == -1) {
                display.value += number
            }
        } else {
            if(display.value == "0") {
                display.value = number
            } else {
                display.value += number
            }
        }
    }
}

function operation(operation) {
    if (selectedOperation == undefined) {
        value1 = display.value
        selectedOperation = operation
        display.value = "0"
    } else {
        if(!hasResult) {
            value1 = getResult()
            display.value = value1
        }
        selectedOperation = operation
    }
}

function clean() {
    display.value = "0"
    value1 = undefined
    value2 = undefined
    selectedOperation = undefined
}

function result() {
    display.value = getResult()
    selectedOperation = undefined
}

function getResult() {
    let result;
    if(selectedOperation == undefined) {
        result = display.value
    } else {
        value2 = display.value
        result = `${eval(`${value1} ${selectedOperation} ${value2}`)}`
        result = result.slice(0,16)
        value2 = undefined
        hasResult = true
    }
    return result
}